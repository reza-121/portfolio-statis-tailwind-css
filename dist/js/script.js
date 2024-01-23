window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


const hambuerger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');

hambuerger.addEventListener('click', function() {
    hambuerger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});


