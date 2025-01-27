import pets from '../../db/pets.json';
const getRandomPetsItem = (min, max, length) => {
  let totalNumbers = max - min + 1,
    arrayTotalNumbers = [],
    arrayRandomNumbers = [],
    tempRandomNumber;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }

  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(
      Math.random() * (arrayTotalNumbers.length - 1)
    );
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }

  return arrayRandomNumbers
    .splice(0, length)
    .map((el) => pets.find((_el) => _el.id === '' + el));
};

export default getRandomPetsItem;
