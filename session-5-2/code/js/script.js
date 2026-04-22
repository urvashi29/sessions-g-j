// ES6 features: class
// Debugging

// Prototype
const str = new String("hello");
console.log(str);

const num = new Number(90);
console.log(num);

Array.prototype.firstEle = function () {
  return this[0];
};

let arr = [10, 29, 100, 200];
console.log(arr);
console.log(arr.firstEle());

// Prototype
//object function constructor
function Employee(id, firstName, salary) {
  this.id = id;
  this.firstName = firstName;
  this.salary = salary;
}

// instance members: id, firstName, salary
// prototype member: nationality

Employee.prototype.nationality = "Indian";

const emp = new Employee(1, "alaya", 898998);
console.log(emp);
console.log(emp.nationality);

const empTwo = new Employee(4, "harry", 998090);
console.log(empTwo);

// Prototypal inheritance
function Programmer(id, firstName, salary, language) {
  Employee.call(this, id, firstName, salary);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manually set the constructor
Programmer.prototype.constructor = Programmer;

const prog = new Programmer(2, "Alex", 86768, "JavaScript");
console.log(prog);

console.log(Programmer.constructor);

// call(), apply
const person = {
  fullName: function (countryOne, countryTwo) {
    console.log(
      this.firstName + " " + this.age + " " + countryOne + " " + countryTwo,
    );
  },
};

const personData = {
  firstName: "John",
  age: 24,
};

person.fullName.call(personData, "India", "Canada");

// apply()
person.fullName.apply(personData, ["India", "Canada"]);

// Math = {
//     max: function (a, b, c , d, e) {}
// }

console.log(Math.max(10, 2, 3, 4, 100));

let numbers = [10, 2, 3, 4, 5, 5, 20];

console.log(Math.max.apply("null", numbers));

// bind()
const user = {
  id: 1,
  age: 20,
  salary: 90900,
  details: function () {
    console.log(this.age + " " + this.salary);
  },
};

const fun = user.details.bind(user);
fun();

// ES6 features- 2015
// let, const
// Arrow function
// Symbol
// class
// Spread, Rest Operator
// Promises -> async
// for...in / for...of
// Template strings

// Template strings (``)
let strVal = `Hello
World`;
console.log(strVal);

let name = "Hello \n World";
console.log(name);

// variable & expression substitution
let first = "alex";
let last = "joe";
let city = "pune";

console.log("My name is " + first + " " + last + " living in " + city + ".");

console.log(`My name is ${first} ${last} living in ${city}.`);


