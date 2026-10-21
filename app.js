(() => {
  'use strict';

  const original = window.SITE_CONFIG;
  const keys = { config: 'cm-demo-config-v1', favorites: 'cm-demo-favorites-v1', statuses: 'cm-demo-statuses-v1', read: 'cm-demo-read-v1' };
  let storageAvailable = true;
  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { storageAvailable = false; return fallback; }
  }
  function store(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { storageAvailable = false; }
  }
  let config = original;
  const imported = load(keys.config, null);
  if (imported && validConfig(imported)) config = imported;
  let favorites = load(keys.favorites, []);
  if (!Array.isArray(favorites)) favorites = [];
  let statuses = load(keys.statuses, {});
  if (!statuses || typeof statuses !== 'object' || Array.isArray(statuses)) statuses = {};
  let readMessages = load(keys.read, []);
  if (!Array.isArray(readMessages)) readMessages = [];
  let heroIndex = 0;
  let homeType = '';
  let galleryProperty = null;
  let galleryIndex = 0;
  let toastTimer;
  let viewMode = 'grid';

  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const text = key => esc(config.labels[key] ?? key);
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const number = value => new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 }).format(value);
  const property = id => config.properties.find(item => item.id === id);
  const price = p => `${p.currency === 'ARS' ? 'ARS $' : 'USD'} ${number(p.price)}`;
  const url = value => /^(https?:\/\/|mailto:|tel:|#\/|assets\/)/i.test(String(value)) ? esc(value) : '#/';
  const external = 'target="_blank" rel="noopener noreferrer"';
  const paths = {
    home: '<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    bed: '<path d="M3 18v3m18-3v3M3 12V5h18v7M2 18v-6h20v6ZM6 12V8h5v4m2 0V8h5v4"/>',
    bath: '<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM5 12V5a3 3 0 0 1 6 0M6 20v2m12-2v2"/>',
    area: '<path d="M3 9V3h6m6 0h6v6m0 6v6h-6m-6 0H3v-6M8 16l8-8m-5 0h5v5"/>',
    sliders: '<path d="M4 7h8m4 0h4M4 17h3m4 0h9"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    key: '<circle cx="8" cy="8" r="5"/><path d="m12 12 9 9m-5-5 3-3m-6 0 3-3"/>',
    chart: '<path d="M3 3v18h18M7 15l4-5 4 2 6-7M16 5h5v5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    user: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
    phone: '<path d="m5 3 4 1 1 5-3 2a15 15 0 0 0 6 6l2-3 5 1 1 4c0 2-2 3-4 2C9 19 5 15 3 7 2 5 3 3 5 3Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    list: '<path d="M8 5h13M8 12h13M8 19h13M3 5h.01M3 12h.01M3 19h.01"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    message: '<path d="M21 15a3 3 0 0 1-3 3H8l-5 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z"/><path d="M7 7h10M7 12h7"/>',
    settings: '<path d="M4 7h10m4 0h2M4 17h2m4 0h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    upload: '<path d="M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
    logout: '<path d="M9 4H3v16h6m5-13 5 5-5 5m-5-5h10"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="m21 15-6-6-9 12"/>'
  };
  function icon(name, extra = '') { return `<svg class="icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.home}</svg>`; }
  function validConfig(candidate) {
    // Imports must preserve the shipped schema so renderers can stay small and predictable.
    function matches(template, value) {
      if (template === null) return value === null || typeof value === 'number';
      if (Array.isArray(template)) return Array.isArray(value) && value.every(item => !template.length || matches(template[0], item));
      if (typeof template === 'object') return value && typeof value === 'object' && !Array.isArray(value) && Object.keys(template).every(key => key in value && matches(template[key], value[key]));
      return typeof template === typeof value;
    }
    // Previously exported JSON only required the primary brand color.
    const brandSchema = Object.fromEntries(Object.entries(original.brand).filter(([key]) => !['secondary', 'ink'].includes(key)));
    const schema = { ...original, brand: brandSchema, properties: [{ ...original.properties[0], bedrooms: null, bathrooms: null, area: null, landArea: null }] };
    if (!candidate || !matches(schema, candidate) || candidate.version !== 1 || !candidate.properties.length) return false;
    if (!/^#[\da-f]{6}$/i.test(candidate.brand.primary) || !/^\d+$/.test(candidate.brand.whatsapp)) return false;
    if (['secondary', 'ink'].some(key => candidate.brand[key] !== undefined && !/^#[\da-f]{6}$/i.test(candidate.brand[key]))) return false;
    const ids = new Set();
    for (const p of candidate.properties) {
      if (!/^[\w-]+$/.test(p.id) || ids.has(p.id) || !p.images.length || p.price < 0 || !Number.isFinite(p.price)) return false;
      if (!['USD', 'ARS'].includes(p.currency) || !candidate.operations.includes(p.operation) || !candidate.types.includes(p.type)) return false;
      if (!p.images.every(image => /^(https?:\/\/|assets\/)/.test(image)) || !/^https?:\/\//.test(p.source)) return false;
      if (![p.bedrooms, p.bathrooms, p.area, p.landArea].every(value => value === null || Number.isFinite(value) && value >= 0)) return false;
      ids.add(p.id);
    }
    return candidate.home.heroIds.length > 0 && candidate.home.heroIds.every(id => ids.has(id)) && candidate.zones.every(zone => ids.has(zone.propertyId)) && candidate.dashboard.activity.length === candidate.dashboard.days.length && candidate.dashboard.activity.every(value => Number.isFinite(value) && value >= 0);
  }
  function notify(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4200);
  }
  function photo(p, index = 0, cls = '', eager = false) {
    return `<img class="${cls}" src="${url(p.images[index] || p.images[0])}" alt="${esc(p.title)} · ${text('photo')} ${index + 1}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }
  function logo(dark = false) {
    return `<a href="#/" class="brand ${dark ? 'brand-dark' : ''}">${!dark && config.brand.logo ? `<img class="brand-logo" src="${url(config.brand.logo)}" alt="">` : ''}<span class="brand-fallback ${!dark && config.brand.logo ? 'has-logo' : ''}">${icon('home', 'brand-symbol')}<span><strong>${esc(config.brand.shortName)}</strong><small>${esc(config.brand.descriptor)}</small></span></span></a>`;
  }
  function shell(route) {
    const l = config.labels;
    const favoriteCount = favorites.filter(id => property(id)).length;
    document.documentElement.style.setProperty('--primary', config.brand.primary);
    document.documentElement.style.setProperty('--secondary', config.brand.secondary || config.brand.primary);
    document.documentElement.style.setProperty('--ink', config.brand.ink || original.brand.ink);
    document.querySelector('meta[name="theme-color"]').content = config.brand.primary;
    document.querySelector('meta[name="description"]').content = config.meta.description;
    $('.skip-link').textContent = l.skip;
    $('#gallery').setAttribute('aria-label', l.gallery);
    $('#header').innerHTML = `<div class="header-inner">${logo()}<nav id="navigation" aria-label="${esc(l.menu)}">${config.navigation.map(n => `<a href="${url(n.href)}" ${route === n.href.split('?')[0].slice(1) ? 'aria-current="page"' : ''}>${esc(n.label)}${n.dropdown ? icon('down') : ''}</a>`).join('')}</nav><div class="header-actions"><a class="header-favorite" href="#/favoritos" aria-label="${text('favorites')}: ${favoriteCount}">${icon('heart')}<span id="favorite-counter" aria-hidden="true">${favoriteCount}</span></a><a class="panel-link" href="#/panel" aria-label="${text('dashboard')}">${icon('user')}<span>${text('dashboard')}</span></a><a class="btn btn-primary header-valuation" href="#/contacto?subject=Tasacion">${text('valuation')}${icon('arrow')}</a><button class="icon-btn menu-toggle" data-action="menu" aria-label="${text('menu')}" aria-controls="navigation" aria-expanded="false">${icon('menu')}</button></div></div>`;
    $('#footer').hidden = route.startsWith('/panel');
    document.body.classList.toggle('is-dashboard', route.startsWith('/panel'));
    $('#footer').innerHTML = `<div class="container footer-top">${logo(true)}<div class="socials"><a href="${url(config.brand.instagram)}" ${external}>${text('instagram')}${icon('arrow')}</a><a href="${url(config.brand.facebook)}" ${external}>${text('facebook')}${icon('arrow')}</a></div></div><div class="container footer-columns"><div><p class="footer-intro">${text('footerText')}</p><p>${esc(config.brand.license)}</p></div><div><h3>${text('footerExplore')}</h3><a href="#/propiedades?operation=Venta">${text('buy')}</a><a href="#/propiedades?operation=Alquiler">${text('rent')}</a><a href="#/favoritos">${text('favorites')}</a></div><div><h3>${text('footerCompany')}</h3><a href="#/nosotros">${text('about')}</a><a href="#/contacto?subject=Tasacion">${text('valuation')}</a><a href="${url(config.brand.website)}" ${external}>${text('officialSite')}</a></div><div><h3>${text('footerContact')}</h3><a href="${url('tel:' + config.brand.phoneHref)}">${esc(config.brand.phone)}</a><a href="${url('mailto:' + config.brand.email)}">${esc(config.brand.email)}</a><p>${esc(config.brand.address)}</p></div></div><div class="container footer-bottom"><p>${esc(config.meta.disclaimer)}</p><div><span>© ${new Date().getFullYear()} ${esc(config.brand.name)}. ${text('copyright')}</span><span>${esc(config.meta.demo)}</span></div></div>`;
  }
  function favoriteButton(p, extra = '') {
    const saved = favorites.includes(p.id);
    return `<button class="icon-btn favorite-btn ${saved ? 'saved' : ''} ${extra}" data-action="favorite" data-id="${esc(p.id)}" aria-pressed="${saved}" aria-label="${text(saved ? 'unsave' : 'save')}">${icon('heart')}</button>`;
  }
  function card(p) {
    return `<article class="property-card"><div class="card-image"><a href="#/propiedad/${esc(p.id)}">${photo(p)}<span class="image-shade"></span><span class="card-location">${icon('pin')}${esc(p.location)}</span></a><div class="badges">${p.featured ? `<span class="badge badge-primary">${text('featured')}</span>` : ''}<span class="badge badge-dark">${esc(p.operation)}</span></div>${favoriteButton(p)}</div><div class="card-content"><span class="property-kind">${esc(p.type)} <span>· ${text('reference')} ${esc(p.reference)}</span></span><h3><a href="#/propiedad/${esc(p.id)}">${esc(p.title)}</a></h3><div class="card-specs">${p.bedrooms !== null ? `<span>${icon('bed')}<b>${p.bedrooms}</b> ${text('beds')}</span>` : ''}${p.bathrooms !== null ? `<span>${icon('bath')}<b>${p.bathrooms}</b> ${text('baths')}</span>` : ''}<span title="${text(p.area ? 'built' : 'land')}">${icon('area')}<b>${number(p.area || p.landArea || 0)}</b> m²</span></div><div class="card-bottom"><span class="card-agent"><span class="mini-avatar">${esc(config.brand.initials)}</span>${text('team')}</span><strong class="card-price">${esc(price(p))}${p.operation === config.operations[1] ? `<small>${text('month')}</small>` : ''}</strong></div></div></article>`;
  }
  function options(items, selected, emptyLabel) {
    return `<option value="">${esc(emptyLabel)}</option>${items.map(item => `<option value="${esc(item)}" ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('')}`;
  }
  function searchForm(params = new URLSearchParams(), hero = false) {
    const operation = params.get('operation') || (hero ? config.operations[0] : '');
    const advanced = ['currency', 'min', 'max', 'beds', 'credit'].some(key => params.get(key));
    return `<form class="search-form ${hero ? 'hero-search' : 'catalog-search'}" data-form="search"><div class="${hero ? 'operation-tabs' : 'operation-field'}">${hero ? config.operations.map((op, i) => `<button type="button" class="${op === operation ? 'active' : ''}" data-action="operation" data-value="${esc(op)}" aria-pressed="${op === operation}">${text(i ? 'rent' : 'buy')}</button>`).join('') + `<input name="operation" type="hidden" value="${esc(operation)}">` : `<label>${text('operation')}<select name="operation">${options(config.operations, operation, config.labels.all)}</select></label>`}</div><div class="search-main"><label class="search-field">${text('type')}<select name="type">${options(config.types, params.get('type'), config.labels.allTypes)}</select></label><label class="search-field">${text('location')}<span class="input-icon"><input name="location" value="${esc(params.get('location') || '')}" placeholder="${text('locationPlaceholder')}">${icon('pin')}</span></label><label class="search-field keyword-field">${text('keyword')}<input name="keyword" value="${esc(params.get('keyword') || '')}" placeholder="${text('keywordPlaceholder')}"></label><button type="button" class="btn btn-outline advanced-toggle" data-action="advanced" aria-expanded="${Boolean(advanced)}" aria-controls="advanced-filters">${icon('sliders')}${text('advanced')}</button><button class="btn btn-primary search-submit" type="submit">${text('search')}${icon('search')}</button></div><div class="advanced-filters" id="advanced-filters" ${advanced ? '' : 'hidden'}><div class="advanced-grid"><label>${text('currency')}<select name="currency" data-currency>${options(['USD', 'ARS'], params.get('currency'), config.labels.anyCurrency)}</select></label><label>${text('minPrice')}<input type="number" name="min" min="0" step="any" value="${esc(params.get('min') || '')}" ${params.get('currency') ? '' : 'disabled'}></label><label>${text('maxPrice')}<input type="number" name="max" min="0" step="any" value="${esc(params.get('max') || '')}" ${params.get('currency') ? '' : 'disabled'}></label><label>${text('minBeds')}<select name="beds">${options(['1', '2', '3', '4', '5'], params.get('beds'), config.labels.anyBeds)}</select></label></div><div class="advanced-bottom"><label class="checkbox"><input name="credit" type="checkbox" value="1" ${params.has('credit') ? 'checked' : ''}>${text('credit')}</label><span>${text('priceHint')}</span></div></div></form>`;
  }
  function sectionHeading(eyebrow, title, subtitle = '') {
    return `<div class="section-heading"><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2>${subtitle ? `<p>${esc(subtitle)}</p>` : ''}</div>`;
  }
  function heroMarkup() {
    const p = property(config.home.heroIds[heroIndex % config.home.heroIds.length]);
    return `${photo(p, 0, 'hero-image', true)}<div class="hero-overlay"></div><div class="hero-body container"><span class="hero-eyebrow">${esc(config.home.eyebrow)}</span><h1>${esc(config.home.title)}<br> <span>${esc(config.home.titleAccent)}</span></h1><p>${esc(config.home.subtitle)}</p>${searchForm(new URLSearchParams(), true)}<span class="hero-area">${icon('pin')}${esc(config.home.heroLocation)}</span></div><div class="hero-bottom container"><div class="hero-controls"><button class="icon-btn" data-action="hero-prev" aria-label="${text('previous')}">${icon('arrow', 'reverse')}</button><span>${String(heroIndex + 1).padStart(2, '0')}<i>/ ${String(config.home.heroIds.length).padStart(2, '0')}</i></span><button class="icon-btn" data-action="hero-next" aria-label="${text('next')}">${icon('arrow')}</button></div><a href="#/propiedad/${esc(p.id)}" class="hero-caption"><span><small>${text('heroProperty')}</small><strong>${esc(p.address)}</strong><span>${esc(price(p))}</span></span>${icon('arrow')}</a></div>`;
  }
  function renderHome() {
    const h = config.home;
    $('#main').innerHTML = `<section class="hero" id="hero">${heroMarkup()}</section><section class="section container" id="featured">${sectionHeading(h.featuredEyebrow, h.featuredTitle, h.featuredSubtitle)}<div class="property-tabs">${['', ...config.types].map(type => `<button class="pill ${homeType === type ? 'active' : ''}" data-action="home-type" data-type="${esc(type)}" aria-pressed="${homeType === type}">${type ? esc(type) : text('all')}</button>`).join('')}</div><div class="property-grid" id="featured-grid">${homeProperties()}</div><div class="center section-action"><a class="btn btn-outline" href="#/propiedades">${text('viewAll')}${icon('arrow')}</a></div></section><section class="section zones-section"><div class="container">${sectionHeading(h.zonesEyebrow, h.zonesTitle, h.zonesSubtitle)}<div class="zones-grid">${config.zones.map(zone => `<a class="zone-card" href="#/propiedades?location=${encodeURIComponent(zone.search)}">${photo(property(zone.propertyId))}<span class="zone-overlay"></span><span class="zone-info"><small>${config.properties.filter(p => normalize(p.location).includes(normalize(zone.search))).length} ${text('fromCatalog')}</small><strong>${esc(zone.name)}</strong></span><span class="zone-arrow">${icon('arrow')}</span></a>`).join('')}</div><p class="image-note">${esc(h.zonesPhotoNote)}</p></div></section><section class="section container">${sectionHeading(h.servicesEyebrow, h.servicesTitle)}<div class="services-grid">${h.services.map(service => `<article class="service-card"><div class="service-icon">${icon(service.icon)}</div><h3>${esc(service.title)}</h3><p>${esc(service.text)}</p><a class="btn btn-outline" href="${url(service.href)}">${esc(service.action)}${icon('arrow')}</a></article>`).join('')}</div></section>${aboutBlock()}${cta()}`;
  }
  function homeProperties() {
    return config.properties.filter(p => homeType ? p.type === homeType : p.featured).slice(0, 6).map(card).join('');
  }
  function aboutBlock() {
    const h = config.home;
    const p = property(config.home.heroIds[0]);
    return `<section class="about-section"><div class="container about-grid"><div class="about-image">${photo(p, 1)}<a class="about-image-label" href="#/propiedad/${esc(p.id)}">${icon('image')}<span>${text('imageOfProperty')} ${esc(p.address)}</span></a></div><div class="about-copy"><span class="eyebrow">${esc(h.aboutEyebrow)}</span><h2>${esc(h.aboutTitle)}</h2><p>${esc(h.aboutText)}</p><ul class="check-list">${h.aboutPoints.map(point => `<li>${icon('check')}${esc(point)}</li>`).join('')}</ul><a class="btn btn-primary" href="#/contacto">${text('contact')}${icon('arrow')}</a></div></div></section>`;
  }
  function cta() {
    return `<section class="cta-section"><div class="container cta-inner"><div><h2>${esc(config.home.ctaTitle)}</h2><p>${esc(config.home.ctaText)}</p></div><a href="#/contacto" class="btn btn-white">${esc(config.home.ctaButton)}${icon('arrow')}</a></div></section>`;
  }
  function pageTitle(title, subtitle, eyebrow = '') {
    return `<section class="page-title"><div class="container"><div class="breadcrumbs"><a href="#/">${text('home')}</a>${icon('chevron')}<span>${esc(eyebrow || title)}</span></div><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></div></section>`;
  }
  function filtered(params) {
    let items = config.properties.filter(p => {
      for (const key of ['operation', 'type', 'currency']) if (params.get(key) && p[key] !== params.get(key)) return false;
      if (params.get('location') && !normalize(p.location + ' ' + p.address).includes(normalize(params.get('location')).trim())) return false;
      if (params.get('keyword') && !normalize(p.title + ' ' + p.reference + ' ' + p.id + ' ' + p.address).includes(normalize(params.get('keyword')).trim())) return false;
      if (params.get('beds') && (p.bedrooms === null || p.bedrooms < Number(params.get('beds')))) return false;
      if (params.get('credit') && !p.credit) return false;
      // USD and ARS are never compared or converted implicitly.
      if (params.get('currency')) {
        if (params.get('min') && p.price < Number(params.get('min'))) return false;
        if (params.get('max') && p.price > Number(params.get('max'))) return false;
      }
      return true;
    });
    if (params.get('currency') && ['priceAsc', 'priceDesc'].includes(params.get('sort'))) items.sort((a, b) => params.get('sort') === 'priceAsc' ? a.price - b.price : b.price - a.price);
    return items;
  }
  function empty(title, body) {
    return `<div class="empty-state">${icon('search')}<h2>${text(title)}</h2><p>${text(body)}</p><a class="btn btn-primary" href="#/propiedades">${text('viewAll')}${icon('arrow')}</a></div>`;
  }
  function renderCatalog(params, onlyFavorites = false) {
    const items = onlyFavorites ? config.properties.filter(p => favorites.includes(p.id)) : filtered(params);
    $('#main').innerHTML = `${pageTitle(config.labels[onlyFavorites ? 'favoritesTitle' : 'catalogTitle'], config.labels[onlyFavorites ? 'favoritesSubtitle' : 'catalogSubtitle'], config.labels[onlyFavorites ? 'favorites' : 'properties'])}<section class="container catalog-section">${onlyFavorites ? '' : searchForm(params)}<div class="results-toolbar"><p><strong>${items.length}</strong> ${text(items.length === 1 ? 'result' : 'results')}</p><div class="results-controls">${onlyFavorites ? '' : `<label class="sort-label">${text('sort')}<select id="sort" ${params.get('currency') ? '' : 'disabled'}><option value="">${text('recommended')}</option><option value="priceAsc" ${params.get('sort') === 'priceAsc' ? 'selected' : ''}>${text('priceAsc')}</option><option value="priceDesc" ${params.get('sort') === 'priceDesc' ? 'selected' : ''}>${text('priceDesc')}</option></select></label>`}<button class="icon-btn ${viewMode === 'grid' ? 'selected' : ''}" data-action="view" data-view="grid" aria-label="${text('grid')}" aria-pressed="${viewMode === 'grid'}">${icon('grid')}</button><button class="icon-btn ${viewMode === 'list' ? 'selected' : ''}" data-action="view" data-view="list" aria-label="${text('list')}" aria-pressed="${viewMode === 'list'}">${icon('list')}</button></div></div>${!onlyFavorites ? `<div class="filter-info"><span>${text('priceHint')}</span><a href="#/propiedades">${text('reset')}</a></div>` : ''}<div class="property-grid ${viewMode === 'list' ? 'list-view' : ''}">${items.map(card).join('')}</div>${!items.length ? empty(onlyFavorites ? 'emptyFavorites' : 'noResults', onlyFavorites ? 'emptyFavoritesText' : 'noResultsText') : ''}<div class="catalog-note">${icon('check')}<span>${esc(config.meta.verifiedLabel)}. ${esc(config.meta.disclaimer)}</span></div></section>`;
  }
  function renderDetail(id) {
    const p = property(id);
    if (!p) return renderNotFound();
    const related = config.properties.filter(item => item.id !== id && item.operation === p.operation).slice(0, 3);
    $('#main').innerHTML = `<div class="container detail-page"><div class="detail-topline"><a class="text-link" href="#/propiedades">${icon('arrow', 'reverse')}${text('backCatalog')}</a><div>${favoriteButton(p, 'bordered')}<button class="icon-btn bordered" data-action="share" aria-label="${text('share')}">${icon('copy')}</button></div></div><div class="detail-heading"><div><div class="inline-badges"><span class="badge badge-primary">${esc(p.operation)}</span><span>${esc(p.type)} · ${text('reference')} ${esc(p.reference)}</span></div><h1>${esc(p.title)}</h1><p>${icon('pin')}${esc(p.address)} · ${esc(p.location)}</p></div><div class="detail-price"><strong>${esc(price(p))}</strong>${p.operation === config.operations[1] ? `<span>${text('month')}</span>` : ''}</div></div><div class="detail-gallery ${p.images.length === 1 ? 'single-image' : ''}"><button class="main-photo" data-action="gallery" data-id="${esc(p.id)}" data-index="0" aria-label="${text('gallery')}">${photo(p, 0, '', true)}</button>${p.images.slice(1, 3).map((image, i) => `<button data-action="gallery" data-id="${esc(p.id)}" data-index="${i + 1}" aria-label="${text('photo')} ${i + 2}">${photo(p, i + 1)}</button>`).join('')}<button class="btn btn-white gallery-button" data-action="gallery" data-id="${esc(p.id)}" data-index="0">${icon('image')}${text('gallery')} (${p.images.length})</button></div><div class="detail-layout"><div><section class="detail-box"><h2>${text('description')}</h2><div class="detail-specs">${[[p.bedrooms, 'bed', 'bedrooms'], [p.bathrooms, 'bath', 'bathrooms'], [p.area, 'area', 'totalArea'], [p.landArea, 'area', 'landArea']].filter(([value]) => value !== null).map(([value, sym, label]) => `<div>${icon(sym)}<span><strong>${number(value)}${sym === 'area' ? ' m²' : ''}</strong><small>${text(label)}</small></span></div>`).join('')}</div><p class="property-description">${esc(p.description)}</p></section>${p.features.length ? `<section class="detail-box"><h2>${text('features')}</h2><ul class="amenities">${p.features.map(feature => `<li>${icon('check')}${esc(feature)}</li>`).join('')}</ul></section>` : ''}<section class="detail-box source-box"><h2>${text('details')}</h2><dl><div><dt>${text('reference')}</dt><dd>${esc(p.reference)}</dd></div><div><dt>${text('bathrooms')}</dt><dd>${p.bathrooms === null ? text('notPublished') : p.bathrooms}</dd></div><div><dt>${text('landArea')}</dt><dd>${p.landArea === null ? text('notPublished') : number(p.landArea) + ' m²'}</dd></div></dl><p>${text('sourceNote')}</p><a class="text-link" href="${url(p.source)}" ${external}>${text('source')}${icon('arrow')}</a><small>${esc(config.meta.verifiedLabel)}</small></section></div><aside class="agent-card"><div class="agent-profile"><span class="avatar">${esc(config.brand.initials)}</span><div><strong>${esc(config.brand.shortName)}</strong><span>${text('team')}</span></div></div><h2>${text('agentTitle')}</h2><p>${text('agentText')}</p><a class="btn btn-primary" href="${url(whatsappLink(p))}" ${external}>${text('whatsapp')}${icon('message')}</a><a class="btn btn-outline" href="#/contacto?property=${esc(p.id)}">${icon('mail')}${text('consult')}</a><a class="agent-phone" href="${url('tel:' + config.brand.phoneHref)}">${icon('phone')}${esc(config.brand.phone)}</a><small>${esc(config.meta.disclaimer)}</small></aside></div>${related.length ? `<section class="section related-section">${sectionHeading(config.home.featuredEyebrow, config.labels.related)}<div class="property-grid">${related.map(card).join('')}</div></section>` : ''}</div>${cta()}`;
  }
  function whatsappLink(p) {
    const message = p ? `${config.labels.consult}: ${p.title} (${config.labels.reference} ${p.reference}). ${p.source}` : config.home.ctaText;
    return `https://wa.me/${config.brand.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  function renderContact(params) {
    const p = property(params.get('property'));
    const subject = params.get('subject') === 'Tasacion' ? 2 : p?.operation === config.operations[1] ? 1 : 0;
    $('#main').innerHTML = `${pageTitle(config.labels.contactTitle, config.labels.contactText, config.labels.contact)}<section class="container contact-layout section"><div class="contact-info"><span class="eyebrow">${text('contactEyebrow')}</span><h2>${text('office')}</h2><p>${esc(config.brand.address)}<br>${esc(config.brand.region)}</p><div class="contact-method">${icon('phone')}<div><small>${text('phone')}</small><a href="${url('tel:' + config.brand.phoneHref)}">${esc(config.brand.phone)}</a></div></div><div class="contact-method">${icon('mail')}<div><small>${text('email')}</small><a href="${url('mailto:' + config.brand.email)}">${esc(config.brand.email)}</a></div></div><div class="contact-method">${icon('message')}<div><small>${text('whatsapp')}</small><a href="${url(whatsappLink(p))}" ${external}>${esc(config.brand.whatsappDisplay)}</a></div></div><a class="btn btn-outline map-link" href="${url('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(config.brand.address + ' ' + config.brand.region))}" ${external}>${icon('pin')}${text('map')}</a><p class="license-note">${esc(config.brand.license)}</p></div><div class="contact-form-card"><h2>${text('writeUs')}</h2><p class="form-notice">${text('contactNotice')}</p><form data-form="contact"><div class="form-grid"><label>${text('name')}<input name="name" autocomplete="name" maxlength="120" required></label><label>${text('phoneField')}<input name="phone" type="tel" autocomplete="tel" maxlength="60" required></label><label>${text('emailField')}<input name="email" type="email" autocomplete="email" maxlength="160" required></label><label>${text('subject')}<select name="subject">${config.labels.subjects.map((s, i) => `<option ${i === subject ? 'selected' : ''}>${esc(s)}</option>`).join('')}</select></label></div><label>${text('message')}<textarea name="message" rows="5" maxlength="3000" placeholder="${text('messagePlaceholder')}" required>${p ? esc(config.labels.consult + ': ' + p.title + ' · ' + config.labels.reference + ' ' + p.reference + '\n' + p.source) : ''}</textarea></label><label class="checkbox consent"><input type="checkbox" name="consent" required>${text('consent')}</label><button class="btn btn-primary" type="submit">${text('send')}${icon('arrow')}</button><small class="privacy-note">${text('privacy')}</small></form><div id="contact-result" class="contact-result" role="status" hidden></div></div></section>`;
  }
  function renderAbout() {
    $('#main').innerHTML = `${pageTitle(config.labels.aboutTitle, config.labels.aboutSubtitle, config.labels.about)}${aboutBlock()}<section class="container section about-details"><div><span class="eyebrow">${text('office')}</span><h2>${esc(config.brand.address)}</h2><p>${esc(config.brand.region)}</p><a class="text-link" href="#/contacto">${text('contact')}${icon('arrow')}</a></div><div><span class="eyebrow">${text('license')}</span><h2>${esc(config.brand.shortName)}</h2><p>${esc(config.brand.license)}</p><a class="text-link" href="${url(config.brand.website)}" ${external}>${text('officialSite')}${icon('arrow')}</a></div></section>${cta()}`;
  }
  function panelMenu(current) {
    return `<aside class="dashboard-sidebar"><div class="sidebar-profile"><span class="avatar">${esc(config.brand.initials)}</span><strong>${esc(config.brand.shortName)}</strong><small>${text('profile')}</small></div><nav aria-label="${text('dashboard')}">${[['', 'grid', 'overview'], ['/propiedades', 'home', 'myProperties'], ['/favoritos', 'heart', 'favorites'], ['/mensajes', 'message', 'messages'], ['/configuracion', 'settings', 'settings']].map(([path, sym, label]) => `<a href="#/panel${path}" ${path === current ? 'class="active" aria-current="page"' : ''}>${icon(sym)}${text(label)}${label === 'messages' ? `<span class="nav-count">${config.dashboard.messages.filter(m => !readMessages.includes(m.id)).length}</span>` : ''}</a>`).join('')}</nav><a class="back-site" href="#/">${icon('logout')}${text('backSite')}</a><div class="sidebar-note"><span class="badge badge-primary">${text('demoBadge')}</span><p>${text('dashboardFooter')}</p></div></aside>`;
  }
  function dashboardTable(items, compact = false) {
    return `<div class="table-scroll"><table class="properties-table"><thead><tr><th>${text('properties')}</th><th>${text('status')}</th><th>${text('actions')}</th></tr></thead><tbody>${items.map(p => `<tr><td><a class="table-property" href="#/propiedad/${esc(p.id)}">${photo(p)}<span><strong>${esc(p.title)}</strong><small>${text('reference')} ${esc(p.reference)} · ${esc(p.operation)}</small><b>${esc(price(p))}</b></span></a></td><td><span class="status ${statuses[p.id] === 'paused' ? 'status-paused' : ''}">${text(statuses[p.id] === 'paused' ? 'paused' : 'active')}</span></td><td><button class="table-action" data-action="status" data-id="${esc(p.id)}">${text(statuses[p.id] === 'paused' ? 'activate' : 'pause')}</button>${compact ? '' : `<a class="table-detail" href="#/propiedad/${esc(p.id)}" aria-label="${text('viewDetail')}: ${esc(p.title)}">${icon('arrow')}</a>`}</td></tr>`).join('')}</tbody></table>${items.length ? '' : `<p class="table-empty">${text('noMatches')}</p>`}</div>`;
  }
  function messageCards(items) {
    return items.map(m => `<article class="message-card ${readMessages.includes(m.id) ? 'is-read' : ''}"><span class="message-avatar">${esc(m.initials)}</span><div><div class="message-meta"><strong>${esc(m.name)}</strong><small>${esc(m.time)}</small></div><h3>${esc(m.subject)}</h3><p>${esc(m.text)}</p><button class="text-link" data-action="read" data-id="${esc(m.id)}" ${readMessages.includes(m.id) ? 'disabled' : ''}>${text(readMessages.includes(m.id) ? 'read' : 'markRead')}${icon('check')}</button></div></article>`).join('') || `<p>${text('noMessages')}</p>`;
  }
  function renderDashboard(path, params) {
    const tabs = { '': 'overview', '/propiedades': 'myProperties', '/favoritos': 'favorites', '/mensajes': 'messages', '/configuracion': 'settings' };
    if (!(path in tabs)) return renderNotFound();
    let content = '';
    if (!path) {
      const metrics = [[config.properties.length, 'catalogCount', 'home'], [config.properties.filter(p => statuses[p.id] !== 'paused').length, 'activeCount', 'check'], [favorites.filter(id => property(id)).length, 'favoriteCount', 'heart'], [config.dashboard.messages.length, 'inquiries', 'message']];
      content = `<div class="metrics-grid">${metrics.map(([value, label, sym], i) => `<article class="metric"><span class="metric-icon metric-${i}">${icon(sym)}</span><div><span>${text(label)}</span><strong>${value}</strong></div></article>`).join('')}</div><div class="dashboard-columns"><section class="panel-card"><div class="panel-card-heading"><h2>${text('recentProperties')}</h2><a href="#/panel/propiedades">${text('all')}${icon('arrow')}</a></div>${dashboardTable(config.properties.slice(0, 4), true)}</section><section class="panel-card chart-card"><div class="panel-card-heading"><h2>${text('activity')}</h2><span class="simulation-badge">${text('simulated')}</span></div><p>${text('activitySubtitle')}</p><div class="bar-chart">${config.dashboard.activity.map((value, i) => `<div class="chart-column"><span>${esc(value)}</span><div class="bar" style="height:${Math.max(5, Math.min(100, Number(value) / Math.max(...config.dashboard.activity, 1) * 100))}%"></div><small>${esc(config.dashboard.days[i])}</small></div>`).join('')}</div><a class="text-link" href="#/panel/mensajes">${text('recentMessages')}${icon('arrow')}</a></section></div><section class="panel-card"><div class="panel-card-heading"><h2>${text('recentMessages')}</h2><span class="simulation-badge">${text('simulated')}</span></div><div class="messages-preview">${messageCards(config.dashboard.messages.slice(0, 2))}</div></section>`;
    } else if (path === '/propiedades') {
      const query = normalize(params.get('q') || '');
      const status = params.get('status') || '';
      const items = config.properties.filter(p => normalize(p.title + ' ' + p.reference).includes(query) && (!status || (statuses[p.id] || 'active') === status));
      content = `<section class="panel-card"><form class="dashboard-search" data-form="dashboard-search"><label class="sr-only" for="dashboard-query">${text('filterProperties')}</label><input id="dashboard-query" name="q" placeholder="${text('filterProperties')}" value="${esc(params.get('q') || '')}"><label class="sr-only" for="dashboard-status">${text('status')}</label><select id="dashboard-status" name="status"><option value="">${text('allStatuses')}</option><option value="active" ${status === 'active' ? 'selected' : ''}>${text('active')}</option><option value="paused" ${status === 'paused' ? 'selected' : ''}>${text('paused')}</option></select><button class="btn btn-primary">${icon('search')}${text('search')}</button></form>${dashboardTable(items)}</section>`;
    } else if (path === '/favoritos') {
      const items = config.properties.filter(p => favorites.includes(p.id));
      content = `<div class="property-grid dashboard-favorites">${items.map(card).join('')}</div>${items.length ? '' : empty('emptyFavorites', 'emptyFavoritesText')}`;
    } else if (path === '/mensajes') {
      const unread = params.get('filter') === 'unread';
      content = `<section class="panel-card"><div class="panel-card-heading"><h2>${text('messages')}</h2><span class="simulation-badge">${text('simulated')}</span></div><p class="message-notice">${text('messageNotice')}</p><div class="message-tabs"><a class="pill ${!unread ? 'active' : ''}" href="#/panel/mensajes">${text('all')}</a><a class="pill ${unread ? 'active' : ''}" href="#/panel/mensajes?filter=unread">${text('unread')}</a></div>${messageCards(config.dashboard.messages.filter(m => !unread || !readMessages.includes(m.id)))}</section>`;
    } else {
      content = `<section class="panel-card settings-card"><span class="settings-icon">${icon('settings')}</span><h2>${text('configTitle')}</h2><p>${text('configText')}</p><div class="brand-preview">${logo()}<span class="color-swatch" style="background:${esc(config.brand.primary)}">${esc(config.brand.primary)}</span></div><div class="settings-actions"><button class="btn btn-primary" data-action="export">${icon('download')}${text('export')}</button><label class="btn btn-outline import-label">${icon('upload')}${text('import')}<input type="file" id="config-import" accept=".json,application/json"></label><button class="btn btn-outline" data-action="restore">${text('restore')}</button></div><p class="settings-note">${text('localOnly')}</p><hr><button class="text-link" data-action="reset-demo">${text('resetDemo')}</button></section>`;
    }
    $('#main').innerHTML = `${panelMenu(path)}<div class="dashboard-content"><div class="dashboard-heading"><div><span class="eyebrow">${text('dashboard')}</span><h1>${path ? text(tabs[path]) : text('greeting') + '.'}</h1><p>${text('dashboardSubtitle')}</p></div><span class="dashboard-account"><span class="mini-avatar">${esc(config.brand.initials)}</span>${text('profile')}</span></div><div class="demo-notice">${icon('sliders')}<p>${text('demoPanelNotice')}</p></div>${content}<p class="dashboard-footnote">${text('dashboardFooter')}</p></div>`;
  }
  function renderNotFound() {
    $('#main').innerHTML = `<section class="container section">${empty('notFound', 'notFoundText')}</section>`;
  }
  function currentRoute() {
    const [path, search = ''] = (location.hash.slice(1) || '/').split('?');
    return { path, params: new URLSearchParams(search) };
  }
  function render(focus = false) {
    const { path, params } = currentRoute();
    if ($('#gallery').open) $('#gallery').close();
    shell(path);
    if (path === '/') renderHome();
    else if (path === '/propiedades') renderCatalog(params);
    else if (path === '/favoritos') renderCatalog(params, true);
    else if (path.startsWith('/propiedad/')) renderDetail(path.split('/')[2]);
    else if (path === '/contacto') renderContact(params);
    else if (path === '/nosotros') renderAbout();
    else if (path === '/panel' || path.startsWith('/panel/')) renderDashboard(path.slice(6), params);
    else renderNotFound();
    $('#main').dataset.route = path;
    $('#main').dataset.hash = location.hash || '#/';
    document.title = `${$('#main h1')?.textContent || config.labels.properties} | ${config.brand.name}`;
    if (focus) { window.scrollTo(0, 0); $('#main').focus({ preventScroll: true }); }
  }
  function openGallery(id, index) {
    galleryProperty = property(id);
    if (!galleryProperty) return;
    galleryIndex = (index + galleryProperty.images.length) % galleryProperty.images.length;
    const dialog = $('#gallery');
    dialog.innerHTML = `<div class="gallery-toolbar"><strong>${esc(galleryProperty.title)}</strong><span>${galleryIndex + 1} / ${galleryProperty.images.length}</span><button class="icon-btn" data-action="close-gallery" aria-label="${text('close')}" autofocus>${icon('close')}</button></div><div class="gallery-stage"><button class="icon-btn gallery-prev" data-action="gallery-prev" aria-label="${text('previous')}">${icon('arrow', 'reverse')}</button>${photo(galleryProperty, galleryIndex, '', true)}<button class="icon-btn gallery-next" data-action="gallery-next" aria-label="${text('next')}">${icon('arrow')}</button></div>`;
    if (!dialog.open) dialog.showModal();
    $('[data-action="close-gallery"]', dialog).focus();
  }

  document.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement && !event.target.dataset.fallback) {
      if (event.target.classList.contains('brand-logo')) {
        event.target.hidden = true;
        event.target.nextElementSibling.classList.remove('has-logo');
        return;
      }
      event.target.dataset.fallback = 'true';
      event.target.src = 'assets/placeholder.svg';
      event.target.alt = config.labels.photoUnavailable;
    }
  }, true);
  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === 'menu') {
      const open = $('#navigation').classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    } else if (action === 'favorite' && property(id)) {
      favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
      store(keys.favorites, favorites);
      const saved = favorites.includes(id);
      document.querySelectorAll(`[data-action="favorite"][data-id="${id}"]`).forEach(item => {
        item.classList.toggle('saved', saved);
        item.setAttribute('aria-pressed', String(saved));
        item.setAttribute('aria-label', config.labels[saved ? 'unsave' : 'save']);
      });
      $('#favorite-counter').textContent = favorites.filter(item => property(item)).length;
      $('.header-favorite').setAttribute('aria-label', `${config.labels.favorites}: ${$('#favorite-counter').textContent}`);
      if (currentRoute().path.includes('favoritos')) render();
      notify(config.labels[storageAvailable ? saved ? 'saved' : 'removed' : 'storageWarning']);
    } else if (action === 'advanced') {
      const filters = $('.advanced-filters', button.form);
      filters.hidden = !filters.hidden;
      button.setAttribute('aria-expanded', String(!filters.hidden));
    } else if (action === 'operation') {
      button.form.elements.operation.value = button.dataset.value;
      button.parentElement.querySelectorAll('button').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-pressed', String(tab === button)); });
    } else if (action === 'home-type') {
      homeType = button.dataset.type;
      button.parentElement.querySelectorAll('button').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-pressed', String(tab === button)); });
      $('#featured-grid').innerHTML = homeProperties();
    } else if (action === 'hero-next' || action === 'hero-prev') {
      heroIndex = (heroIndex + (action === 'hero-next' ? 1 : -1) + config.home.heroIds.length) % config.home.heroIds.length;
      $('#hero').innerHTML = heroMarkup();
      $(`[data-action="${action}"]`).focus({ preventScroll: true });
    } else if (action === 'view') {
      viewMode = button.dataset.view;
      render();
    } else if (action === 'gallery') openGallery(id, Number(button.dataset.index));
    else if (action === 'close-gallery') $('#gallery').close();
    else if (action === 'gallery-prev' || action === 'gallery-next') openGallery(galleryProperty.id, galleryIndex + (action === 'gallery-next' ? 1 : -1));
    else if (action === 'share') {
      try { await navigator.clipboard.writeText(location.href); notify(config.labels.copied); }
      catch { notify(config.labels.copyFailed); }
    } else if (action === 'status' && property(id)) {
      statuses[id] = statuses[id] === 'paused' ? 'active' : 'paused';
      store(keys.statuses, statuses); render(); notify(config.labels[storageAvailable ? 'localUpdated' : 'storageWarning']);
    } else if (action === 'read') {
      if (!readMessages.includes(id)) readMessages.push(id);
      store(keys.read, readMessages); render();
    } else if (action === 'export') {
      const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' }));
      const anchor = document.createElement('a'); anchor.href = blobUrl; anchor.download = 'inmobiliaria-config.json'; anchor.click();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } else if (action === 'restore') {
      config = original; homeType = ''; heroIndex = 0; store(keys.config, null); render(); notify(config.labels.restoreSuccess);
    } else if (action === 'reset-demo') {
      statuses = {}; readMessages = []; store(keys.statuses, statuses); store(keys.read, readMessages); render(); notify(config.labels.resetSuccess);
    }
  });
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!form.dataset.form) return;
    event.preventDefault();
    const data = new FormData(form);
    if (form.dataset.form === 'search' || form.dataset.form === 'dashboard-search') {
      const params = new URLSearchParams();
      for (const [key, value] of data) if (String(value).trim()) params.set(key, String(value).trim());
      if (form.dataset.form === 'search') {
        if (!params.get('currency')) { params.delete('min'); params.delete('max'); }
        const max = form.elements.max;
        max.setCustomValidity('');
        if (params.get('min') && params.get('max') && Number(params.get('min')) > Number(params.get('max'))) {
          $('.advanced-filters', form).hidden = false;
          $('[data-action="advanced"]', form).setAttribute('aria-expanded', 'true');
          max.setCustomValidity(config.labels.minMaxError); max.reportValidity(); return;
        }
      }
      const hash = `#/${form.dataset.form === 'search' ? 'propiedades' : 'panel/propiedades'}${params.size ? '?' + params : ''}`;
      if (location.hash === hash) render(); else location.hash = hash;
    } else if (form.dataset.form === 'contact') {
      const body = `${data.get('message')}\n\n${config.labels.name}: ${data.get('name')}\n${config.labels.phone}: ${data.get('phone')}\n${config.labels.email}: ${data.get('email')}`;
      const href = `mailto:${config.brand.email}?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
      $('#contact-result').hidden = false;
      $('#contact-result').innerHTML = `${icon('check')}<h3>${text('emailReady')}</h3><p>${text('emailReadyText')}</p><a class="btn btn-primary" href="${url(href)}">${text('openDraft')}${icon('mail')}</a>`;
    }
  });
  document.addEventListener('input', event => {
    if (['min', 'max'].includes(event.target.name)) event.target.form.elements.max.setCustomValidity('');
  });
  document.addEventListener('change', async event => {
    if (event.target.matches('[data-currency]')) {
      const enabled = Boolean(event.target.value);
      for (const name of ['min', 'max']) { const input = event.target.form.elements[name]; input.disabled = !enabled; input.setCustomValidity(''); if (!enabled) input.value = ''; }
    } else if (event.target.id === 'sort') {
      const { params } = currentRoute();
      if (event.target.value) params.set('sort', event.target.value); else params.delete('sort');
      location.hash = '#/propiedades?' + params;
    } else if (event.target.id === 'config-import') {
      try {
        const file = event.target.files[0];
        if (!file || file.size > 2000000) throw new Error('Invalid size');
        const candidate = JSON.parse(await file.text());
        if (!validConfig(candidate)) throw new Error('Invalid config');
        config = candidate; homeType = ''; heroIndex = 0; store(keys.config, config); render(); notify(config.labels[storageAvailable ? 'importSuccess' : 'storageWarning']);
      } catch { notify(config.labels.importError); }
    }
  });
  document.addEventListener('keydown', event => {
    if ($('#gallery').open && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault(); openGallery(galleryProperty.id, galleryIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
    if (event.key === 'Escape' && $('#navigation').classList.contains('open')) {
      $('#navigation').classList.remove('open'); $('.menu-toggle').setAttribute('aria-expanded', 'false'); $('.menu-toggle').focus();
    }
  });
  $('#gallery').addEventListener('click', event => { if (event.target === $('#gallery')) $('#gallery').close(); });
  window.addEventListener('hashchange', () => render(true));
  render();
})();
