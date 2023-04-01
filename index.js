// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(str) {
  if(this.stomach.length < 10) {
    this.stomach.push(str);
  }
};

Person.prototype.poop = function() {
  if(this.stomach.length >= 10) {
    this.stomach = [];
  }
};

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};

const person1 = new Person('Neo', '20');
for(let i = 0; i < 13; i++) {
   person1.eat('cookie');
};
person1.poop();
console.log(person1.toString());
console.log(person1.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function(distance) {
  this.odometer = distance;

  // Toal distance car can go
  let totalDistance = this.tank * this.milesPerGallon;
  this.tank = totalDistance - this.odometer;

  if(this.tank === 0) {
    console.log(`I ran out of fuel at ${this.odometer} miles!`);
  }
  return this.tank;
};

// Second arguments is miles per gallon
const stinger = new Car('GT2', 2);

// 230 gallon
stinger.fill(10);
stinger.fill(10);
//stinger.drive(400);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);


Baby.prototype = Baby.prototype;
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};

const baby1 = new Baby(
{
  favoriteToy: 'trains',
  name: 'John', 
  age: 5,
});

console.log(baby1.toString());
console.log(baby1.play());
baby1.eat('baby food');


/*
for(let i = 0; i < 13; i++) {
  baby1.eat('baby milk');
}
console.log(baby1.stomachArr);
baby1.poop();

console.log(baby1.stomachArr);

 */
 

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Principle 1 involves global binding. Global binding is when in the global scope the value of the keyword "this" will be the window object or console object. For example, a created function in the global scope that returns the keyword "this" when invoked the keyword "this" will always point to the window object even though it seems to be function scoped. This is because the function is created in the global scope therefore, the function lives on the top object being the window object like a property or method of the window object therefore, "this" in the context of a globally created function will point to its object being the window object. 

  2. Principle 2 involves Implicit binding. Implicit binding is implied that if your using a method on an object that the context you want is whatever is bound left to the dot so the object to the left of the dot gets "this" therefore, the context of "this" points to the object left of the dot.


  3. Principle 3 pertains to new binding. New binding is whenever a constructor function is used "this" refers to the specific instance of the object that is created and returned by the constructor function Therefore, the context of "this" always points to the newly created object.

  4. Principle 4 pertains to explicit binding. Explicit binding is when call(), apply(), or bind() methods are used. Whenever one of these methods are used the keyword "this" is explicitly defined. When you use one of these methods you overwrite what the keyword "this" points to by giving it another object. You pass in a new object as an argument into one of these methods called on another object and the 'this' keyword now points to the object that was passed in as an argument to one of the called methods. You can bind objects this way.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
