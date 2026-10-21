(() => {
  'use strict';
  const sites = window.DEMO_SITES || [];
  const entry = location.protocol === 'file:' ? 'index.html' : '';
  // Preserve property and dashboard links shared before the multi-client directory.
  if (location.hash.startsWith('#/')) {
    location.replace(new URL(`cristian-moos/${entry}${location.hash}`, location.href));
    return;
  }
  const container = document.querySelector('#sites');
  for (const [index, site] of sites.entries()) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(site.slug)) continue;
    const card = document.createElement('a');
    card.className = 'directory-card';
    card.href = `${site.slug}/${entry}`;
    const number = document.createElement('span');
    number.className = 'directory-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const heading = document.createElement('h2');
    heading.textContent = site.name;
    const description = document.createElement('p');
    description.textContent = site.description;
    const action = document.createElement('span');
    action.className = 'text-link';
    action.textContent = 'Explorar propuesta →';
    card.append(number, heading, description, action);
    container.append(card);
  }
  if (!container.childElementCount) container.textContent = 'Todavía no hay demos disponibles.';
})();
