/* Optional verification harness. Playwright is not a dependency of the website. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.argv[2] || 'playwright');

const root = path.resolve(__dirname, '..');
const base = pathToFileURL(path.join(root, 'index.html')).href;
const output = process.argv[3];
const config = JSON.parse(fs.readFileSync(path.join(root, 'config.js'), 'utf8').replace(/^window\.SITE_CONFIG\s*=\s*/, '').replace(/;\s*$/, ''));
let checks = 0;
function check(condition, message) { assert(condition, message); checks++; console.log(`PASS ${message}`); }

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    const localFailures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('requestfailed', request => { if (request.url().startsWith('file:')) localFailures.push(request.url()); });
    async function go(hash) {
      await page.goto(base + hash);
      await page.waitForFunction(hash => document.querySelector('#main')?.dataset.hash === hash, hash);
    }
    async function settled() { await page.waitForTimeout(100); }
    async function allImages() {
      await page.locator('img').evaluateAll(images => images.forEach(image => { image.loading = 'eager'; }));
      await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth > 0), null, { timeout: 25000 });
      await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode().catch(() => {}))));
    }
    async function screenshot(name) {
      if (!output) return;
      assert(fs.existsSync(output), 'Screenshot parent directory must already exist');
      await allImages();
      await page.evaluate(async () => {
        await document.fonts.ready;
        for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) {
          scrollTo(0, y);
          await new Promise(resolve => setTimeout(resolve, 60));
        }
        scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 120));
      });
      await page.screenshot({ path: path.join(output, name), fullPage: true });
    }
    await go('#/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForSelector('.property-card');
    check(await page.locator('.property-card').count() === 6, 'home renders six featured properties on file://');
    check(await page.locator('.search-submit').evaluate(el => getComputedStyle(el).backgroundColor) === 'rgb(169, 44, 24)', 'primary buttons use the terracotta sampled from the logo');
    check(await page.locator('.service-icon').first().evaluate(el => getComputedStyle(el, '::after').backgroundColor) === 'rgb(197, 95, 8)', 'decorative accents use the ochre sampled from the logo');
    check(await page.locator('#footer').evaluate(el => getComputedStyle(el).backgroundColor) === 'rgb(33, 25, 21)', 'footer uses the warm black sampled from the logo');
    await allImages();
    await screenshot('demo-home-desktop.png');
    const remote = await page.locator('img').evaluateAll(images => images.filter(image => !image.dataset.fallback).map(image => ({ src: image.src, ok: image.complete && image.naturalWidth > 0 })));
    check(remote.every(image => image.ok), 'all home photographs and official logo load from public client URLs');
    check(await page.locator('img[data-fallback]').count() === 0, 'home uses no fallback photographs during verification');
    const firstHero = await page.locator('.hero-image').getAttribute('src');
    await page.locator('[data-action="hero-next"]').click();
    check(await page.locator('.hero-image').getAttribute('src') !== firstHero, 'hero slider changes photograph and property caption');
    await page.locator('[data-action="home-type"][data-type="Departamento"]').click();
    check(await page.locator('#featured-grid .property-card').count() === 2, 'home type tabs filter the selection');
    await page.locator('[data-action="operation"]').nth(1).click();
    await page.locator('[name="type"]').selectOption('Departamento');
    await page.locator('[data-form="search"] .search-submit').click();
    await page.waitForURL(/operation=Alquiler/);
    await page.waitForFunction(() => document.querySelector('#main')?.dataset.hash === location.hash);
    check(await page.locator('.property-card').count() === 2, 'home search navigates to filtered rentals');
    await go('#/propiedades');
    check(await page.locator('.property-card').count() === 10, 'catalog renders all ten verified publications');
    check(await page.locator('#sort').isDisabled(), 'price sorting disabled without a currency');
    await page.locator('[data-action="advanced"]').click();
    check(await page.locator('.advanced-filters').isVisible(), 'advanced filters expand accessibly');
    await page.locator('[name="currency"]').selectOption('USD');
    await page.locator('[name="min"]').fill('130000');
    await page.locator('[name="max"]').fill('200000');
    await page.locator('.search-submit').click();
    await page.waitForURL(/min=130000/);
    await page.waitForFunction(() => document.querySelector('#main')?.dataset.hash === location.hash);
    check(await page.locator('.property-card').count() === 4, 'USD range returns only the four matching sale properties');
    await page.locator('#sort').selectOption('priceAsc');
    await page.waitForURL(/sort=priceAsc/);
    await page.waitForFunction(() => document.querySelector('#main')?.dataset.hash === location.hash);
    check((await page.locator('.card-price').first().innerText()).includes('135.000'), 'price ordering compares only the selected currency');
    await go('#/propiedades?currency=ARS');
    check(await page.locator('.property-card').count() === 1 && (await page.locator('.card-price').innerText()).includes('950.000'), 'ARS filter keeps the published peso price separate');
    await go('#/propiedades?location=maschwitz&type=Casa&beds=3');
    check(await page.locator('.property-card').count() === 3, 'combined zone, property type and bedroom filters work');
    await go('#/propiedades?credit=1');
    check(await page.locator('.property-card').count() === 1, 'credit filter returns only the property explicitly published as eligible');
    await go('#/propiedades?keyword=14510');
    check(await page.locator('.property-card').count() === 1, 'search matches original reference code');
    await go('#/propiedades?location=sin-resultados');
    check(await page.locator('.empty-state').isVisible(), 'zero results show a useful empty state');
    await go('#/propiedades');
    await page.locator('[data-action="view"][data-view="list"]').click();
    check(await page.locator('.list-view').count() === 1, 'catalog list view is functional');
    await page.locator('[data-action="view"][data-view="grid"]').click();
    await page.locator('[data-action="favorite"]').first().click();
    check(await page.locator('#favorite-counter').innerText() === '1', 'favorite action updates header counter');
    await go('#/favoritos');
    check(await page.locator('.property-card').count() === 1, 'favorites survive navigation and a fresh page load');
    await page.reload();
    check(await page.locator('.property-card').count() === 1, 'favorites persist in localStorage');
    await go('#/propiedad/5543991');
    check((await page.locator('h1').innerText()).includes('Muelles'), 'detail route shows the selected real property');
    check((await page.locator('.detail-price').innerText()).includes('1.200.000'), 'detail retains verified asking price');
    check((await page.locator('.source-box a').getAttribute('href')) === config.properties[0].source, 'detail links to original client publication');
    await page.locator('.gallery-button').click();
    check(await page.locator('#gallery').evaluate(dialog => dialog.open), 'gallery opens as a native modal dialog');
    await page.keyboard.press('ArrowRight');
    check((await page.locator('.gallery-toolbar').innerText()).includes('2 / 4'), 'gallery supports arrow-key navigation');
    await page.keyboard.press('Escape');
    check(!(await page.locator('#gallery').evaluate(dialog => dialog.open)), 'Escape closes the gallery');
    await screenshot('demo-detail-desktop.png');
    await go('#/propiedad/4242852');
    check((await page.locator('.source-box').innerText()).includes('No informado'), 'unknown property fields are not invented');
    await go('#/contacto?property=5543991');
    check((await page.locator('textarea').inputValue()).includes('14510'), 'contact form is prefilled with selected property reference');
    await page.locator('[data-form="contact"] button[type="submit"]').click();
    check(await page.locator('#contact-result').isHidden(), 'native validation prevents empty contact submissions');
    await page.locator('[name="name"]').fill('Prueba de demo');
    await page.locator('[name="phone"]').fill('00000000');
    await page.locator('[name="email"]').fill('prueba@example.com');
    await page.locator('[name="consent"]').check();
    await page.locator('[data-form="contact"] button[type="submit"]').click();
    check(await page.locator('#contact-result').isVisible(), 'valid contact prepares an email draft, not a fake submission');
    check((await page.locator('#contact-result a').getAttribute('href')).startsWith('mailto:info@cristianmoos.com?'), 'email draft uses verified client email');
    check((await page.locator('#contact-result').innerText()).includes('No se envió'), 'contact result explicitly discloses that nothing was sent');
    await go('#/panel');
    check(await page.locator('.metric').count() === 4, 'dashboard displays catalog and local state metrics');
    check((await page.locator('.demo-notice').innerText()).includes('sin contraseña'), 'dashboard is clearly disclosed as public demonstration');
    await screenshot('demo-dashboard-desktop.png');
    await go('#/panel/propiedades');
    await page.locator('[data-action="status"]').first().click();
    check((await page.locator('.status').first().innerText()) === 'Pausada', 'dashboard can pause a publication locally');
    await page.reload();
    check((await page.locator('.status').first().innerText()) === 'Pausada', 'dashboard status persists locally');
    await page.locator('[name="q"]').fill('14510');
    await page.locator('[data-form="dashboard-search"] button').click();
    await page.waitForURL(/q=14510/);
    await page.waitForFunction(() => document.querySelectorAll('tbody tr').length === 1);
    check(await page.locator('tbody tr').count() === 1, 'dashboard search matches a property reference');
    await go('#/propiedades');
    check(await page.locator('.property-card').count() === 10, 'local dashboard status never removes a real public listing');
    await go('#/panel/mensajes?filter=unread');
    await page.locator('[data-action="read"]').first().click();
    check(await page.locator('.message-card').count() === 2, 'simulated message can be marked read');
    await go('#/panel/configuracion');
    const downloadPromise = page.waitForEvent('download');
    await page.locator('[data-action="export"]').click();
    const download = await downloadPromise;
    check(download.suggestedFilename() === 'inmobiliaria-config.json', 'configuration exports as portable pure JSON');
    const changed = JSON.parse(JSON.stringify(config));
    changed.brand.shortName = 'Otra inmobiliaria';
    changed.brand.name = 'Otra inmobiliaria demo';
    changed.brand.logo = '';
    changed.brand.primary = '#b64b30';
    changed.brand.secondary = '#326846';
    changed.brand.ink = '#202820';
    await page.locator('#config-import').setInputFiles({ name: 'cliente.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(changed)) });
    await settled();
    check((await page.locator('.brand-preview').innerText()).includes('Otra inmobiliaria'), 'JSON import updates brand without any local fetch');
    check(await page.locator('.dashboard-sidebar').evaluate(el => getComputedStyle(el).backgroundColor) === 'rgb(32, 40, 32)', 'JSON import updates the dark brand color');
    check(await page.evaluate(() => document.documentElement.style.getPropertyValue('--secondary')) === changed.brand.secondary, 'JSON import updates the secondary brand color');
    await page.reload();
    check((await page.locator('.brand-preview').innerText()).includes('Otra inmobiliaria'), 'imported brand persists only in this browser');
    await page.locator('#config-import').setInputFiles({ name: 'invalido.json', mimeType: 'application/json', buffer: Buffer.from('{"brand": {}}') });
    await settled();
    check((await page.locator('#toast').innerText()).includes('JSON no válido'), 'invalid configuration is rejected without breaking the demo');
    const invalidPalette = { ...changed, brand: { ...changed.brand, secondary: 'not-a-color' } };
    await page.locator('#config-import').setInputFiles({ name: 'color-invalido.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(invalidPalette)) });
    await settled();
    check(await page.evaluate(() => document.documentElement.style.getPropertyValue('--secondary')) === changed.brand.secondary, 'invalid secondary colors cannot overwrite the palette');
    const legacy = JSON.parse(JSON.stringify(changed));
    delete legacy.brand.secondary;
    delete legacy.brand.ink;
    await page.locator('#config-import').setInputFiles({ name: 'cliente-anterior.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(legacy)) });
    await settled();
    check(await page.evaluate(() => document.documentElement.style.getPropertyValue('--secondary')) === legacy.brand.primary, 'previous JSON exports without secondary colors still import');
    check(await page.locator('.dashboard-sidebar').evaluate(el => getComputedStyle(el).backgroundColor) === 'rgb(33, 25, 21)', 'legacy JSON imports restore the default dark brand color');
    await page.locator('[data-action="restore"]').click();
    check((await page.locator('.brand-preview').innerText()).includes('Cristian'), 'restore returns to the shipped client configuration');
    await page.locator('[data-action="reset-demo"]').click();
    await go('#/panel/propiedades');
    check(await page.locator('.status-paused').count() === 0, 'reset restores local publication states');

    const routes = ['#/', '#/propiedades', '#/propiedad/5543991', '#/contacto', '#/nosotros', '#/favoritos', '#/panel', '#/panel/propiedades', '#/panel/mensajes', '#/panel/configuracion'];
    for (const width of [360, 390, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        await go(route);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
        check(!overflow, `no horizontal page overflow: ${route} at ${width}px`);
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await go('#/');
    await page.locator('.menu-toggle').click();
    check(await page.locator('#navigation').isVisible(), 'mobile navigation menu opens');
    await page.keyboard.press('Escape');
    check(await page.locator('#navigation').isHidden(), 'mobile navigation closes with Escape');
    await screenshot('demo-home-mobile.png');
    await go('#/panel');
    await screenshot('demo-dashboard-mobile.png');
    await go('#/propiedad/no-existe');
    check(await page.locator('.empty-state').isVisible(), 'unknown detail route is handled without crashing');
    await go('#/pagina-inexistente');
    check(await page.locator('.empty-state').isVisible(), 'unknown page route is handled without crashing');

    // Simulate an unavailable remote image and unavailable storage without a server.
    const offline = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await offline.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage unavailable'); } });
    });
    await offline.route('https://static.tokkobroker.com/**', route => route.abort());
    const fallbackPage = await offline.newPage();
    fallbackPage.on('pageerror', error => errors.push(error.message));
    await fallbackPage.goto(base);
    await fallbackPage.waitForSelector('.hero-image[data-fallback="true"]');
    check(await fallbackPage.locator('.hero-image').evaluate(image => image.src.endsWith('/assets/placeholder.svg')), 'unavailable remote photographs have a local SVG fallback');
    check(await fallbackPage.locator('.brand-logo').isHidden(), 'unavailable official logo falls back to configured brand text');
    await fallbackPage.locator('[data-action="favorite"]').first().click();
    check(await fallbackPage.locator('#favorite-counter').innerText() === '1', 'favorites still work in memory when localStorage is blocked');
    check((await fallbackPage.locator('#toast').innerText()).includes('no permite guardar'), 'storage limitation is disclosed to the user');
    await offline.close();
    check(errors.length === 0, `no browser runtime errors: ${errors.join('; ')}`);
    check(localFailures.length === 0, `no missing local assets: ${localFailures.join('; ')}`);
    console.log(`\n${checks} browser checks passed. Engine: Microsoft Edge / Chromium. Protocol: file://. No application server.`);
    await context.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
