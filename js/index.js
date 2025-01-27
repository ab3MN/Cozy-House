import pets from '../db/pets.json';
import hamburger from './hamburger';
import getRandomPetsItem from './helpers/getRandomPetsItem';
import PetSmallItem from './components/PetSmallItem';

//PET RENDER
const PETS_SLIDER = document.querySelector('.pets__slider');

if (PETS_SLIDER) {
  PETS_SLIDER.innerHTML = '';
  getRandomPetsItem(0, 7, 8).forEach((el) => {
    const petItem = new PetSmallItem(el.id, el.name, el.img, 'pets_page');

    PETS_SLIDER && PETS_SLIDER.append(petItem.generatePetItem());
  });
}
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_ACTIVE = document.querySelector('#item-active');
const ITEM_RIGHT = document.querySelector('#item-right');

if (CAROUSEL) {
  ITEM_LEFT.innerHTML = '';
  ITEM_ACTIVE.innerHTML = '';
  ITEM_RIGHT.innerHTML = '';

  const left = getRandomPetsItem(0, 7, 3);
  const active = getRandomPetsItem(0, 7, 3);
  const right = getRandomPetsItem(0, 7, 3);

  left.forEach((el) => {
    const petItem = new PetSmallItem(el.id, el.name, el.img, 'main_page');
    ITEM_LEFT && ITEM_LEFT.append(petItem.generatePetItem());
  });

  active.forEach((el) => {
    const petItem = new PetSmallItem(el.id, el.name, el.img, 'main_page');
    ITEM_ACTIVE && ITEM_ACTIVE.append(petItem.generatePetItem());
  });
  right.forEach((el) => {
    const petItem = new PetSmallItem(el.id, el.name, el.img, 'main_page');
    ITEM_RIGHT && ITEM_RIGHT.append(petItem.generatePetItem());
  });
}

//SLIDER

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const _BTN_LEFT = document.querySelector('#_btn-left');
const _BTN_RIGHT = document.querySelector('#_btn-right');

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
  _BTN_LEFT.removeEventListener('click', moveLeft);
  _BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
  _BTN_LEFT.removeEventListener('click', moveLeft);
  _BTN_RIGHT.removeEventListener('click', moveRight);
};

if (BTN_LEFT || BTN_RIGHT || _BTN_LEFT || _BTN_RIGHT) {
  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
  _BTN_LEFT.addEventListener('click', moveLeft);
  _BTN_RIGHT.addEventListener('click', moveRight);
}

if (CAROUSEL) {
  CAROUSEL.addEventListener('animationend', (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === 'move-left') {
      CAROUSEL.classList.remove('transition-left');
      changedItem = ITEM_LEFT;
      document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove('transition-right');
      changedItem = ITEM_RIGHT;
      document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = '';
    const arrayRandomNumber = getRandomPetsItem(0, 7, 3);

    arrayRandomNumber.forEach((el) => {
      const petItem = new PetSmallItem(el.id, el.name, el.img, 'main_page');
      const htmlPetItem = petItem.generatePetItem();

      changedItem.appendChild(htmlPetItem);
    });

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
    _BTN_LEFT.addEventListener('click', moveLeft);
    _BTN_RIGHT.addEventListener('click', moveRight);
  });
}

//PAGINATION
const COUNT = document.querySelector('.pets_count');
const PREV__BUTTON = document.querySelector('.pets_prev');
const FIRST__BUTTON = document.querySelector('.pets_prev-long');
const NEXT__BUTTON = document.querySelector('.pets_next');
const LAST__BUTTON = document.querySelector('.pets_next--long');
if (COUNT) {
  const disableButton = (button) => {
    button.classList.add('disabled');
    button.setAttribute('disabled', true);
  };
  const enableButton = (button) => {
    button.classList.remove('disabled');
    button.removeAttribute('disabled');
  };

  let currentPage = 1;
  let totalPages = 6;

  if (window.matchMedia('(max-width: 768px)')) {
    totalPages = 8;
  }
  if (window.matchMedia('(max-width: 610px)')) {
    totalPages = 16;
  }

  COUNT.innerHTML = currentPage;

  if (currentPage === 1) {
    disableButton(PREV__BUTTON);
    disableButton(FIRST__BUTTON);
  }

  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(PREV__BUTTON);
      disableButton(FIRST__BUTTON);
    } else {
      enableButton(PREV__BUTTON);
      enableButton(FIRST__BUTTON);
    }

    if (currentPage === totalPages) {
      disableButton(NEXT__BUTTON);
      disableButton(LAST__BUTTON);
    } else {
      enableButton(NEXT__BUTTON);
      enableButton(LAST__BUTTON);
    }
  };

  const fetchPets = async () => {
    const randomPets = getRandomPetsItem(0, 7, 8);

    PETS_SLIDER.innerHTML = '';
    randomPets.forEach((el) => {
      const petItem = new PetSmallItem(el.id, el.name, el.img, 'pets_page');

      PETS_SLIDER && PETS_SLIDER.append(petItem.generatePetItem());
    });
  };

  PREV__BUTTON.addEventListener('click', (e) => {
    currentPage -= 1;
    COUNT.innerHTML = currentPage;
    fetchPets();
    handlePageButtonsStatus();
  });
  FIRST__BUTTON.addEventListener('click', (e) => {
    currentPage = 1;
    COUNT.innerHTML = currentPage;
    fetchPets(e);
    handlePageButtonsStatus();
  });
  NEXT__BUTTON.addEventListener('click', (e) => {
    currentPage += 1;
    COUNT.innerHTML = currentPage;
    fetchPets(e);
    handlePageButtonsStatus();
  });
  LAST__BUTTON.addEventListener('click', (e) => {
    currentPage = 6;
    if (window.matchMedia('(max-width: 768px)')) {
      currentPage = 8;
    }
    if (window.matchMedia('(max-width: 610px)')) {
      currentPage = 16;
    }
    COUNT.innerHTML = currentPage;
    fetchPets(e);
    handlePageButtonsStatus();
  });
}
