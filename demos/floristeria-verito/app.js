'use strict';

// ---- Datos editables de la demo ----
const CONFIG = {
  name: 'Verito',
  whatsapp: '', // número de la floristería con código de país, ej. 5939XXXXXXXX; vacío = el cliente elige el contacto
  sameDayCutoff: 14, // hora límite para entrega el mismo día
  bigExtra: 12, // recargo del tamaño grande, en USD
  hours: 'Lunes a sábado, 08:00 – 19:00 · Domingo, 09:00 – 13:00',
  featured: 'jardin-rosado',
};

const OCCASIONS = [
  { id: 'todas', label: 'Todas' },
  { id: 'amor', label: 'Amor' },
  { id: 'cumple', label: 'Cumpleaños' },
  { id: 'gracias', label: 'Agradecimiento' },
  { id: 'condolencias', label: 'Condolencias' },
  { id: 'plantas', label: 'Plantas' },
];

const ITEMS = [
  { id: 'rosas-rojas', occ: 'amor', name: 'Docena de rosas rojas', desc: '12 rosas ecuatorianas con follaje y papel kraft.', price: 28, img: 'photo-1578439231583-9eca0a363860', alt: 'Rosas rojas' },
  { id: 'jardin-rosado', occ: 'amor', name: 'Jardín rosado', desc: 'Rosas rosadas y blancas en jarrón de vidrio.', price: 35, img: 'photo-1523693916903-027d144a2b7d', alt: 'Ramo de rosas rosadas y blancas' },
  { id: 'girasoles', occ: 'cumple', name: 'Ramo de girasoles', desc: 'Girasoles y flores de temporada; alegre y luminoso.', price: 24, img: 'photo-1601884928885-92a922f7962f', alt: 'Persona que sostiene un ramo de girasoles' },
  { id: 'ramo-alegre', occ: 'cumple', name: 'Caja pastel', desc: 'Rosas en tonos pastel y flores de temporada, en caja.', price: 34, img: 'photo-1589217289787-879b47f6edab', alt: 'Caja con rosas en tonos pastel y flores de temporada' },
  { id: 'tulipanes', occ: 'gracias', name: 'Tulipanes rosados', desc: 'Tulipanes frescos en jarrón, para decir gracias.', price: 32, img: 'photo-1561181226-e8a7edd504c6', alt: 'Tulipanes rosados en un jarrón' },
  { id: 'caja-regalo', occ: 'gracias', name: 'Caja de regalo', desc: 'Ramo mixto con caja para un detalle adicional.', price: 38, img: 'photo-1759420319818-1a2c8684a584', alt: 'Ramo de flores junto a una caja de regalo abierta' },
  { id: 'blanco-paz', occ: 'condolencias', name: 'Ramo blanco', desc: 'Flores blancas y verdes, sobrio y sereno.', price: 30, img: 'photo-1592599230696-75020972557c', alt: 'Ramo de flores blancas y verdes' },
  { id: 'centro-orquidea', occ: 'condolencias', name: 'Centro de orquídea blanca', desc: 'Orquídea blanca en base baja para salas y velaciones.', price: 45, img: 'photo-1548014251-6c4f4b6055d3', alt: 'Centro de mesa de orquídea blanca' },
  { id: 'orquidea', occ: 'plantas', name: 'Orquídea en maceta', desc: 'Dura semanas en casa u oficina. Incluye cuidados.', price: 26, img: 'photo-1618080578815-335456280012', alt: 'Orquídeas moradas y blancas en maceta de cerámica' },
  { id: 'suculentas', occ: 'plantas', name: 'Suculentas en barro', desc: 'Trío de suculentas en maceta de barro.', price: 15, img: 'photo-1578687595593-31fafb682273', alt: 'Plantas suculentas en maceta' },
];

const ZONES = [
  { id: 'norte', label: 'Norte', fee: 3 },
  { id: 'centro', label: 'Centro', fee: 3 },
  { id: 'sur', label: 'Sur', fee: 4 },
  { id: 'cumbaya', label: 'Cumbayá / Tumbaco', fee: 6 },
  { id: 'chillos', label: 'Valle de los Chillos', fee: 6 },
  { id: 'retiro', label: 'Retiro en el local', fee: 0 },
];

// Fechas especiales: fecha fija (month, day) o n-ésimo domingo del mes (month, nthSunday)
const SPECIAL_DATES = [
  { name: 'San Valentín', month: 1, day: 14, occ: 'amor' },
  { name: 'Día de la Mujer', month: 2, day: 8, occ: 'gracias' },
  { name: 'Día de la Madre', month: 4, nthSunday: 2, occ: 'amor' },
  { name: 'Día del Padre', month: 5, nthSunday: 3, occ: 'gracias' },
  { name: 'Día de los Difuntos', month: 10, day: 2, occ: 'condolencias' },
  { name: 'Navidad', month: 11, day: 25, occ: 'plantas' },
];

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const state = { occ: 'todas' };
const $ = (id) => document.getElementById(id);

