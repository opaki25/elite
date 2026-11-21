const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); menu.textContent = open ? '×' : '☰'; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.textContent='☰';}));
let selectedVehicle = '';
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {document.querySelector('#service').value = link.dataset.service; selectedVehicle = '';document.querySelector('#vehicle').value = '';}));
document.querySelectorAll('[data-vehicle]').forEach(link => link.addEventListener('click', () => {selectedVehicle = link.dataset.vehicle;document.querySelector('#vehicle').value = selectedVehicle;}));
const today = new Date();
const localDate = new Intl.DateTimeFormat('en-CA', {timeZone:'Africa/Kampala',year:'numeric',month:'2-digit',day:'2-digit'}).format(today);
document.querySelector('#date').min = localDate;
document.querySelector('#year').textContent = today.getFullYear();
document.querySelector('#trip-form').addEventListener('submit', event => {event.preventDefault(); const date = document.querySelector('#date'); if(date.value < localDate){date.setCustomValidity('Please choose today or a future date.');date.reportValidity();return;} date.setCustomValidity('');const pickup = document.querySelector('#pickup');const destination = document.querySelector('#destination'); for(const field of [pickup,destination]){field.setCustomValidity(field.value.trim() ? '' : 'Please enter a location.');if(!field.reportValidity()) return;}const message = `Hello Elite Transporters! I would like a quote.\nService: ${document.querySelector('#service').value}\nPickup: ${pickup.value.trim()}\nDestination: ${destination.value.trim()}\nTravel date: ${date.value}${selectedVehicle ? '\nPreferred vehicle: '+selectedVehicle : ''}\nPlease confirm price and availability.`;window.open('https://wa.me/256781293004?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});
document.querySelectorAll('input').forEach(input => input.addEventListener('input', () => input.setCustomValidity('')));
document.querySelector('#vehicle').addEventListener('change', event => {selectedVehicle = event.target.value;});

const vehicles = {
  'Toyota Noah': ['COMFORT & SPACE', 'A spacious companion for airport arrivals, family plans, and a comfortable journey out of town. 2012 model.'],
  'Toyota Wish': ['COMFORT & ECONOMY', 'An easygoing choice for city plans and comfortable everyday journeys. Ask our team about your route and passenger needs. 2007 model.'],
  'Toyota Vanguard': ['EVERYDAY VERSATILITY', 'A versatile option for your next journey. Share your destination and luggage needs so we can confirm the right fit. 2017 model.'],
  'Toyota Alphard': ['VIP & LUXURY TRAVEL', 'For VIP arrivals, business plans, and occasions that call for a little extra comfort. 2017 model.'],
  'Toyota Hiace': ['GROUP & CARGO TRANSPORT', 'Keep your group moving together. Tell us your passenger count or cargo requirements and we’ll confirm suitable arrangements.']
};
const fleetTabs = [...document.querySelectorAll('[data-car]')];
function selectVehicleTab(tab) {
  fleetTabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  const name = tab.dataset.car;
  document.querySelector('#vehicle-name').textContent = name;
  document.querySelector('#vehicle-category').textContent = vehicles[name][0];
  document.querySelector('#vehicle-description').textContent = vehicles[name][1];
  document.querySelector('#vehicle-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('#choose-vehicle').dataset.vehicle = name;
}
fleetTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectVehicleTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % fleetTabs.length;
    else if (event.key === 'ArrowLeft') next = (index + fleetTabs.length - 1) % fleetTabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = fleetTabs.length - 1;
    else return;
    event.preventDefault(); selectVehicleTab(fleetTabs[next]); fleetTabs[next].focus();
  });
});
