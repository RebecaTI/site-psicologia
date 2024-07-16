const navToggle = document.querySelector('#js-nav__toggle');
const navMenu = document.querySelector('#js-nav__menu');
const navClose = document.querySelector('#js-nav__close')

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  })
}

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}
