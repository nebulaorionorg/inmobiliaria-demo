const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'cristian-moos/config.js'), 'utf8');
const config = JSON.parse(source.replace(/^window\.SITE_CONFIG\s*=\s*/, '').replace(/;\s*$/, ''));
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

test('every registered client has its own static entry and JSON configuration', () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'sites.js'), 'utf8'), context);
  const sites = context.window.DEMO_SITES;
  assert(sites.length > 0);
  assert.equal(new Set(sites.map(site => site.slug)).size, sites.length);
  for (const site of sites) {
    assert.match(site.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    const html = fs.readFileSync(path.join(root, site.slug, 'index.html'), 'utf8');
    assert.match(html, /src="config.js" defer/);
    assert.match(html, /src="\.\.\/app.js" defer/);
    assert.match(html, /href="\.\.\/styles.css"/);
    assert.doesNotMatch(html, /<base\b/);
    const content = fs.readFileSync(path.join(root, site.slug, 'config.js'), 'utf8');
    const client = JSON.parse(content.replace(/^window\.SITE_CONFIG\s*=\s*/, '').replace(/;\s*$/, ''));
    assert(client.brand.name);
    if (site.batch !== 2) assert(client.properties.length);
  }
});

test('config.js contains a JSON object, without executable configuration logic', () => {
  const context = { window: {} };
  vm.runInNewContext(source, context);
  assert.equal(JSON.stringify(context.window.SITE_CONFIG), JSON.stringify(config));
  assert.equal(config.version, 1);
  assert.equal(config.properties.length, 10);
});

test('all clients have complete independent catalogs, valid contacts and existing local assets', () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'sites.js'), 'utf8'), context);
  for (const site of context.window.DEMO_SITES) {
    const source = fs.readFileSync(path.join(root, site.slug, 'config.js'), 'utf8');
    const client = JSON.parse(source.replace(/^window\.SITE_CONFIG\s*=\s*/, '').replace(/;\s*$/, ''));
    assert.equal(client.brand.name, site.name, `${site.slug}: registry identity`);
    if (site.batch === 2) {
      assert(client.properties.length <= 3, `${site.slug}: brief proposal`);
      if (!['capasso-inmobiliaria', 'saracini-propiedades'].includes(site.slug)) assert(client.properties.length >= 2, `${site.slug}: representative verified selection`);
      assert.equal(client.meta.verifiedAt, '2026-10-22');
      assert.equal(client.meta.proposalNotice, 'Propuesta independiente de Nebula. Sin vínculo comercial ni autorización de esta inmobiliaria.');
      if (!client.properties.length) {
        assert.deepEqual(client.home.heroIds, []);
        assert.deepEqual(client.zones, []);
      }
      const html = fs.readFileSync(path.join(root, site.slug, 'index.html'), 'utf8');
      assert(html.includes('id="proposal-notice"'));
      assert(html.indexOf('id="proposal-notice"') < html.indexOf('id="header"'), `${site.slug}: independent notice precedes header`);
    } else {
      assert(client.properties.length > 5, `${site.slug}: catalog must contain more than five properties`);
      if (site.slug !== 'cristian-moos') assert(client.properties.filter(p => p.featured).length >= 12, `${site.slug}: twelve featured properties`);
    }
    for (const section of Object.keys(config)) assert(Object.hasOwn(client, section), `${site.slug}: missing ${section}`);
    for (const key of Object.keys(config.labels)) assert(Object.hasOwn(client.labels, key), `${site.slug}: missing label ${key}`);
    assert.match(client.brand.whatsapp, /^\d*$/);
    if (client.brand.email) assert.match(client.brand.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    assert.deepEqual(client.operations, ['Venta', 'Alquiler'], `${site.slug}: shared operation vocabulary`);
    const ids = new Set(client.properties.map(p => p.id));
    assert.equal(ids.size, client.properties.length);
    for (const id of client.home.heroIds) assert(ids.has(id), `${site.slug}: hero ${id}`);
    for (const zone of client.zones) assert(ids.has(zone.propertyId), `${site.slug}: zone ${zone.name}`);
    for (const p of client.properties) {
      assert.match(p.id, /^[\w-]+$/);
      assert(client.types.includes(p.type));
      assert(client.operations.includes(p.operation));
      assert(['USD', 'ARS'].includes(p.currency));
      for (const key of ['price', 'bedrooms', 'bathrooms', 'area', 'landArea']) assert(p[key] === null || Number.isFinite(p[key]) && p[key] >= 0, `${site.slug}/${p.id}: ${key}`);
      assert.equal(new URL(p.source).hostname.replace(/^www\./, ''), new URL(client.brand.website).hostname.replace(/^www\./, ''), `${site.slug}: property source belongs to the client`);
      assert(p.images.length > 0);
      for (const image of p.images) {
        assert.match(image, /^(https:\/\/|assets\/)/);
        if (image.startsWith('assets/')) assert(fs.existsSync(path.join(root, image)), `${site.slug}: missing ${image}`);
      }
    }
    if (site.slug !== 'cristian-moos') {
      assert(fs.existsSync(path.join(root, site.slug, 'SOURCES.md')));
      assert.doesNotMatch(source, /cristianmoos\.com|Mooswalder|5543991/);
    }
  }
});

