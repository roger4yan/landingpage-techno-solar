AOS.init();

function openMenu () {
    document.getElementById("menu").style.width = '100%'
}

function closeMenu () {
    document.getElementById("menu").style.width = '0%'
}


let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 1;
function loadShow () {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.filter = 'none';
    items[active].style.zIndex = 1;  
    items[active].style.opacity = 1;
    items[active].style.zIndex = items.length;

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
        items[i].style.zIndex = stt;        
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
        items[i].style.zIndex = stt;         
    }
}

loadShow();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

next.style.zIndex = items.length + 1;
prev.style.zIndex = items.length + 1;