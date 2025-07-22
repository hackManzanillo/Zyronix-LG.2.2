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
