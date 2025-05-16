const burger = document.getElementById('burger');
const menu = document.querySelector('.header-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
})