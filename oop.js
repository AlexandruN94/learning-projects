// Challenge 1 (constructor functions, inheritance, polymorphism)

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  console.log(`${this.brand} going at ${(this.speed -= 5)} km/h.`);
};

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.brand} going at ${this.speed} kp/h , with a charge of ${this.charge}%.`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.chargeBattery();
tesla.chargeBattery(90);
tesla.brake();
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
