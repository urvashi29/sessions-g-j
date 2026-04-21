// ES6 features: class
// Debugging

let arr = [20, 1, 3, 4];
let newArr = new Array([100, 2, 3, 4, 200]);

console.log(arr);
// arr.map();

let str = new String("Hello");
console.log(str);

let num = new Number(20);
console.log(num);

// Array.prototype.details = function (){

// }

// Prototype
// prototype
function Employee(id, firstName, salary) {
  this.id = id;
  this.firstName = firstName;
  this.salary = salary;
}

// instance members -> id, firstName
// prototype members -> nationality
Employee.prototype.nationality = "Indian";
const empOne = new Employee(2, "Alaya", 89908);
console.log(empOne.nationality);

// Prototypal inheritance
function Programmer(id, firstName, salary, language) {
  Employee.call(this, id, firstName, salary); //similar to super()
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manual set the constructor
Programmer.prototype.constructor = Programmer;

const p = new Programmer(1, "Alex", 89809, "javascript");
console.log(p);

// call
const person = {
  fullName: function (countryOne, countryTwo) {
    console.log(
      this.firstName + " " + this.age + " " + countryOne + " " + countryTwo,
    );
  },
};

const emp = {
  firstName: "alex",
  age: 20,
};

person.fullName.call(emp, "Indian", "Canada");

//  apply()
person.fullName.apply(emp, ["India", "Canada"]);

console.log(Math.max(10, 2, 3, 2, 100));
console.log(Math.min(10, 2, 3, 2, 100));

let numbers = [10, 2, 3, 4, 5, 6, 20];

// Math = {
//     max: function () {
//     }
// }

console.log(Math.max.apply(null, numbers));

// bind()
const user = {
  id: 1,
  city: "pune",
  name: "alaya",
  details() {
    console.log(this.city + " " + this.name);
  },
};

// user.details();
let display = user.details.bind(user);
display();

// Template strings  (``)
let strVal = `Hello
World`;

console.log(strVal);

let name = "Hello \n World";
console.log(name);

// variable & expression substituition
let first = "Alina";
let last = "Joe";
let age = 20;
let city = "Pune";

console.log("My name is " + first + " " + last + " living in " + city + " .");

console.log(`My name is ${first} ${last}, living in ${city}.`);
