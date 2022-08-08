const openMenu = document.querySelector('.nav__toggle--open');
const closeMenu = document.querySelector('.nav__toggle--close');
const nav = document.querySelector('.nav')

openMenu.addEventListener('click', (e) => {
  nav.classList.add('active');
})

closeMenu.addEventListener('click', () => {
 nav.classList.remove('active');
})
