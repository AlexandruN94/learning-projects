// //MY FIRST CODING CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // (declaring variables, template literals, string concatenation, mathematical and comparison operators, if-else statements, toFixed function)
// let weightMark = 95;
// let weightJohn = 85;
// let heightMark = 1.88;
// let heightJohn = 1.76;
// console.log(
//   `Mark's weight is ${weightMark} kg and his height is ${heightMark} m`
// );
// console.log(
//   `John's weight is ${weightJohn} kg and his height is ${heightJohn} m`
// );
// let bmiMark = (weightMark / heightMark ** 2).toFixed(2);
// let bmiJohn = (weightJohn / heightJohn ** 2).toFixed(2);

// console.log("Mark's BMI is: " + bmiMark);
// console.log("John's BMI is: " + bmiJohn);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }

// // Challenge 2 - (tip calculator)

// const bill = 275;
// const tip15 = bill * 0.15;
// const tip20 = bill * 0.2;
// const tip = bill >= 50 && bill <= 300 ? tip15 : tip20;
// console.log(
//   `The bill was $${bill}, the tip was $${tip} and the total value $${
//     bill + tip
//   }`
// );

// // Challenge 3 - bills, tips, totals (functions, arrays, operators, for loops)

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

// Challenge 4: Arrays, Age Calculator

// const alexArray = [
//   'Alex',
//   'Mare',
//   2994 - 1000,
//   'Aspiring web developer!',
//   ['Jackson', 'Sarah', 'Mark'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < alexArray.length; i++) {
//   console.log(alexArray[i], typeof alexArray[i]);

//   types.push(typeof alexArray[i]);
// }
// console.log(types);

// const years = [1995, 1994, 2002, 1954, 2021];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// Challenge #4 - OOP (Constructor functions, prototypes, prototypal inheritance (work in progress))
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
  // let slowDown = this.speed - 5;
  // return slowDown;
  for (let slowDown = this.speed; slowDown >= 0; slowDown--) {
    console.log(slowDown);
  }
  // console.log(`Slowing down... ${this.speed - 5} kp/h`);
};

console.log(bmw);
console.log(mercedes);

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

// bmw.break();
// console.log(bmw.break(this.slowDown));
// console.log(break(this.slowDown));
