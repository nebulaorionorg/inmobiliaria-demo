/* Optional: node tests/clients-browser.cjs [playwrightPath] [local|https://base/] [existingOutputDir] [axePath]
 * No server, application dependencies, form submissions or external page navigation. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.argv[2] || 'playwright');

const root = path.resolve(__dirname, '..');
const target = process.argv[3] || 'local';
const local = target === 'local';
assert(local || /^https:\/\/[^?#]+\/$/.test(target), 'arg3 must be local or an HTTPS base URL ending in /');
const base = local ? pathToFileURL(root + path.sep).href : new URL(target).href;
const output = process.argv[4] && path.resolve(process.argv[4]);
if (output) assert(fs.statSync(output).isDirectory(), 'Screenshot parent must be an existing directory');
const axeSource = process.argv[5] ? fs.readFileSync(path.resolve(process.argv[5]), 'utf8') : null;

function readJSONWrapper(file, globalName) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const match = source.match(new RegExp(`^\\s*window\\.${globalName}\\s*=\\s*([\\s\\S]*?)\\s*;?\\s*$`));
  assert(match, `${file}: expected a single window.${globalName} JSON assignment`);
  return JSON.parse(match[1]);
}
const sites = readJSONWrapper('sites.js', 'DEMO_SITES');
assert.equal(sites.length, 11, 'Expected the eleven registered clients');
assert.equal(new Set(sites.map(site => site.slug)).size, 11, 'Client slugs must be unique');
const clients = sites.map(site => {
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(site.slug), 'Unsafe client slug');
  return { ...site, config: readJSONWrapper(`${site.slug}/config.js`, 'SITE_CONFIG') };
});
assert.equal(clients.reduce((sum, site) => sum + site.config.properties.length, 0), 51, 'Expected all 51 published properties');
const assetURL = value => new URL(value, base).href;
const imageURLs = new Set(clients.flatMap(({ config }) => [config.brand.logo, ...config.properties.flatMap(p => p.images)].filter(Boolean)).map(assetURL));
const clientURL = slug => new URL(`${slug}/index.html`, base).href;
const belongs = url => local ? url.startsWith('file:') : url.startsWith(base);
const results = { checks: [], images: new Map(), axe: [], screenshots: [], jsErrors: [], requestFailures: [], httpFailures: [], imageErrors: [], unsafeRequests: [], submissions: [] };
let details = 0;
function check(condition, message, evidence) {
  results.checks.push({ passed: Boolean(condition), message, ...(condition || evidence === undefined ? {} : { evidence }) });
  if (!condition) console.error(`FAIL ${message}${evidence === undefined ? '' : ': ' + JSON.stringify(evidence)}`);
}
function equal(actual, expected, message) {
  try { assert.deepEqual(actual, expected); check(true, message); }
  catch { check(false, message, { actual, expected }); }
}
async function section(label, task) {
  try { await task(); }
  catch (error) { check(false, label, error.message); }
}
const expectedPrice = p => p.price === null ? 'Consultar precio' : `${p.currency === 'ARS' ? 'ARS $' : 'USD'} ${new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 }).format(p.price)}`;
const storageKey = (slug, field) => `${slug === 'cristian-moos' ? 'cm-demo' : `inmobiliaria-demo:${slug}`}-${field}-v1`;

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  let context;
  try {
    context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
    context.setDefaultTimeout(10000);
    context.setDefaultNavigationTimeout(25000);
    await context.route('**/*', route => {
      const request = route.request();
      const url = request.url();
      const type = request.resourceType();
      if (!['GET', 'HEAD'].includes(request.method()) || (request.isNavigationRequest() && !url.startsWith(base))) {
        results.unsafeRequests.push({ url, method: request.method(), type });
        return route.abort('blockedbyclient');
      }
      if (url.startsWith(base) || /^(data:|blob:)/.test(url)) return route.continue();
      if (type === 'image' && imageURLs.has(url)) return route.continue();
      // Fonts and third-party profiles are deliberately not prerequisites of this harness.
      if (type === 'stylesheet') return route.fulfill({ contentType: 'text/css', body: '' });
      return route.abort('blockedbyclient');
    });
    await context.addInitScript(() => {
      window.__clientHarness = { imageErrors: [], submissions: [] };
      document.addEventListener('error', event => {
        if (event.target instanceof HTMLImageElement) window.__clientHarness.imageErrors.push(event.target.currentSrc || event.target.src);
      }, true);
      document.addEventListener('submit', event => {
        window.__clientHarness.submissions.push(event.target.dataset.form || 'unknown');
        event.preventDefault();
        event.stopImmediatePropagation();
      }, true);
      document.addEventListener('click', event => {
        const anchor = event.target.closest('a');
        if (anchor && !['file:', 'https:'].includes(new URL(anchor.href).protocol)) event.preventDefault();
      }, true);
    });
    context.on('page', page => {
      page.on('pageerror', error => results.jsErrors.push({ page: page.url(), error: error.message }));
      page.on('requestfailed', request => {
        if (belongs(request.url())) results.requestFailures.push({ url: request.url(), error: request.failure()?.errorText });
      });
      page.on('response', response => {
        if (belongs(response.url()) && response.status() >= 400) results.httpFailures.push({ url: response.url(), status: response.status() });
      });
    });
    const page = await context.newPage();
    async function collect() {
      const data = await page.evaluate(() => {
        const data = window.__clientHarness;
        if (!data) return null;
        return { imageErrors: data.imageErrors.splice(0), submissions: data.submissions.splice(0) };
      });
      if (data) {
        results.imageErrors.push(...data.imageErrors.map(url => ({ page: page.url(), url })));
        results.submissions.push(...data.submissions);
      }
    }
    async function rendered(hash) {
      await page.waitForFunction(hash => document.querySelector('#main')?.dataset.hash === hash, hash);
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    }
    async function links(label, config) {
      const invalid = await page.locator('a[href]').evaluateAll((anchors, brand) => anchors.flatMap(a => {
        const href = a.getAttribute('href').trim();
        if (/^(tel:|mailto:)$/i.test(href) || (/^(tel:|mailto:)/i.test(href) && !a.textContent.trim())) return [href];
        if (/^https:\/\/wa\.me\//.test(href) && (!brand.whatsapp || !href.startsWith(`https://wa.me/${brand.whatsapp}?`))) return [href];
        if (a.closest('.socials') && ![brand.instagram, brand.facebook].filter(Boolean).includes(href)) return [href];
        return [];
      }), config.brand);
      equal(invalid, [], `${label}: no empty or unconfigured contact/social links`);
    }
    async function go(site, hash = '#/') {
      await collect();
      // A cursor left on the edge of a translated :hover button can oscillate after a route change.
      await page.mouse.move(0, 0);
      const url = clientURL(site.slug);
      if (page.url().split('#')[0] === url) {
        if (new URL(page.url()).hash !== hash) await page.evaluate(hash => { location.hash = hash; }, hash);
      } else await page.goto(url + hash, { waitUntil: 'domcontentloaded' });
      await rendered(hash);
      await links(`${site.slug} ${hash}`, site.config);
    }
    async function cardIDs() {
      return page.locator('.property-card').evaluateAll(cards => cards.map(card => card.querySelector('[data-action="favorite"]').dataset.id));
    }
    async function probeImages(site) {
      const urls = [...new Set([site.config.brand.logo, ...site.config.properties.flatMap(p => p.images)].filter(Boolean).map(assetURL))];
      const pending = urls.filter(url => !results.images.has(url));
      for (let i = 0; i < pending.length; i += 6) {
        const decoded = await page.evaluate(async urls => Promise.all(urls.map(async url => {
          const image = new Image();
          let timer;
          try {
            image.src = url;
            await Promise.race([image.decode(), new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('decode timeout (20s)')), 20000); })]);
            if (!image.naturalWidth || !image.naturalHeight) throw new Error('empty image');
            return { url, ok: true, width: image.naturalWidth, height: image.naturalHeight };
          } catch (error) { return { url, ok: false, error: error.message }; }
          finally { clearTimeout(timer); image.src = ''; }
        })), pending.slice(i, i + 6));
        for (const image of decoded) results.images.set(image.url, image);
      }
      for (const url of urls) {
        const image = results.images.get(url);
        check(image.ok, `${site.slug}: original image decodes ${url}`, image);
      }
    }
    async function audit(site, hash, width) {
      if (!axeSource) return;
      await page.evaluate(axeSource);
      const audit = await page.evaluate(async () => {
        // Use the loaded CSSOM; axe's optional stylesheet fetches are not supported on file://.
        const result = await window.axe.run(document, { preload: false, runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
        const summarize = items => items.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) }));
        return { violations: summarize(result.violations), incomplete: summarize(result.incomplete), passes: result.passes.length };
      });
      results.axe.push({ slug: site.slug, hash, width, ...audit });
      // Run real text contrast checks; decorative secondary palette values are not text assertions.
      equal(audit.violations, [], `${site.slug} ${hash} ${width}px: axe WCAG A/AA`);
    }
    async function screenshot(site, width) {
      if (!output) return;
      assert(fs.statSync(output).isDirectory(), 'Screenshot parent must still exist');
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map(async image => {
          image.loading = 'eager';
          let timer;
          try { await Promise.race([image.decode(), new Promise(resolve => { timer = setTimeout(resolve, 20000); })]); }
          catch { /* Original URL probes and captured error events report failures, even after fallback. */ }
          finally { clearTimeout(timer); }
        }));
        scrollTo(0, 0);
      });
      const file = path.join(output, `${site.slug}-home-${width === 1440 ? 'desktop' : 'mobile'}.png`);
      await page.screenshot({ path: file, fullPage: true });
      results.screenshots.push(file);
      check(fs.statSync(file).size > 0, `${site.slug}: screenshot ${width}px saved`);
    }

    await section('Root registry', async () => {
      await page.goto(new URL('index.html', base).href, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('.directory-card');
      equal(await page.locator('.directory-card').count(), 11, 'Root registry renders exactly eleven clients');
      const cards = await page.locator('.directory-card').evaluateAll(cards => cards.map(card => ({ href: card.href, text: card.textContent })));
      for (const site of clients) {
        const expected = new URL(`${site.slug}/${local ? 'index.html' : ''}`, base).href;
        check(cards.some(card => card.href === expected && card.text.includes(site.name) && card.text.includes(site.description)), `Root registry links and identifies ${site.slug}`);
      }
    });
    const favorites = new Map();
    for (const [index, site] of clients.entries()) {
      const { slug, config } = site;
      const start = results.checks.length;
      console.log(`CLIENT ${index + 1}/11 ${slug} (${config.properties.length} properties)`);
      await page.setViewportSize({ width: 1440, height: 1000 });
      await section(`${slug}: home and original assets`, async () => {
        await go(site);
        const featured = config.properties.filter(p => p.featured).slice(0, 6);
        equal(await cardIDs(), featured.map(p => p.id), `${slug}: expected featured count and identities`);
        for (const property of featured.filter(p => p.price === null)) equal(await page.locator('#featured-grid .property-card').filter({ has: page.locator(`[data-id="${property.id}"]`) }).locator('.card-price').innerText(), 'Consultar precio', `${slug}/${property.id}: home card unknown price`);
        check((await page.locator('#header .brand').innerText()).includes(config.brand.shortName), `${slug}: configured brand name`);
        equal(await page.evaluate(() => document.documentElement.style.getPropertyValue('--primary')), config.brand.primary, `${slug}: primary brand color`);
        check((await page.title()).includes(config.brand.name), `${slug}: page title includes brand`);
        equal(await page.locator('#header .brand-logo').count(), config.brand.logo ? 1 : 0, `${slug}: configured logo presence`);
        if (config.brand.logo) equal(await page.locator('#header .brand-logo').getAttribute('src'), assetURL(config.brand.logo), `${slug}: original logo URL`);
        for (let i = 0; i < config.home.heroIds.length; i++) {
          const property = config.properties.find(p => p.id === config.home.heroIds[i]);
          equal(await page.locator('.hero-caption').getAttribute('href'), `#/propiedad/${property.id}`, `${slug}: hero ${i + 1} property`);
          equal(await page.locator('.hero-caption > span > span').innerText(), expectedPrice(property), `${slug}: hero ${i + 1} honest price`);
          if (i + 1 < config.home.heroIds.length) await page.locator('[data-action="hero-next"]').click();
        }
        await probeImages(site);
      });
      await section(`${slug}: catalog and filters`, async () => {
        await go(site, '#/propiedades');
        equal(await cardIDs(), config.properties.map(p => p.id), `${slug}: complete catalog cardinality and identities`);
        equal(await page.locator('.results-toolbar p strong').innerText(), String(config.properties.length), `${slug}: visible catalog result count`);
        check(await page.locator('#sort').isDisabled(), `${slug}: no cross-currency price sorting`);
        for (const property of config.properties) {
          const card = page.locator('.property-card').filter({ has: page.locator(`[data-action="favorite"][data-id="${property.id}"]`) });
          equal(await card.locator('.card-price').evaluate(el => el.firstChild.textContent), expectedPrice(property), `${slug}/${property.id}: card honest price`);
          if (property.area === null && property.landArea === null) check(!/m\u00b2/.test(await card.locator('.card-specs').innerText()), `${slug}/${property.id}: no invented card area`);
        }
        for (const type of config.types) {
          await go(site, '#/propiedades?type=' + encodeURIComponent(type));
          equal(await page.locator('[name="type"]').inputValue(), type, `${slug}: type UI retains ${type}`);
          equal(await cardIDs(), config.properties.filter(p => p.type === type).map(p => p.id), `${slug}: type filter ${type}`);
        }
        for (const currency of ['USD', 'ARS']) {
          await go(site, `#/propiedades?currency=${currency}`);
          equal(await page.locator('[name="currency"]').inputValue(), currency, `${slug}: currency UI retains ${currency}`);
          const matching = config.properties.filter(p => p.currency === currency);
          equal(await cardIDs(), matching.map(p => p.id), `${slug}: currency filter ${currency}`);
          for (const sort of ['priceAsc', 'priceDesc']) {
            await page.locator('#sort').selectOption(sort);
            await rendered(`#/propiedades?currency=${currency}&sort=${sort}`);
            const sorted = [...matching].sort((a, b) => a.price === null ? (b.price === null ? 0 : 1) : b.price === null ? -1 : sort === 'priceAsc' ? a.price - b.price : b.price - a.price);
            equal(await cardIDs(), sorted.map(p => p.id), `${slug}: ${currency} ${sort}, unknown prices last`);
          }
          await go(site, `#/propiedades?currency=${currency}&min=0&max=999999999999`);
          equal(await cardIDs(), matching.filter(p => p.price !== null && p.price <= 999999999999).map(p => p.id), `${slug}: ${currency} numeric range excludes unknown prices`);
        }
      });
      for (const property of config.properties) await section(`${slug}/${property.id}: detail`, async () => {
        await go(site, `#/propiedad/${property.id}`);
        equal(await page.locator('h1').innerText(), property.title, `${slug}/${property.id}: detail title`);
        equal(await page.locator('.detail-price strong').innerText(), expectedPrice(property), `${slug}/${property.id}: detail price`);
        equal(await page.locator('.source-box a').getAttribute('href'), property.source, `${slug}/${property.id}: source retained without visiting`);
        if (property.area === null && property.landArea === null) check(!/m\u00b2/.test(await page.locator('.detail-specs').innerText()), `${slug}/${property.id}: no invented detail area`);
        await page.locator('.gallery-button').click();
        check(await page.locator('#gallery').evaluate(dialog => dialog.open), `${slug}/${property.id}: gallery opens`);
        for (let i = 0; i < property.images.length; i++) {
          equal(await page.locator('.gallery-toolbar > span').innerText(), `${i + 1} / ${property.images.length}`, `${slug}/${property.id}: gallery counter ${i + 1}`);
          const image = page.locator('.gallery-stage img');
          const actual = await image.getAttribute('src');
          const fallback = await image.getAttribute('data-fallback');
          check(actual === assetURL(property.images[i]) && !fallback, `${slug}/${property.id}: gallery original image ${i + 1}`, { actual, expected: assetURL(property.images[i]), fallback });
          if (i + 1 < property.images.length) await page.keyboard.press('ArrowRight');
        }
        await page.keyboard.press('Escape');
        check(!(await page.locator('#gallery').evaluate(dialog => dialog.open)), `${slug}/${property.id}: gallery closes with Escape`);
        details++;
      });
      await section(`${slug}: favorites`, async () => {
        await go(site, '#/favoritos');
        equal(await cardIDs(), [], `${slug}: favorites initially isolated from previous clients`);
        const selected = config.properties.slice(0, index % 2 + 1).map(p => p.id);
        favorites.set(slug, selected);
        await go(site, '#/propiedades');
        for (const id of selected) await page.locator(`[data-action="favorite"][data-id="${id}"]`).click();
        equal(await page.locator('#favorite-counter').innerText(), String(selected.length), `${slug}: favorite counter`);
        await go(site, '#/favoritos');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await rendered('#/favoritos');
        equal(await cardIDs(), selected, `${slug}: favorites persist on reload`);
      });
      await section(`${slug}: dashboard and simulated messages`, async () => {
        await go(site, '#/panel');
        equal(await page.locator('.metric strong').allTextContents(), [config.properties.length, config.properties.length, favorites.get(slug)?.length || 0, 3].map(String), `${slug}: all four dashboard metric values`);
        check(/sin contrase\u00f1a/i.test(await page.locator('.demo-notice').innerText()), `${slug}: public demo disclosure`);
        for (const property of config.properties.slice(0, 4).filter(p => p.price === null)) equal(await page.locator(`.table-property[href="#/propiedad/${property.id}"] b`).innerText(), 'Consultar precio', `${slug}/${property.id}: dashboard overview unknown price`);
        await go(site, '#/panel/propiedades');
        for (const property of config.properties.filter(p => p.price === null)) equal(await page.locator(`.table-property[href="#/propiedad/${property.id}"] b`).innerText(), 'Consultar precio', `${slug}/${property.id}: dashboard unknown price`);
        await go(site, '#/panel/mensajes');
        equal(await page.locator('.message-card').count(), 3, `${slug}: exactly three demo messages`);
        check(/fictici|simulad/i.test(await page.locator('.message-notice').innerText()) && /simulad/i.test(await page.locator('.simulation-badge').innerText()), `${slug}: messages clearly marked as simulated`);
        equal(await page.locator('.message-card h3').allTextContents(), config.dashboard.messages.map(m => m.subject), `${slug}: configured message subjects`);
        equal(await page.locator('.message-card p').allTextContents(), config.dashboard.messages.map(m => m.text), `${slug}: configured message bodies`);
      });
      await section(`${slug}: same JSON import and reload`, async () => {
        await go(site, '#/panel/configuracion');
        const key = storageKey(slug, 'config');
        equal(await page.evaluate(key => localStorage.getItem(key), key), null, `${slug}: no preseeded imported configuration`);
        await page.locator('#config-import').setInputFiles({ name: `${slug}.json`, mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(config)) });
        await page.waitForFunction(message => document.querySelector('#toast')?.textContent === message, config.labels.importSuccess);
        equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), key), config, `${slug}: exact shipped JSON accepted, including nullable prices and empty WhatsApp`);
        await page.reload({ waitUntil: 'domcontentloaded' });
        await rendered('#/panel/configuracion');
        equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), key), config, `${slug}: exact imported JSON persists after reload`);
        check((await page.locator('.brand-preview').innerText()).includes(config.brand.shortName), `${slug}: reloaded import renders brand`);
        await go(site, '#/propiedades');
        equal(await cardIDs(), config.properties.map(p => p.id), `${slug}: reloaded import renders complete catalog`);
        for (const property of config.properties.filter(p => p.price === null)) {
          await go(site, `#/propiedad/${property.id}`);
          equal(await page.locator('.detail-price strong').innerText(), 'Consultar precio', `${slug}: imported null price still renders honestly`);
        }
      });
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
        for (const hash of ['#/', '#/propiedades', `#/propiedad/${config.properties[0].id}`, '#/contacto', '#/panel']) await section(`${slug} ${hash} ${width}px`, async () => {
          await go(site, hash);
          const layout = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
          check(Math.max(layout.document, layout.body) <= width + 1, `${slug} ${hash}: no horizontal overflow at ${width}px`, layout);
          if (hash === '#/') await screenshot(site, width);
          if (hash === '#/' || hash === '#/contacto') await audit(site, hash, width);
          if (hash === '#/contacto') {
            check(await page.locator('[data-form="contact"]').isVisible(), `${slug}: contact form visible at ${width}px, never submitted`);
            check(await page.locator('#contact-result').isHidden(), `${slug}: no prepared or sent consultation at ${width}px`);
          }
        });
      }
      await collect();
      const own = results.checks.slice(start);
      console.log(`RESULT ${slug}: ${own.filter(c => c.passed).length} passed, ${own.filter(c => !c.passed).length} failed`);
    }
    await section('Favorites isolation after all clients', async () => {
      for (const site of clients) {
        await go(site, '#/favoritos');
        equal(await cardIDs(), favorites.get(site.slug), `${site.slug}: favorites unchanged after all eleven clients (IDs are tenant-local)`);
      }
    });
    await collect();
    equal(details, 51, 'All 51 desktop property detail/gallery journeys completed');
    equal(results.jsErrors, [], 'No uncaught browser JavaScript errors');
    equal(results.requestFailures, [], 'No failed local/base-prefix requests');
    equal(results.httpFailures, [], 'No local/base-prefix HTTP 4xx/5xx');
    equal([...new Set(results.imageErrors.map(item => item.url))], [], 'No broken rendered original images hidden by fallback');
    equal(results.unsafeRequests, [], 'No non-read requests or external page navigation attempted');
    equal(results.submissions, [], 'No forms submitted, including contact/search forms');
    if (axeSource) equal(results.axe.length, 44, 'All 44 home/contact/viewport axe audits completed');
    if (output) equal(results.screenshots.length, 22, 'All 22 desktop/mobile home screenshots saved');
    const failed = results.checks.filter(c => !c.passed);
    console.log(JSON.stringify({
      engine: process.env.BROWSER_CHANNEL || 'msedge', base, clients: clients.length, details,
      passed: results.checks.length - failed.length, failed: failed.length,
      images: { unique: results.images.size, failed: [...results.images.values()].filter(image => !image.ok) },
      axe: { enabled: Boolean(axeSource), audits: results.axe.length, violations: results.axe.reduce((sum, audit) => sum + audit.violations.length, 0), manualReview: results.axe.filter(audit => audit.incomplete.length).map(({ slug, hash, width, incomplete }) => ({ slug, hash, width, rules: incomplete.map(rule => ({ id: rule.id, nodes: rule.nodes.length })) })) },
      screenshots: results.screenshots, failures: failed,
      limitations: ['No forms submitted; no WhatsApp, social, mail, telephone or source links opened.', 'Third-party fonts/profiles blocked; only configured external images allowed.', 'Axe incomplete findings require manual review; automated checks do not prove full accessibility.', 'Browser state and detailed results are ephemeral; no application files changed.']
    }, null, 2));
    if (failed.length) process.exitCode = 1;
  } finally {
    if (context) await context.close();
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
