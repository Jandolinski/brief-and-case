const hamburger = document.querySelector('.hamburger');
const hamSVG = hamburger.querySelector('.ham');
const mobileMenu = document.querySelector('.menu--mobile');

hamburger.addEventListener('click', function () {
    hamSVG.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});