/* node tests/batch-two.cjs [playwrightPath] [local|https://base/] [existingOutputDir] [axePath] */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.argv[2] || 'playwright');
const root = path.resolve(__dirname, '..');
const target = process.argv[3] || 'local';
assert(target === 'local' || /^https:\/\/[^?#]+\/$/.test(target));
const base = target === 'local' ? pathToFileURL(root + path.sep).href : target;
const output = process.argv[4];
if (output) assert(fs.statSync(output).isDirectory());
const axeSource = process.argv[5] ? fs.readFileSync(process.argv[5], 'utf8') : null;
function readConfig(file, name) {
  return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8').replace(new RegExp(`^\\s*window\\.${name}\\s*=\\s*`), '').replace(/;\s*$/, ''));
}
const sites = readConfig('sites.js', 'DEMO_SITES');
const clients = sites.filter(site => site.batch === 2).map(site => ({ ...site, config: readConfig(`${site.slug}/config.js`, 'SITE_CONFIG') }));
assert.equal(clients.length, 10);
const notice = 'Propuesta independiente de Nebula. Sin vínculo comercial ni autorización de esta inmobiliaria.';
const imageURLs = new Set(clients.flatMap(({ config }) => [config.brand.logo, ...config.properties.flatMap(p => p.images)].filter(Boolean)).map(value => new URL(value, base).href));
let checks = 0;
let details = 0;
let audits = 0;
let incomplete = 0;
const errors = [];
function check(value, label) { assert(value, label); checks++; }
function equal(actual, expected, label) { assert.deepEqual(actual, expected, label); checks++; }

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge' });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
    context.setDefaultTimeout(15000);
    await context.route('**/*', route => {
      const request = route.request();
      const url = request.url();
      if (!['GET', 'HEAD'].includes(request.method())) { errors.push('Unexpected write: ' + url); return route.abort(); }
      if (request.isNavigationRequest() && !url.startsWith(base)) { errors.push('External navigation: ' + url); return route.abort(); }
      if (url.startsWith(base) || /^(data:|blob:)/.test(url) || request.resourceType() === 'image' && imageURLs.has(url)) return route.continue();
      if (request.resourceType() === 'stylesheet') return route.fulfill({ contentType: 'text/css', body: '' });
      return route.abort();
    });
    await context.addInitScript(() => {
      document.addEventListener('submit', event => { event.preventDefault(); event.stopImmediatePropagation(); }, true);
    });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('requestfailed', request => { if (request.url().startsWith(base)) errors.push('Missing resource: ' + request.url()); });
    page.on('response', response => { if (response.url().startsWith(base) && response.status() >= 400) errors.push(response.status() + ' ' + response.url()); });
    async function go(client, hash = '#/') {
      await page.mouse.move(0, 0);
      const url = new URL(`${client.slug}/index.html`, base).href;
      if (page.url().split('#')[0] === url) await page.evaluate(hash => { location.hash = hash; }, hash);
      else await page.goto(url + hash, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(hash => document.querySelector('#main')?.dataset.hash === hash, hash);
      check((await page.locator('#header .brand').innerText()).includes(client.config.brand.shortName), `${client.slug}: identity`);
      if (hash.startsWith('#/panel')) {
        check((await page.locator('.demo-notice').innerText()).includes(notice), `${client.slug}: independent dashboard`);
        check(await page.locator('#proposal-notice').isHidden(), `${client.slug}: no banner/sidebar overlap`);
      } else {
        check(await page.locator('#proposal-notice').isVisible(), `${client.slug}: visible independent notice`);
        equal(await page.locator('#proposal-notice').innerText(), notice, `${client.slug}: immutable independent notice`);
      }
      const bad = await page.locator('a[href]').evaluateAll(links => links.filter(link => /^(mailto:|tel:)$/.test(link.getAttribute('href')) || /^https:\/\/wa\.me\/\?/.test(link.getAttribute('href'))).map(link => link.href));
      equal(bad, [], `${client.slug}: no empty channels`);
    }
    async function audit(client, route, width) {
      if (!axeSource) return;
      await page.evaluate(axeSource);
      const result = await page.evaluate(async () => {
        const result = await axe.run(document, { preload: false, runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
        return { violations: result.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) })), incomplete: result.incomplete.length };
      });
      equal(result.violations, [], `${client.slug} ${route} ${width}: axe`);
      audits++;
      incomplete += result.incomplete;
    }
    await page.goto(new URL('index.html', base).href);
    await page.waitForSelector('.directory-card');
    equal(await page.locator('.directory-card').count(), sites.length, 'All registered routes appear in directory');
    const decoded = new Set();
    const favorites = new Map();
    for (const client of clients) {
      const { config, slug } = client;
      check(config.properties.length <= 3, `${slug}: brief selection`);
      const routes = ['#/', '#/propiedades', '#/nosotros', '#/contacto', '#/favoritos', '#/panel', '#/panel/propiedades', '#/panel/mensajes', '#/panel/configuracion'];
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const route of routes) {
          await go(client, route);
          check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${slug} ${route} ${width}: no overflow`);
          if (route === '#/') {
            equal(await page.locator('#featured-grid .property-card').count(), config.properties.filter(p => p.featured).length, `${slug}: featured selection`);
            if (!config.properties.length) {
              equal(await page.locator('.hero-image, .hero-caption, .hero-controls, .about-image').count(), 0, `${slug}: no invented imagery or property controls`);
              check(await page.locator('.hero-institutional').isVisible(), `${slug}: institutional hero`);
            }
            await audit(client, route, width);
            if (output) {
              await page.locator('img').evaluateAll(images => images.forEach(image => { image.loading = 'eager'; }));
              await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth));
              await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
              await page.evaluate(async () => {
                for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) {
                  scrollTo(0, y);
                  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
                }
                scrollTo(0, 0);
                await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
              });
              await page.screenshot({ path: path.join(output, `${slug}-batch-two-${width}.png`), fullPage: true });
            }
          }
          if (route === '#/contacto') await audit(client, route, width);
          if (route === '#/propiedades') equal(await page.locator('.property-card').count(), config.properties.length, `${slug}: catalog size`);
        }
      }
      await page.setViewportSize({ width: 1440, height: 1000 });
      await go(client);
      const urls = [config.brand.logo, ...config.properties.flatMap(p => p.images)].filter(Boolean).map(value => new URL(value, base).href);
      for (const url of new Set(urls)) {
        if (decoded.has(url)) continue;
        const ok = await page.evaluate(async url => {
          const image = new Image();
          let timer;
          try {
            image.src = url;
            await Promise.race([image.decode(), new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Image timeout')), 20000); })]);
            return image.naturalWidth > 0 && image.naturalHeight > 0;
          } catch { return false; }
          finally { clearTimeout(timer); }
        }, url);
        check(ok, `${slug}: original image ${url}`);
        decoded.add(url);
      }
      for (const p of config.properties) {
        await go(client, '#/propiedad/' + p.id);
        equal(await page.locator('.detail-heading h1').innerText(), p.title, `${slug}: detail title`);
        const expected = p.price === null ? 'Consultar precio' : `${p.currency === 'ARS' ? 'ARS $' : 'USD'} ${new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 }).format(p.price)}`;
        check((await page.locator('.detail-price').innerText()).includes(expected), `${slug}: published price`);
        check(await page.locator('.source-box a').evaluateAll((links, source) => links.some(link => link.getAttribute('href') === source), p.source), `${slug}: original publication`);
        await page.locator('.gallery-button').click();
        check(await page.locator('#gallery').evaluate(dialog => dialog.open), `${slug}: gallery`);
        await page.keyboard.press('Escape');
        details++;
      }
      await go(client, '#/propiedades');
      if (config.properties.length) {
        const type = config.properties[0].type;
        await go(client, '#/propiedades?type=' + encodeURIComponent(type));
        equal(await page.locator('.property-card').count(), config.properties.filter(p => p.type === type).length, `${slug}: type filter`);
        equal(await page.locator('#favorite-counter').innerText(), '0', `${slug}: isolated initial favorites`);
        await page.locator('[data-action="favorite"]').first().click();
        equal(await page.locator('#favorite-counter').innerText(), '1', `${slug}: favorite toggle`);
        favorites.set(slug, config.properties[0].id);
        await page.reload();
        await page.waitForSelector('#favorite-counter');
        equal(await page.locator('#favorite-counter').innerText(), '1', `${slug}: favorite persists`);
      }
      await go(client, '#/panel/configuracion');
      const pending = page.waitForEvent('download');
      await page.locator('[data-action="export"]').click();
      const download = await pending;
      equal(await download.failure(), null, `${slug}: JSON export`);
      const stream = await download.createReadStream();
      const chunks = [];
      for await (const chunk of stream) chunks.push(chunk);
      equal(JSON.parse(Buffer.concat(chunks).toString()), config, `${slug}: exported configuration matches`);
      const imported = structuredClone(config);
      imported.brand.shortName = 'Prueba de configuración';
      await page.locator('#config-import').setInputFiles({ name: 'demo.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(imported)) });
      await page.waitForFunction(() => document.querySelector('.brand-preview').textContent.includes('Prueba de configuración'));
      check((await page.locator('.demo-notice').innerText()).includes(notice), `${slug}: import preserves independence`);
      await page.reload();
      await page.waitForFunction(() => document.querySelector('.brand-preview').textContent.includes('Prueba de configuración'));
      check(true, `${slug}: imported configuration persists, including empty catalog`);
      const invalid = structuredClone(config);
      invalid.home.heroIds = ['missing-property'];
      await page.locator('#config-import').setInputFiles({ name: 'invalid.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(invalid)) });
      await page.waitForFunction(() => document.querySelector('#toast').textContent.includes('JSON no válido'));
      check((await page.locator('.brand-preview').innerText()).includes('Prueba de configuración'), `${slug}: dangling hero rejected`);
      await page.locator('[data-action="restore"]').click();
      check((await page.locator('.brand-preview').innerText()).includes(config.brand.shortName), `${slug}: restored original`);
      await go(client, '#/favoritos');
      equal(await page.locator('.property-card').count(), favorites.has(slug) ? 1 : 0, `${slug}: favorites independent of config restore`);
      console.log(`PASS ${slug}: ${config.properties.length} properties, desktop/mobile routes and import/export`);
    }
    for (const [slug, id] of favorites) {
      const client = clients.find(client => client.slug === slug);
      await go(client, '#/favoritos');
      equal(await page.locator('.property-card [data-action="favorite"]').getAttribute('data-id'), id, `${slug}: other clients did not overwrite favorite`);
    }
    equal(details, clients.reduce((sum, client) => sum + client.config.properties.length, 0), 'All actual property details checked');
    equal(errors, [], 'No JavaScript errors, missing resources or external writes/navigation');
    console.log(JSON.stringify({ clients: clients.length, details, images: decoded.size, checks, audits, incompleteAudits: incomplete, base, errors }, null, 2));
    await context.close();
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
