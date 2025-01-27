import PetItem from '../components/PetItem';
import pets from '../../db/pets.json';

const getPetItem = (id) => {
  const pet = pets.find((el) => el.id === id);
  return new PetItem(
    pet.id,
    pet.name,
    pet.img,
    pet.type,
    pet.breed,
    pet.description,
    pet.age,
    pet.inoculations,
    pet.diseases,
    pet.parasites
  );
};
export default getPetItem;
