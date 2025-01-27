export default class PetItem {
  constructor(
    id = '',
    name = '',
    img = '',
    type = '',
    breed = '',
    description = '',
    age = '',
    inoculations = [],
    diseases = [],
    parasites = []
  ) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }
  generatePetItem() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'pet__item';
    article.setAttribute('data-id', this.id);

    template += `<img class="pet__image" src=${this.img} alt="pet__image">`;

    template += `<div class="pet__content">`;

    template += `<h3 class="pet__name">${this.name}</h3>`;
    template += `<h4 class="pet__breed">${this.type} - ${this.breed}</h4>`;
    template += `<p class="pet__description">${this.description} </p>`;

    //PET INFO
    template += `<ul class="pet__info">`;
    //PET AGE
    template += `<li><h5 class="pet__info-item name">Age: <span class="pet__info-item colored">${this.age}</span></h5></li>`;

    //PET INOCULATIONS
    template += `<li><h5 class="pet__info-item name">Inoculations: `;
    this.inoculations.forEach(
      (el) => (template += `<span class="pet__info-item colored">${el}</span>`)
    );
    template += `</h5></li>`;
    //PET DISEASES
    template += `<li><h5 class="pet__info-item name">Diseases: `;
    this.diseases.forEach(
      (el) => (template += `<span class="pet__info-item colored">${el}</span>`)
    );
    template += `</h5></li>`;
    //PET PARASITES
    template += `<li><h5 class="pet__info-item name">Parasites: `;
    this.parasites.forEach(
      (el) => (template += `<span class="pet__info-item colored">${el}</span>`)
    );
    template += `</h5></li>`;
    template += `</ul>`;
    template += `</div>`;

    article.innerHTML = template;

    return article;
  }
}
