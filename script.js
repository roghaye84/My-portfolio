.menu-toggle {
    cursor: pointer;
    font-size: 32px;
    transition: 0.3s;
}

/* وقتی کلاس close اضافه شد، متن ضربدر نمایش داده شود */
.menu-toggle.close::after {
    content: "close";
}

/* وقتی کلاس close است، متن اصلی مخفی می‌شود */
.menu-toggle.close {
    font-size: 0; /* متن menu مخفی شود */
}

.menu-toggle.close::after {
    font-size: 32px;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
