// I wrote a small callback---higher-order function example

const bmiCalculator = function (mass, height) {
  return (mass / height ** 2).toFixed(2);
};

const transformer = function (mass, height, fn) {
  console.log(`Your BMI is: ${fn(mass, height)}`);
};

transformer(60, 1.6, bmiCalculator);
