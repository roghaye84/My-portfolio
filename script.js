// ===== تایپ متن =====
const texts = ["Front Developer", "Designer", "Web Developer"];
let count=0, index=0;

(function type(){
    if(count === texts.length) count=0;
    let current = texts[count];
    document.getElementById("typed-text").textContent = current.slice(0, ++index);
    if(index === current.length){
        setTimeout(()=>{ index=0; count++; type(); }, 2000);
    } else {
        setTimeout(type, 150);
    }
})();

// ===== منوی موبایل =====
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const iconText = menuToggle.querySelector('.icon-text');

menuToggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    iconText.textContent = sidebar.classList.contains('active') ? 'close' : 'menu';
});

// بستن منو وقتی روی لینک کلیک شد
sidebar.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
        sidebar.classList.remove('active');
        iconText.textContent = "menu";
    });
});
