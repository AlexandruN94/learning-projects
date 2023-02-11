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
