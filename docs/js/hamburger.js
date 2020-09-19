const button = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    button.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});