test('properties have unique identifiers, public sources and genuine published prices', () => {
  const prices = { '5543991': ['USD', 1200000], '7955907': ['USD', 180000], '6593128': ['USD', 135000], '7859215': ['USD', 180000], '7289188': ['USD', 349000], '4242852': ['USD', 195000], '5454731': ['USD', 57000], '4709623': ['USD', 850], '7977727': ['USD', 2100], '3836739': ['ARS', 950000] };
  assert.equal(new Set(config.properties.map(p => p.id)).size, 10);
  for (const p of config.properties) {
    assert.deepEqual([p.currency, p.price], prices[p.id]);
    assert.match(p.source, /^https:\/\/www\.cristianmoos\.com\/p\//);
    assert(p.images.every(image => image.startsWith('https://static.tokkobroker.com/')));
    assert(config.operations.includes(p.operation));
    assert(config.types.includes(p.type));
    for (const field of ['area', 'landArea', 'bathrooms', 'bedrooms']) assert(p[field] === null || p[field] >= 0);
  }
  assert.equal(config.properties.find(p => p.id === '4242852').bathrooms, null);
  assert.equal(config.properties.find(p => p.id === '4709623').bathrooms, null);
});

test('hero and zones reference existing properties', () => {
  const ids = config.properties.map(p => p.id);
  for (const id of config.home.heroIds) assert(ids.includes(id));
  for (const zone of config.zones) assert(ids.includes(zone.propertyId));
  assert.equal(config.dashboard.activity.length, config.dashboard.days.length);
});

test('all literal UI label references exist in configuration', () => {
  for (const match of app.matchAll(/text\('([^']+)'\)/g)) assert(Object.hasOwn(config.labels, match[1]), `Missing label: ${match[1]}`);
});

test('the application has no local fetch, modules, backend or runtime dependencies', () => {
  assert.doesNotMatch(app, /\bfetch\s*\(|XMLHttpRequest|\bimport\s*\(/);
  const html = fs.readFileSync(path.join(root, 'cristian-moos/index.html'), 'utf8');
  assert.match(html, /src="config.js" defer/);
  assert.match(html, /src="\.\.\/app.js" defer/);
  assert.doesNotMatch(html, /type="module"/);
  for (const asset of ['assets/favicon.svg', 'assets/placeholder.svg', 'styles.css', 'app.js', 'cristian-moos/config.js']) assert(fs.existsSync(path.join(root, asset)));
});

test('verified contact channels are configured without invented contact details', () => {
  assert.equal(config.brand.email, 'info@cristianmoos.com');
  assert.equal(config.brand.whatsapp, '5491155800659');
  assert.equal(config.brand.phone, '0348-4445615');
  assert.match(config.brand.address, /2301/);
  assert.match(config.meta.disclaimer, /no el catálogo completo/);
});

test('the default brand palette matches the dominant official logo colors', () => {
  assert.equal(config.brand.primary, '#a92c18');
  assert.equal(config.brand.secondary, '#c55f08');
  assert.equal(config.brand.ink, '#211915');
  const html = fs.readFileSync(path.join(root, 'cristian-moos/index.html'), 'utf8');
  assert(html.includes(`name="theme-color" content="${config.brand.primary}"`));
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'styles.css'), 'utf8'), /#1563df/i);
});
