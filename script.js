// ===== 1. مدیریت لودینگ اسکرین =====
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    if (loadingScreen && mainContent) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }, 800);
        }, 4000); // 4 ثانیه لودینگ
    }
});

// ===== 2. تایپینگ متن (Typed Text Animation) =====
(function typeText() {
    const texts = ["Front-End Developer", "Web Designer", "UI Enthusiast"];
    let count = 0;
    let index = 0;

    function type() {
        const currentText = texts[count];
        const letter = currentText.slice(0, ++index);
        const typedElement = document.getElementById("typed-text");
        if (typedElement) {
            typedElement.textContent = letter;
        }

        if (letter.length === currentText.length) {
            setTimeout(erase, 2000);
        } else {
            setTimeout(type, 120);
        }
    }

    function erase() {
        const currentText = texts[count];
        const letter = currentText.slice(0, --index);
        const typedElement = document.getElementById("typed-text");
        if (typedElement) {
            typedElement.textContent = letter;
        }

        if (letter.length === 0) {
            count = (count + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(erase, 80);
        }
    }

    // شروع تایپینگ فقط اگر عنصر وجود داشت
    const typedElement = document.getElementById("typed-text");
    if (typedElement) {
        setTimeout(type, 500);
    }
})();

// ===== 3. منوی موبایل (Sidebar Toggle با آیکون menu/close) =====
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        // باز/بسته کردن منو با کلیک روی آیکون
        menuToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            // تغییر آیکون بین "menu" و "close"
            this.textContent = sidebar.classList.contains('active') ? 'close' : 'menu';
        });

        // بستن منو با کلیک روی هر لینک
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function () {
                sidebar.classList.remove('active');
                menuToggle.textContent = 'menu';
            });
        });
    }
});
