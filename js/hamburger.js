const BURGER = document.querySelector('#hamburger');
const MENU = document.querySelector('.header__navigation');
const NAV = document.querySelector('.nav');
const BURGER_BGC = document.querySelector('.header__bgc');
import blockScroll from './helpers/blockScroll';
import allowScroll from './helpers/allowScroll';

const changeBurgerTransition = () =>
  BURGER.classList.contains('active')
    ? (BURGER.classList.remove('active'),
      BURGER_BGC.classList.remove('active'),
      allowScroll())
    : (BURGER.classList.add('active'),
      BURGER_BGC.classList.add('active'),
      blockScroll());

const changeMenuVisability = () =>
  MENU.classList.contains('active')
    ? MENU.classList.remove('active')
    : MENU.classList.add('active');

BURGER_BGC.addEventListener(
  'click',
  () => (changeBurgerTransition(), changeMenuVisability())
);

BURGER.addEventListener(
  'click',
  () => (changeBurgerTransition(), changeMenuVisability())
);

NAV.addEventListener('click', (e) =>
  e.target !== e.currentTarget
    ? (changeBurgerTransition(), changeMenuVisability())
    : undefined
);
window.addEventListener('keydown', (e) =>
  e.code !== 'Escape'
    ? undefined
    : (changeBurgerTransition(), changeMenuVisability())
);
