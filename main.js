const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')


menuMail.addEventListener('click', toggleDesktop);//toggle: invertir mando
function toggleDesktop() {
    desktopMenu.classList.toggle('inactive');
}