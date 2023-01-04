//MY FIRST CODING CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// (declaring variables, template literals, string concatenation, mathematical and comparison operators, if-else statements, toFixed function)
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

// Challenge 2 - (tip calculator)

const bill = 275;
const tip15 = bill * 0.15;
const tip20 = bill * 0.2;
const tip = bill >= 50 && bill <= 300 ? tip15 : tip20;
console.log(
  `The bill was $${bill}, the tip was $${tip} and the total value $${
    bill + tip
  }`
);

// Challenge 3 - bills, tips, totals (functions, arrays, operators, for loops)

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
