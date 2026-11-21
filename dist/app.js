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

