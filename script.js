const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if(menuToggle && sidebar) {  // بررسی می‌کنه المان‌ها وجود دارن
  const iconText = menuToggle.querySelector('.icon-text');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    iconText.textContent = sidebar.classList.contains('active') ? 'close' : 'menu';
  });
}