function formatPrice(n) {
  return '$' + n.toFixed(2);
}

function photoUrl(id, w, h) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=65`;
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function toIsoDate(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// ---- Fechas especiales ----
function dateOf(sd, year) {
  if (sd.day) return new Date(year, sd.month, sd.day);
  const d = new Date(year, sd.month, 1);
  while (d.getDay() !== 0) d.setDate(d.getDate() + 1);
  d.setDate(d.getDate() + 7 * (sd.nthSunday - 1));
  return d;
}

function upcomingSpecialDates() {
  const today = startOfDay(new Date());
  return SPECIAL_DATES.map((sd) => {
    let date = dateOf(sd, today.getFullYear());
    if (date < today) date = dateOf(sd, today.getFullYear() + 1);
    return { ...sd, date, days: Math.round((date - today) / 86400000) };
  }).sort((a, b) => a.date - b.date);
}

function renderDates() {
  const list = upcomingSpecialDates();
  const next = list[0];
  const when = next.days === 0 ? 'es hoy' : next.days === 1 ? 'es mañana' : `es en ${next.days} días`;
  $('next-date-text').innerHTML = `<b>${next.name}</b> ${when}, el ${next.date.getDate()} de ${MONTHS[next.date.getMonth()]}. Reserva con tiempo: en fechas especiales los arreglos se agotan.`;
  $('next-date-btn').addEventListener('click', () => {
    $('f-date').value = toIsoDate(next.date);
    filterTo(next.occ);
    updateOrder();
  });
  $('dates-list').innerHTML = list.slice(1).map((d) => `
    <li><b>${d.date.getDate()} de ${MONTHS[d.date.getMonth()]}</b><span>${d.name}</span></li>`).join('');
}

// ---- Catálogo ----
function renderChips() {
  $('chips').innerHTML = OCCASIONS.map((o) =>
    `<button type="button" role="tab" aria-selected="${o.id === state.occ}" data-occ="${o.id}">${o.label}</button>`).join('');
  $('chips').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => filterTo(b.dataset.occ)));
}

function filterTo(occ) {
  state.occ = occ;
  $('chips').querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.occ === occ)));
  renderGrid();
}

function renderGrid() {
  const list = ITEMS.filter((i) => state.occ === 'todas' || i.occ === state.occ);
  if (!list.length) {
    $('grid').innerHTML = '<li class="empty">No hay arreglos en esta ocasión todavía. Escríbenos y lo armamos a tu gusto.</li>';
    return;
  }
  $('grid').innerHTML = list.map((i) => `
    <li class="item">
      <img src="${photoUrl(i.img, 600, 720)}" alt="${i.alt}" loading="lazy" width="600" height="720">
      <div class="item-body">
        <h3>${i.name}</h3>
        <p>${i.desc}</p>
        <div class="item-foot"><span class="price">${formatPrice(i.price)}</span>
        <button type="button" class="btn btn-line btn-sm" data-pick="${i.id}">Elegir este</button></div>
      </div>
    </li>`).join('');
  $('grid').querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => {
    $('f-item').value = b.dataset.pick;
    updateOrder();
    $('pedido').scrollIntoView({ behavior: 'smooth' });
  }));
}

// ---- Pedido ----
function earliestDelivery() {
  const now = new Date();
  const d = startOfDay(now);
  if (now.getHours() >= CONFIG.sameDayCutoff) d.setDate(d.getDate() + 1);
  return d;
}

function setupForm() {
  $('f-item').innerHTML = OCCASIONS.filter((o) => o.id !== 'todas').map((o) =>
    `<optgroup label="${o.label}">${ITEMS.filter((i) => i.occ === o.id).map((i) =>
      `<option value="${i.id}">${i.name} · ${formatPrice(i.price)}</option>`).join('')}</optgroup>`).join('');
  $('f-item').value = CONFIG.featured;
  $('f-zone').innerHTML = ZONES.map((z) =>
    `<option value="${z.id}">${z.label}${z.fee ? ' · envío ' + formatPrice(z.fee) : ' · sin costo'}</option>`).join('');
  const min = earliestDelivery();
  $('f-date').min = toIsoDate(min);
  $('f-date').value = toIsoDate(min);
  $('size-extra').textContent = '+' + formatPrice(CONFIG.bigExtra);
  $('big-extra').textContent = CONFIG.bigExtra;

  ['f-item', 'f-zone', 'f-date', 'f-to', 'f-from', 'f-msg', 'f-address'].forEach((id) => $(id).addEventListener('input', updateOrder));
  document.querySelectorAll('input[name=size]').forEach((r) => r.addEventListener('change', updateOrder));
  $('order-form').addEventListener('submit', onSubmit);
  $('done-new').addEventListener('click', resetForm);
}

function readOrder() {
  const item = ITEMS.find((i) => i.id === $('f-item').value);
  const zone = ZONES.find((z) => z.id === $('f-zone').value);
  const big = document.querySelector('input[name=size]:checked').value === 'grande';
  const dateStr = $('f-date').value;
  const date = dateStr ? new Date(dateStr + 'T00:00:00') : null;
  return {
    item, zone, big, date,
    address: $('f-address').value.trim(),
    to: $('f-to').value.trim(),
    from: $('f-from').value.trim(),
    msg: $('f-msg').value.trim(),
    total: item.price + (big ? CONFIG.bigExtra : 0) + zone.fee,
  };
}

function longDate(d) {
  return d.toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' });
}

function updateOrder() {
  const o = readOrder();
  $('form-err').textContent = '';
  $('pv-to').textContent = o.to || '…';
  $('pv-from').textContent = o.from || '…';
  $('pv-msg').textContent = o.msg || 'Tu dedicatoria aparecerá aquí, escrita a mano.';
  $('pv-msg').classList.toggle('placeholder', !o.msg);
  $('msg-count').textContent = `${o.msg.length}/160`;

  const rows = [[`${o.item.name}${o.big ? ' (grande)' : ''}`, o.item.price + (o.big ? CONFIG.bigExtra : 0)]];
  rows.push([o.zone.fee ? `Envío ${o.zone.label}` : 'Retiro en el local', o.zone.fee]);
  $('sum').innerHTML = rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${formatPrice(v)}</dd></div>`).join('');
  $('total').textContent = formatPrice(o.total);

  const hint = $('date-hint');
  if (!o.date) { hint.textContent = ''; return; }
  const today = startOfDay(new Date());
  if (o.date < earliestDelivery()) {
    hint.textContent = `Para hoy ya pasó la hora límite (${CONFIG.sameDayCutoff}:00). La primera entrega posible es mañana.`;
    hint.className = 'hint span2 bad';
  } else {
    hint.textContent = o.date.getTime() === today.getTime() ? 'Entrega hoy mismo, por la tarde.' : `Entrega el ${longDate(o.date)}.`;
    hint.className = 'hint span2';
  }
}

