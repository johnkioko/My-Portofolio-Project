const hamburger = document.querySelector('.hamberg');
const navMenu = document.querySelector('.menu-list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-list-link').forEach((linkItem => linkItem.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
})));
