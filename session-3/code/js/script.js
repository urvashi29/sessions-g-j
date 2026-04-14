// closure function
// Array Methods ES6

// Array methods
let arr = [10, 2, 30, 40, 50];
console.log(arr[0]);
console.log(arr.length);

// to add & remove
arr.push(100, 200); //add new element at the end
console.log(arr);

arr.pop(); //remove new element at the end
arr.pop();
console.log(arr);

arr.unshift(200, 300); //add at the beginning
console.log(arr);

arr.shift(); //remove from the start
console.log(arr);

console.log(arr.reverse());

arr.splice(2, 2, 100, 500); //start of the index, count of numbers to be deleted, new elements to be added
console.log(arr);

// convert arr to string
console.log(arr.join(","));

// conver str to arr
let str = "h-el-lo";
console.log(str.split("-"));

let color = ["pink", "green", "red", "blue"];
color.sort();
console.log(color);

console.log(color.includes("green"));

// String Methods (immutable)
//index/position start from 0
let strVal =
  " frontend-development: html, css, js are the basic magic trio of frontend ";
console.log(strVal.length);

console.log(strVal.search("frontend")); //return the position/index of first charater of frontend word
// return -1 if not found

console.log(strVal.indexOf("frontend", 10)); //start searching for "frontend" after 10th index
console.log(strVal.includes("html"));
console.log(strVal.slice(10, 35)); //return all the string from 10th till 34th index

// toUpperCase()
// toLowerCase()
console.log(strVal.trim());
console.log(strVal.charAt(6));

// "URVSHI.singla@gmail.com   ".toLowerCase().trim() === "urvshi.singla@gmail.com".toLowerCase().trim()

console.log(add(20, 40));

// function declaration
// pure function(same input -> same output)
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);

// callback function: a function passed as an argument to another function
// Application: Timing Events, DOM Manipulation, Array ES6 methods, Async programming
function sum(a, b, fun) {
  let r = a + b;
  fun(r); //callback is called
}

sum(10, 20, function (result) {
  console.log(result);
});

// high ordered function: any function taking another function as a arg or return a function is a hoc
// sum - HOF

// function expression
// getName();//give error

var getName = function () {
  console.log("Name is alex!");
};

console.log(typeof getName); //function
getName();

// first class function

// this keyword
console.log(this); //global object - window

function addToCart() {
  console.log(this); //owner object of function
}

addToCart();

let person = {
  firstName: "Alaya",
  details: function () {
    console.log(this);
  },
  detail: () => {
    console.log(this); //window
  },
};

person.details();
person.detail();

// arrow function/ fat arrow (ES6)
// 1. syntax
// 2. return
// 3. this

function subtract() {
  return 100 - 50;
}

console.log(subtract());

// multiple = () => {
//   return 10 * 2;
// };

// same as
multiple = () => 10 * 2;
console.log(multiple());

// impure function
let x = 20;
function sub(a, b) {
  console.log(a - b + Math.random() + x);
}

sub(100, 40);

