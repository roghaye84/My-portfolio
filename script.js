// ===== تایپ متن =====
const texts = ["Front Developer", "Designer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    // اگر آخر لیست بود، دوباره از اول شروع می‌کنه
    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;

    if (letter.length === currentText.length) {
        // صبر قبل از شروع متن بعدی
        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, 2000);
    } else {
        // سرعت تایپ
        setTimeout(type, 150);
    }
})();


// ===== منوی موبایل (sidebar) =====
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if(menuToggle && sidebar) {
    const iconText = menuToggle.querySelector('.icon-text');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // باز/بسته کردن منو
        // تغییر آیکون بین menu و close
        iconText.textContent = sidebar.classList.contains('active') ? 'close' : 'menu';
    });

    // بستن منو وقتی روی یکی از لینک‌ها کلیک شد
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            iconText.textContent = 'menu';
        });
    });
}
