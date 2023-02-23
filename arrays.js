// Challenge #1: array methods, array looping (forEach())

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJuli2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia1 = dogsJulia1.slice(1, 3);
  console.log(correctedDogsJulia1);
  const dogsJuliaAndKate = correctedDogsJulia1.concat(dogsKate1);
  console.log(dogsJuliaAndKate);

  dogsJuliaAndKate.forEach(function (age, index) {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old.`
      );
    } else {
      console.log(
        age === 1
          ? `Dog number ${index + 1} is still a puppy and is ${age} year old.`
          : `Dog number ${index + 1} is still a puppy and is ${age} years old.`
      );
    }
  });
};
checkDogs();

// Challenge #2 - Array Methods (.map, .filter, .reduce)

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const filteredAges = humanAges.filter(age => age > 18);
  const reducedAges =
    filteredAges.reduce((acc, age) => acc + age, 0) / filteredAges.length;
  return reducedAges;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Challenge #3 - Final Array Methods Practice

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1:
dogs.forEach(function (el) {
  return (el.recFood = Math.trunc(el.weight ** 0.75 * 28));
});
console.log(dogs);

// Task 2:

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }.`
);

// Task 3

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

// Task 4

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`);

// Task 5

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// Task 6

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// Task 7

console.log(dogs.filter(checkEatingOkay));

// Task 8

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsSorted);