function onSubmit(e) {
  e.preventDefault();
  const o = readOrder();
  const problems = [];
  if (!o.date) problems.push('elige la fecha de entrega');
  else if (o.date < earliestDelivery()) problems.push('elige una fecha desde mañana');
  if (o.zone.fee && o.address.length < 6) problems.push('escribe la dirección de entrega');
  if (o.to.length < 2) problems.push('di para quién son las flores');
  if (o.from.length < 2) problems.push('escribe tu nombre');
  if (problems.length) { $('form-err').textContent = 'Para enviar el pedido, ' + problems.join(', ') + '.'; return; }
  $('form-err').textContent = '';

  const ref = 'FV-' + String(Date.now()).slice(-5);
  const lines = [
    `Hola Floristería ${CONFIG.name}, quiero hacer el pedido ${ref}:`,
    `• ${o.item.name}${o.big ? ' (grande)' : ''}`,
    `• Entrega: ${longDate(o.date)}`,
    o.zone.fee ? `• Sector: ${o.zone.label} · ${o.address}` : '• Retiro en el local',
    `• Para: ${o.to}`,
    o.msg ? `• Tarjeta: "${o.msg}"` : '• Sin dedicatoria',
    `• De parte de: ${o.from}`,
    `Total estimado: ${formatPrice(o.total)}`,
  ];
  const link = waLink(lines.join('\n'));
  $('done-t').textContent = `¡Gracias, ${o.from.split(' ')[0]}! Tu pedido ${ref} está listo para enviar.`;
  $('done-wa').href = link;
  $('order-form').hidden = true;
  $('done').hidden = false;
  $('done').focus();
  window.open(link, '_blank', 'noopener');
}

function resetForm() {
  $('order-form').reset();
  $('f-item').value = CONFIG.featured;
  $('f-date').value = toIsoDate(earliestDelivery());
  updateOrder();
  $('done').hidden = true;
  $('order-form').hidden = false;
}

function init() {
  document.querySelectorAll('[data-name]').forEach((el) => { el.textContent = CONFIG.name; });
  const featured = ITEMS.find((i) => i.id === CONFIG.featured);
  $('hero-pick').textContent = featured.name;
  $('hero-pick-price').textContent = 'desde ' + formatPrice(featured.price);
  $('hours').textContent = CONFIG.hours;
  $('top-wa').href = waLink(`Hola Floristería ${CONFIG.name}, quiero información sobre un arreglo.`);
  renderDates();
  renderChips();
  renderGrid();
  setupForm();
  updateOrder();
}

init();
