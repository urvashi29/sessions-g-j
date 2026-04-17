// IIFE / self-invoking function

// let counter = 0;//global

function inc() {
  let counter = 0; //local
  counter += 1; //counter = counter + 1
  return counter;
}

console.log(inc()); //1
console.log(inc()); //1
console.log(inc()); //1

//  console.log(counter); //

// closure function
function increment() {
  let count = 0; //lexical scope

  return function () {
    count += 1;
    console.log(count);
  };
}

let countInc = increment();
countInc();
countInc();
countInc();

function entertainmentApp() {
  let user = "Guest";

  return (type) => {
    user = type;
    console.log(user);
  };
}

let userType = entertainmentApp();
//user payment
userType("Paid");

function bankApp() {
  let balance = 909009;
  let pressed = true;
  function deposit() {}

  function withdraw() {}

  return pressed ? deposit : withdraw;
}

//debouncing & throttling

// Array Methods ES6 : map(), filter(), forEach(), some(), every(), reduce(),find()
const num = [10, 2, 3, 4, 100, 20, 21];

// for(let i = 0;i < num.length;i++) {
// }

// map: iterate over an array. it also returns a new array
let mapResult = num.map((ele, index, arr) => {
  console.log(ele, index, arr);
  return ele * 2;
});

console.log(mapResult); // [20, 4, 6, 8, 200, 40]

//forEach
num.forEach((e, i, arr) => {
  console.log(e * 2);
});

//filter: return all array elements that pass the condition
let filterResult = num.filter((e) => e % 2 == 0);

console.log(filterResult);

//find(): return 1 element that will pass the condition
let findResult = num.find((ele) => {
  return ele % 2 == 0;
});

console.log(findResult);

//some(): if any of the elements pass the test, it will return true
let someResult = num.some((ele) => {
  return ele % 2 == 0;
});

console.log(someResult);

//every(): if all of the elements pass the test, it will return true
let everyResult = num.every((ele) => {
  return ele % 2 == 0;
});

console.log(everyResult);

// reduce(): reducing an array to a single value
let ages = [10, 2, 3, 4, 5, 20];

let reduceResult = ages.reduce((total, e) => {
  console.log(total); //0 10 12 15 19 24
  console.log(e); //10 2 3 4 5 20
  return total + e;
}, 0);

console.log(reduceResult);

// OOPS

// [[Prototype]] : inbuilt property of object
//object function constructor
function University(id, firstName, age) {
  this.id = id;
  this.firstName = firstName;
  this.age = age;
}

University.prototype.details = () => {};

// creating instance or object
const studentOne = new University(1, "Alina", 16);
console.log(studentOne);

const studentTwo = new University(2, "Alaya", 17);
console.log(studentTwo);

Array.prototype.myMap = () => {};

// Array.isArray();

// const person = {
//     id: "",
//     function () {

//     }
// }

console.log(num);

// let employees = [
//   {
//     id: 1,
//     name: "",
//   },
//   {
//     id: 1,
//     name: "",
//   },
// ];
