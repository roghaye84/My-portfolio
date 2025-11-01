// ===== تایپ متن =====
const texts = ["Front Developer", "Designer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, 2000);
    } else {
        setTimeout(type, 150);
    }
})();

// ===== منوی موبایل =====
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const iconText = menuToggle.querySelector('.icon-text');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        iconText.textContent = "close"; // ضربدر
    } else {
        iconText.textContent = "menu";  // آیکون منو
    }
});

// بستن منو وقتی روی لینک کلیک شد
sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        iconText.textContent = "menu";
    });
});
