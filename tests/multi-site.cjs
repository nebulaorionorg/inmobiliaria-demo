/* Optional HTTP verification harness, not an application server or a build step. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const vm = require('node:vm');
const { chromium } = require(process.argv[2] || 'playwright');

const root = path.resolve(__dirname, '..');
const prefix = '/demo-repo/';
const clientA = 'cristian-moos';
const clientB = 'segunda-inmobiliaria';
const fields = ['config', 'favorites', 'statuses', 'read'];
const keysA = Object.fromEntries(fields.map(field => [field, `cm-demo-${field}-v1`]));
const keysB = Object.fromEntries(fields.map(field => [field, `inmobiliaria-demo:${clientB}-${field}-v1`]));
let checks = 0;
function check(condition, message) {
  assert(condition, message);
  checks++;
  console.log(`PASS ${message}`);
}
function equal(actual, expected, message) {
  assert.deepEqual(actual, expected, message);
  checks++;
  console.log(`PASS ${message}`);
}

(async () => {
  const configPath = path.join(root, clientA, 'config.js');
  for (const file of ['index.html', 'sites.js', `${clientA}/index.html`, `${clientA}/config.js`, 'app.js', 'styles.css', 'assets/placeholder.svg']) {
    check(fs.existsSync(path.join(root, file)), `multi-site prerequisite exists: ${file}`);
  }
  const original = JSON.parse(fs.readFileSync(configPath, 'utf8').replace(/^\s*window\.SITE_CONFIG\s*=\s*/, '').replace(/;\s*$/, ''));
  const manifestSource = fs.readFileSync(path.join(root, 'sites.js'), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(manifestSource, sandbox, { timeout: 1000 });
  const sites = JSON.parse(JSON.stringify(sandbox.window.DEMO_SITES));
  check(sites.some(site => site.slug === clientA) && new Set(sites.map(site => site.slug)).size === sites.length, 'manifest includes the real client with unique slugs');
  check(sites.every(site => ['slug', 'name', 'description'].every(field => typeof site[field] === 'string' && site[field])), 'manifest entries define slug, name and description');

  const second = JSON.parse(JSON.stringify(original));
  Object.assign(second.brand, { name: 'Segunda Inmobiliaria Harness', shortName: 'Segunda Harness', primary: '#25634b', logo: '' });
  second.properties.forEach(property => { property.images = property.images.map(() => 'assets/placeholder.svg'); });
  const secondSite = { slug: clientB, name: second.brand.name, description: 'Cliente virtual exclusivo del harness HTTP.' };
  const fixtureManifest = `${manifestSource}\nwindow.DEMO_SITES.push(${JSON.stringify(secondSite)});\n`;
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
  const served = [];
  const serverErrors = [];
  const server = http.createServer((request, response) => {
    function send(status, body, type = 'text/plain; charset=utf-8') {
      served.push({ pathname: request.url.split('?')[0], status });
      response.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
      response.end(request.method === 'HEAD' ? undefined : body);
    }
    try {
      if (!['GET', 'HEAD'].includes(request.method)) return send(405, 'Method not allowed');
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      if (!pathname.startsWith(prefix) || pathname.includes('\0') || pathname.includes('\\')) return send(404, 'Not found');
      if (pathname === `${prefix}sites.js`) return send(200, fixtureManifest, mime['.js']);
      if (pathname === `${prefix}${clientB}/config.js`) return send(200, `window.SITE_CONFIG = ${JSON.stringify(second)};\n`, mime['.js']);
      let relative = pathname.slice(prefix.length);
      if ([`${clientB}/`, `${clientB}/index.html`].includes(relative)) relative = `${clientA}/index.html`;
      if (!relative || relative.endsWith('/')) relative += 'index.html';
      const file = path.resolve(root, relative);
      if (!file.startsWith(root + path.sep)) return send(404, 'Not found');
      try { return send(200, fs.readFileSync(file), mime[path.extname(file)] || 'application/octet-stream'); }
      catch (error) {
        if (['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code)) return send(404, 'Not found');
        throw error;
      }
    } catch (error) {
      serverErrors.push(error.message);
      send(500, 'Harness error');
    }
  });
  let browser;
  let context;
  try {
    await new Promise((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });
    const origin = `http://127.0.0.1:${server.address().port}`;
    const base = origin + prefix;
    const tenantURL = (slug, hash = '#/', entry = 'index.html') => `${base}${slug}/${entry}${hash}`;
    browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
    context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', acceptDownloads: true, serviceWorkers: 'block' });
    context.setDefaultTimeout(12000);
    context.setDefaultNavigationTimeout(15000);
    const errors = [];
    const localFailures = [];
    const localHTTPFailures = [];
    const blockedImages = [];
    const externalRequests = [];
    // No assertion depends on an external host, font, photograph or publication.
    await context.route('**/*', route => {
      const request = route.request();
      const url = request.url();
      if (new URL(url).origin === origin || /^(data:|blob:)/.test(url)) return route.continue();
      externalRequests.push(url);
      if (request.resourceType() === 'image') blockedImages.push(url);
      return route.abort('blockedbyclient');
    });
    context.on('page', page => {
      page.on('pageerror', error => errors.push(`${page.url()}: ${error.message}`));
      page.on('requestfailed', request => {
        if (request.url().startsWith(origin + '/')) localFailures.push(`${request.url()}: ${request.failure()?.errorText}`);
      });
      page.on('response', response => {
        if (response.url().startsWith(origin + '/') && response.status() >= 400) localHTTPFailures.push(`${response.status()} ${response.url()}`);
      });
    });
    const page = await context.newPage();
    async function rendered(hash) {
      await page.waitForFunction(expected => document.querySelector('#main')?.dataset.hash === expected, hash);
    }
    async function go(slug, hash = '#/', entry = 'index.html') {
      const response = await page.goto(tenantURL(slug, hash, entry));
      await rendered(hash);
      equal(new URL(page.url()).pathname, `${prefix}${slug}/${entry}`, `${slug}: route retains its tenant directory`);
      return response;
    }
    async function hashLinks(slug) {
      const links = await page.locator('a[href^="#/"]').evaluateAll(anchors => anchors.map(anchor => ({ href: anchor.getAttribute('href'), url: anchor.href })));
      check(links.length > 0, `${slug}: application renders hash links`);
      check(links.every(link => new URL(link.url).pathname.startsWith(`${prefix}${slug}/`)), `${slug}: every hash link resolves inside its own directory`);
    }
    async function snapshot(keys) {
      return page.evaluate(keys => Object.fromEntries(Object.entries(keys).map(([field, key]) => [field, localStorage.getItem(key)])), keys);
    }
    async function importConfig(config, keys, slug) {
      await go(slug, '#/panel/configuracion');
      await page.locator('#config-import').setInputFiles({ name: 'same-client.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(config)) });
      await page.waitForFunction(({ key, name }) => JSON.parse(localStorage.getItem(key) || 'null')?.brand.name === name, { key: keys.config, name: config.brand.name });
      check((await page.locator('.brand-preview').innerText()).includes(config.brand.shortName), `${slug}: imported brand renders`);
      equal(new URL(page.url()).pathname, `${prefix}${slug}/index.html`, `${slug}: importing a brand never changes tenant URL`);
    }
    async function exportConfig(expected, slug) {
      const pending = page.waitForEvent('download');
      await page.locator('[data-action="export"]').click();
      const download = await pending;
      check(download.suggestedFilename().endsWith('.json'), `${slug}: export downloads a JSON file`);
      equal(await download.failure(), null, `${slug}: export download succeeds`);
      const stream = await download.createReadStream();
      assert(stream, 'Export must provide a readable stream');
      const chunks = [];
      for await (const chunk of stream) chunks.push(chunk);
      equal(JSON.parse(Buffer.concat(chunks).toString('utf8')), expected, `${slug}: exported JSON exactly matches its active configuration`);
    }
    async function sharedAssets(slug, primary) {
      await go(slug);
      equal(await page.locator('base').count(), 0, `${slug}: no base tag can move hash navigation`);
      check(await page.locator('script[src]').evaluateAll(scripts => scripts.some(script => new URL(script.src).pathname === '/demo-repo/app.js')), `${slug}: app.js loads from the shared repository root`);
      check(await page.locator('link[rel="stylesheet"]').evaluateAll(links => links.some(link => new URL(link.href).pathname === '/demo-repo/styles.css' && Boolean(link.sheet))), `${slug}: shared stylesheet loads under the repository prefix`);
      equal(await page.locator('.search-submit').evaluate(button => getComputedStyle(button).backgroundColor), primary, `${slug}: stylesheet and configured primary color are applied`);
      equal(await page.locator('link[rel~="icon"]').evaluate(link => new URL(link.href).pathname), `${prefix}assets/favicon.svg`, `${slug}: favicon uses shared assets`);
      await hashLinks(slug);
    }
    async function fallback(slug) {
      const before = blockedImages.length;
      await go(slug);
      await page.waitForSelector('.hero-image[data-fallback="true"]');
      await page.waitForFunction(() => {
        const image = document.querySelector('.hero-image');
        return image?.complete && image.naturalWidth > 0;
      });
      equal(await page.locator('.hero-image').evaluate(image => new URL(image.src).pathname), `${prefix}assets/placeholder.svg`, `${slug}: blocked remote photograph falls back to the shared SVG`);
      check(blockedImages.length > before, `${slug}: fallback was triggered by an intercepted remote image`);
    }
    async function stateUI(slug, favoriteIds, pausedIds, readIds, name) {
      await go(slug, '#/favoritos');
      equal(await page.locator('[data-action="favorite"]').evaluateAll(buttons => buttons.map(button => button.dataset.id).sort()), [...favoriteIds].sort(), `${slug}: favorites persist without cross-client leakage`);
      await go(slug, '#/panel/propiedades');
      equal(await page.locator('tbody tr').evaluateAll(rows => rows.filter(row => row.querySelector('.status-paused')).map(row => row.querySelector('[data-action="status"]').dataset.id).sort()), [...pausedIds].sort(), `${slug}: local statuses persist without cross-client leakage`);
      await go(slug, '#/panel/mensajes');
      equal(await page.locator('.message-card.is-read [data-action="read"]').evaluateAll(buttons => buttons.map(button => button.dataset.id).sort()), [...readIds].sort(), `${slug}: read messages persist without cross-client leakage`);
      await go(slug, '#/panel/configuracion');
      check((await page.locator('.brand-preview').innerText()).includes(name), `${slug}: configuration persists without cross-client leakage`);
      const response = await page.reload();
      equal(response.status(), 200, `${slug}: configuration reload returns HTTP 200`);
      await rendered('#/panel/configuracion');
      check((await page.locator('.brand-preview').innerText()).includes(name), `${slug}: stored configuration survives a full reload`);
    }

    equal((await page.goto(base)).status(), 200, 'root directory returns HTTP 200');
    await page.waitForFunction(count => Array.isArray(window.DEMO_SITES) && window.DEMO_SITES.length === count, sites.length + 1);
    const directoryLinks = await page.locator('a[href]').evaluateAll(anchors => anchors.map(anchor => ({ raw: anchor.getAttribute('href'), href: anchor.href })));
    for (const site of [...sites, secondSite]) {
      check(directoryLinks.some(link => new URL(link.href).pathname.replace(/index\.html$/, '') === `${prefix}${site.slug}/`), `directory renders the manifest link for ${site.slug}`);
      check((await page.locator('body').innerText()).includes(site.name), `directory renders the manifest name for ${site.slug}`);
      check((await page.locator('body').innerText()).includes(site.description), `directory renders the manifest description for ${site.slug}`);
    }
    check(await page.locator('script[src]').evaluateAll(scripts => scripts.some(script => new URL(script.src).pathname === '/demo-repo/sites.js')), 'directory loads the sites.js manifest under the prefix');
    equal(await page.locator('.property-card').count(), 0, 'root without a hash shows the directory, not a client catalog');
    for (const width of [360, 390]) {
      await page.setViewportSize({ width, height: 844 });
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `directory has no horizontal overflow at ${width}px`);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    const realHref = directoryLinks.find(link => new URL(link.href).pathname.replace(/index\.html$/, '') === `${prefix}${clientA}/`).raw;
    const realLink = page.locator(`a[href=${JSON.stringify(realHref)}]`).first();
    await realLink.click();
    await page.waitForURL(url => url.pathname.startsWith(`${prefix}${clientA}/`));
    await rendered('#/');
    check(new URL(page.url()).pathname.startsWith(`${prefix}${clientA}/`), 'real manifest link opens the real client directory');

    const [p0, p1, p2] = original.properties;
    const [m0, m1, m2] = original.dashboard.messages;
    assert(p0 && p1 && p2 && m0 && m1 && m2, 'Harness needs three properties and three demo messages');
    const legacy = JSON.parse(JSON.stringify(original));
    Object.assign(legacy.brand, { name: 'Published Legacy Client', shortName: 'Legacy Client' });
    await page.evaluate(({ keys, config, property, message }) => {
      localStorage.setItem(keys.config, JSON.stringify(config));
      localStorage.setItem(keys.favorites, JSON.stringify([property]));
      localStorage.setItem(keys.statuses, JSON.stringify({ [property]: 'paused' }));
      localStorage.setItem(keys.read, JSON.stringify([message]));
    }, { keys: keysA, config: legacy, property: p0.id, message: m0.id });
    const seededA = await snapshot(keysA);
    await stateUI(clientA, [p0.id], [p0.id], [m0.id], legacy.brand.shortName);
    await fallback(clientA);
    await sharedAssets(clientA, 'rgb(169, 44, 24)');
    await sharedAssets(clientB, 'rgb(37, 99, 75)');
    await page.waitForFunction(() => document.querySelector('.hero-image')?.naturalWidth > 0);
    equal(await page.locator('.hero-image').evaluate(image => new URL(image.src).pathname), `${prefix}assets/placeholder.svg`, 'second client resolves configured assets/* directly from the shared root');
    await stateUI(clientB, [], [], [], second.brand.shortName);
    equal(await snapshot(keysA), seededA, 'visiting the second client leaves all published legacy keys untouched');

    for (const slug of [clientA, clientB]) {
      const hash = `#/propiedades?keyword=${encodeURIComponent(p0.reference)}`;
      equal((await go(slug, hash)).status(), 200, `${slug}: filtered catalog deep link returns HTTP 200`);
      equal(await page.locator('.property-card').count(), 1, `${slug}: deep-link catalog filter selects one property`);
      equal(await page.locator('[name="keyword"]').inputValue(), p0.reference, `${slug}: deep-link filter is retained`);
      const catalogReload = await page.reload();
      equal(catalogReload.status(), 200, `${slug}: filtered catalog reload returns HTTP 200`);
      await rendered(hash);
      equal(new URL(page.url()).hash, hash, `${slug}: catalog reload preserves the hash filter`);
      await hashLinks(slug);
      await page.locator(`.property-card h3 a[href="#/propiedad/${p0.id}"]`).click();
      await rendered(`#/propiedad/${p0.id}`);
      equal(new URL(page.url()).pathname, `${prefix}${slug}/index.html`, `${slug}: detail link stays in its directory`);
      const detailReload = await page.reload();
      equal(detailReload.status(), 200, `${slug}: detail reload returns HTTP 200`);
      await rendered(`#/propiedad/${p0.id}`);
      equal(await page.locator('h1').innerText(), p0.title, `${slug}: detail reload retains the selected property`);
      await hashLinks(slug);
      await page.locator(`a[href="#/contacto?property=${p0.id}"]`).first().click();
      await rendered(`#/contacto?property=${p0.id}`);
      equal(new URL(page.url()).pathname, `${prefix}${slug}/index.html`, `${slug}: contact link retains its tenant`);
      check((await page.locator('textarea').inputValue()).includes(p0.reference), `${slug}: contact link retains the property reference`);
      equal(await page.locator('.contact-method a[href^="mailto:"]').getAttribute('href'), `mailto:${original.brand.email}`, `${slug}: email contact remains a mailto link`);
      equal(await page.locator('.contact-method a[href^="tel:"]').getAttribute('href'), `tel:${original.brand.phoneHref}`, `${slug}: phone contact remains a tel link`);
      check((await page.locator('.contact-method a[href^="https://wa.me/"]').getAttribute('href')).startsWith(`https://wa.me/${original.brand.whatsapp}?`), `${slug}: WhatsApp link does not become a tenant-relative URL`);
      equal((await go(slug, '#/propiedades', '')).status(), 200, `${slug}: slash entry serves HTML without a rewrite/build`);
      equal(await page.locator('#favorite-counter').innerText(), slug === clientA ? '1' : '0', `${slug}: slash and index.html entries read the same tenant state`);
      await hashLinks(slug);
    }

    const shared = JSON.parse(JSON.stringify(original));
    Object.assign(shared.brand, { name: 'Identical Imported Brand', shortName: 'Identical Brand', primary: '#245b78', logo: '' });
    shared.home.services[0].href = 'assets/placeholder.svg';
    await importConfig(shared, keysA, clientA);
    await exportConfig(shared, clientA);
    await go(clientA, '#/propiedades');
    await page.locator(`[data-action="favorite"][data-id="${p1.id}"]`).click();
    await go(clientA, '#/panel/propiedades');
    await page.locator(`[data-action="status"][data-id="${p1.id}"]`).click();
    await go(clientA, '#/panel/mensajes');
    await page.locator(`[data-action="read"][data-id="${m1.id}"]`).click();
    const savedA = await snapshot(keysA);
    equal(JSON.parse(savedA.config), shared, 'real client writes imported config to the published legacy key');
    equal(JSON.parse(savedA.favorites).sort(), [p0.id, p1.id].sort(), 'real client writes favorites to the published legacy key');
    equal(JSON.parse(savedA.statuses), { [p0.id]: 'paused', [p1.id]: 'paused' }, 'real client writes statuses to the published legacy key');
    equal(JSON.parse(savedA.read).sort(), [m0.id, m1.id].sort(), 'real client writes read messages to the published legacy key');
    equal(await page.evaluate(() => Object.keys(localStorage).filter(key => key.startsWith('inmobiliaria-demo:cristian-moos-'))), [], 'real client never forks its published state into a new namespace');

    await importConfig(shared, keysB, clientB);
    await exportConfig(shared, clientB);
    await fallback(clientB);
    await sharedAssets(clientB, 'rgb(36, 91, 120)');
    equal(await page.locator('.service-card a').first().evaluate(link => new URL(link.href).pathname), `${prefix}assets/placeholder.svg`, 'imported assets/* link resolves from shared root, not tenant directory');
    await stateUI(clientB, [], [], [], shared.brand.shortName);
    await go(clientB, '#/propiedades');
    await page.locator(`[data-action="favorite"][data-id="${p2.id}"]`).click();
    await go(clientB, '#/panel/propiedades');
    await page.locator(`[data-action="status"][data-id="${p2.id}"]`).click();
    await go(clientB, '#/panel/mensajes');
    await page.locator(`[data-action="read"][data-id="${m2.id}"]`).click();
    const savedB = await snapshot(keysB);
    equal(JSON.parse(savedB.config), shared, 'identical JSON uses the second URL slug for the config namespace');
    equal(JSON.parse(savedB.favorites), [p2.id], 'second client favorites use its URL-slug namespace');
    equal(JSON.parse(savedB.statuses), { [p2.id]: 'paused' }, 'second client statuses use its URL-slug namespace');
    equal(JSON.parse(savedB.read), [m2.id], 'second client read messages use its URL-slug namespace');
    equal(await snapshot(keysA), savedA, 'all four real-client keys remain byte-for-byte unchanged after second-client edits');
    await stateUI(clientA, [p0.id, p1.id], [p0.id, p1.id], [m0.id, m1.id], shared.brand.shortName);
    equal(await snapshot(keysB), savedB, 'returning to the real client leaves all second-client keys untouched');
    await stateUI(clientB, [p2.id], [p2.id], [m2.id], shared.brand.shortName);

    await page.locator('[data-action="reset-demo"]').click();
    equal(JSON.parse((await snapshot(keysB)).statuses), {}, 'second-client reset clears its own publication states');
    equal(JSON.parse((await snapshot(keysB)).read), [], 'second-client reset clears its own read messages');
    equal(await snapshot(keysA), savedA, 'second-client reset does not modify any real-client key');
    await page.locator('[data-action="restore"]').click();
    await page.waitForFunction(name => document.querySelector('.brand-preview')?.textContent.includes(name), second.brand.shortName);
    check((await page.locator('.brand-preview').innerText()).includes(second.brand.shortName), 'restore uses the second-client shipped config, not the real-client config');
    equal(await page.evaluate(() => document.documentElement.style.getPropertyValue('--primary')), second.brand.primary, 'restore returns the second-client palette');
    equal(await snapshot(keysA), savedA, 'second-client restore does not modify any real-client key');
    await go(clientB, '#/panel/propiedades');
    equal(await page.locator('.status-paused').count(), 0, 'second-client reset persists in publication UI');
    await go(clientB, '#/panel/mensajes');
    equal(await page.locator('.message-card.is-read').count(), 0, 'second-client reset persists in messages UI');
    await stateUI(clientA, [p0.id, p1.id], [p0.id, p1.id], [m0.id, m1.id], shared.brand.shortName);

    for (const entry of ['', 'index.html']) {
      for (const hash of ['#/', '#/propiedades?operation=Venta&type=Casa', `#/propiedad/${p0.id}`]) {
        await page.goto(`${base}${entry}${hash}`);
        await page.waitForURL(url => url.pathname.startsWith(`${prefix}${clientA}/`) && url.hash === hash);
        await rendered(hash);
        equal(new URL(page.url()).hash, hash, `legacy root ${entry || 'slash'} redirect preserves fragment ${hash}`);
        check(new URL(page.url()).pathname.startsWith(`${prefix}${clientA}/`), 'legacy root hash redirects to the published client under the repository prefix');
      }
    }
    await page.goto(base);
    await page.waitForSelector(`a[href*="${clientB}/"]`);
    equal(new URL(page.url()).pathname, prefix, 'root without hash still shows the directory after client visits');
    for (const missing of ['missing-file.html', 'missing-client/', `${clientB}/missing.html`]) {
      const response = await context.request.get(base + missing);
      equal(response.status(), 404, `nonexistent path returns a real HTTP 404: ${missing}`);
      check(!(await response.text()).includes('id="main"'), `404 never serves the client SPA shell: ${missing}`);
    }
    check(served.some(item => item.pathname === `${prefix}styles.css` && item.status === 200), 'shared CSS was actually requested successfully');
    check(served.some(item => item.pathname === `${prefix}assets/placeholder.svg` && item.status === 200), 'shared fallback asset was actually requested successfully');
    check(externalRequests.length > 0 && blockedImages.length > 0, 'external network was intercepted rather than required');
    equal(serverErrors, [], 'native HTTP harness has no internal errors');
    equal(errors, [], 'no uncaught browser JavaScript errors');
    equal(localHTTPFailures, [], 'no local browser HTTP 4xx/5xx responses (including 400)');
    equal(localFailures, [], 'no failed local browser requests');
    console.log(`\n${checks} multi-site checks passed. Engine: ${process.env.BROWSER_CHANNEL || 'msedge'} / Chromium. HTTP prefix: ${prefix}. Fixtures: memory only. External network blocked.`);
  } finally {
    if (context) await context.close();
    if (browser) await browser.close();
    await new Promise((resolve, reject) => {
      server.close(error => error && error.code !== 'ERR_SERVER_NOT_RUNNING' ? reject(error) : resolve());
      server.closeAllConnections();
    });
  }
})().catch(error => {
  console.error(error);
  console.error(`\n${checks} checks passed before failure. Only tests/multi-site.cjs belongs to this harness.`);
  process.exitCode = 1;
});
