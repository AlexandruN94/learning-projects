MY FIRST CODING CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
(declaring variables, template literals, string concatenation, mathematical and comparison operators, if-else statements, toFixed function)
let weightMark = 95;
let weightJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;
console.log(
  `Mark's weight is ${weightMark} kg and his height is ${heightMark} m`
);
console.log(
  `John's weight is ${weightJohn} kg and his height is ${heightJohn} m`
);
let bmiMark = (weightMark / heightMark ** 2).toFixed(2);
let bmiJohn = (weightJohn / heightJohn ** 2).toFixed(2);

console.log("Mark's BMI is: " + bmiMark);
console.log("John's BMI is: " + bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

Challenge 2 - (tip calculator)

const bill = 275;
const tip15 = bill * 0.15;
const tip20 = bill * 0.2;
const tip = bill >= 50 && bill <= 300 ? tip15 : tip20;
console.log(
  `The bill was $${bill}, the tip was $${tip} and the total value $${
    bill + tip
  }`
);

Challenge 3 - bills, tips, totals (functions, arrays, operators, for loops)

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

Challenge 4: Arrays, Age Calculator

const alexArray = [
  'Alex',
  'Mare',
  2994 - 1000,
  'Aspiring web developer!',
  ['Jackson', 'Sarah', 'Mark'],
  true,
];

const types = [];

for (let i = 0; i < alexArray.length; i++) {
  console.log(alexArray[i], typeof alexArray[i]);

  types.push(typeof alexArray[i]);
}
console.log(types);

const years = [1995, 1994, 2002, 1954, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

Challenge #5 - OOP (Constructor functions, prototypes, prototypal inheritance (work in progress))
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  console.log(`Accelerating... ${this.speed + 10} kp/h`);
};

Car.prototype.break = function () {
  let slowDown = this.speed - 5;
  return slowDown;
  for (let slowDown;) {
    console.log(slowDown);
  }
  console.log(`Slowing down... ${this.speed - 5} kp/h`);
};

console.log(bmw);
console.log(mercedes);

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

bmw.break();
console.log(bmw.break(this.slowDown));
console.log(break(this.slowDown));


// Codinging challenge 6 - (Functions, calculate average scores)

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  let result = '';
  if (avgDolphins === avgKoalas) {
    console.log('The game ends with a draw!');
    return;
  }
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    return;
  }
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    return;
  }
  console.log('No team wins.');
};

const averageDolphins = calcAverage(85, 54, 71);
const averageKoalas = calcAverage(23, 34, 27);
checkWinner(averageDolphins, averageKoalas);

// Coding challenge 7 (percentage of population)

const percentageOfWorld3 = population => (population / 7900) * 100;

const populationTaiwan = percentageOfWorld3(23);
console.log(
  `Taiwan's population is ${populationTaiwan.toFixed(
    2
  )} % of the world's population`
);
const populationZimbabwe = percentageOfWorld3(15);
console.log(
  `Zimbabwe's population is ${populationZimbabwe.toFixed(
    2
  )} % of the world's population`
);
const populationFrance = percentageOfWorld3(67);
console.log(
  `France's population is ${populationFrance.toFixed(
    2
  )} % of the world's population`
);

// 8 Scoping in practice:

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age} years old and was born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with the same name as outer scope's variable
      const firstName = 'Smith';

      // Reassigning outer scope's variable
      output = 'Hello!';
      const str = `And you are a millenial, ${firstName}!`;
      console.log(str);

      function calcAge(birthYear) {
        return birthYear;
      }
      console.log(calcAge(1994));
      console.log(firstName);
    }
    console.log(output);
  }

  console.log(firstName);

  printAge();
  return age;
}

const firstName = 'Mark';
calcAge(1990);