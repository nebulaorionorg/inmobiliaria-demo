const { chromium } = require(process.argv[2] || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const axePath = process.argv[3] || require.resolve('axe-core/axe.min.js');

(async () => {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  let violations = 0;
  try {
    const page = await browser.newPage();
    const base = pathToFileURL(path.resolve(__dirname, '../index.html')).href;
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of ['#/', '#/propiedades', '#/propiedad/5543991', '#/contacto', '#/panel', '#/panel/mensajes', '#/panel/configuracion']) {
        await page.goto(base + route);
        await page.waitForFunction(expected => document.querySelector('#main')?.dataset.route === expected, route.slice(1));
        await page.addScriptTag({ path: axePath });
        const result = await page.evaluate(() => axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
        console.log(`${width}px ${route}: ${result.violations.length} axe violations`);
        for (const issue of result.violations) {
          violations++;
          console.log(JSON.stringify({ id: issue.id, impact: issue.impact, nodes: issue.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) }, null, 2));
        }
      }
    }
  } finally { await browser.close(); }
  if (violations) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });
