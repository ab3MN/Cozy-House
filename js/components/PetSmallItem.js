import Modal from './Modal';
import getPetItem from '../helpers/getPetItem';

export default class PetSmallItem {
  constructor(id = '', name = '', img = '', classes) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.classes = classes;
  }
  generatePetItem() {
    let template = '';
    let li = document.createElement('li');
    li.className = 'pets__item ' + this.classes;
    li.setAttribute('data-id', this.id);

    template += `<div><img src=${this.img} alt="pets"></div>`;
    template += `<h5 class="pets__name ${this.classes}">${this.name}</h5>`;

    template += `<button class="button button_bordered">Learn more</button>`;

    li.innerHTML = template;
    li.addEventListener('click', () => {
      const petItem = getPetItem(this.id).generatePetItem();
      const modal = new Modal();
      modal.genereateModal(petItem);
    });
    return li;
  }
}
