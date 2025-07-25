const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('active');
});

// Cerrar dropdown si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});


const dropdownBtn1 = document.getElementById('dropdownBtn1');
const dropdownMenu1 = document.getElementById('dropdownMenu1');

dropdownBtn1.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu1.classList.toggle('active');
});

// Cerrar dropdown si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!dropdownBtn1.contains(e.target) && !dropdownMenu1.contains(e.target)) {
    dropdownMenu1.classList.remove('active');
  }
});


// Obtener elementos
const trackingBtn = document.getElementById('trackingBtn');
const trackingMenu = document.getElementById('trackingMenu');

// Abrir/cerrar submenu tracking al hacer clic
trackingBtn.addEventListener('click', e => {
  e.preventDefault();
  trackingMenu.classList.toggle('active');
});

// Cerrar submenu tracking si se hace clic fuera del botón o el submenu
document.addEventListener('click', e => {
  if (!trackingBtn.contains(e.target) && !trackingMenu.contains(e.target)) {
    trackingMenu.classList.remove('active');
  }
});
