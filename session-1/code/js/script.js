// variables
// Primitive: number, string, null, undefined, boolean
// global scope
var a = 10; //number
var b = 10.58; //number

console.log(typeof a, typeof b);

// datatypes
var str = "79809jdokdd";
console.log(typeof str); //string

var empty = "s";
console.log(typeof str); //string

var isVerified = true;
console.log(typeof isVerified);

// initialising and declaring
var s = "90"; //ideal

var d;
console.log(d); //undefined
console.log(typeof d); //undefined

d = 100;
console.log(d);

var x = null;
console.log(x); //null
console.log(typeof null); //object

// Non-primitive: object, arrays, function
// object: key value pair
// object literal
var person = {
  firstName: "alina",
  age: 90,
  contact: {
    contactNumber: 90909090,
    emailAddress: "admin@gmail.com",
  },
  professional_details: {
    salary: 9090900,
  },
};

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.contact.emailAddress);

console.log(typeof person); //object

// var product = {
//   productId: 10,
//   productName: "Cooker",
//   productPrice: {

//   },
//  productImg: ""
// }

// arrays
// index starts from 0
var num = [10, 2, 3, 29];
var color = ["pink", "purple", "green", "orange"];
var mix = ["89", "idhcj", null, undefined, {}, []];

console.log(num);
console.log(typeof num); //object

console.log(Array.isArray(num)); //to verify

console.log(x == null);

// nullish operator (ES2020)
const result = x ?? "hello";
console.log(result);

add();

//function declaration
function add() {
  //local scope
  var sample = "hello";
  console.log(sample);
}

// add();

// console.log(sample);//give error

// ES6 (2015)
// let:
// 1. let is used to declare a variable with block scope (for, if, {})
var z = 100;
{
  let z = 10;
  z = 200; //re-assign a value
  console.log(z); //10
}
console.log(z); //100

// 2. re-declare with same name not allowed
// let z = 100;
// console.log(z);//give error

// 3. hoisting (decalaration is hoisted) (temporal dead zone)
// lastName = "joe";//initializing
// console.log(lastName);
// let lastName;//declaration

// const (reference should be constant)
// 1. let is used to declare a variable with block scope
var name = "alex";
{
  const name = "alaya";
  // name = "harry";//re-assigning is not allowed
  console.log(name);
}

console.log(name);

const arr = [10, 2, 3, 4];
arr[0] = 100;
console.log(arr);

// 2. re-declare with same name not allowed

// 3. hoisting (decalaration is hoisted) (temporal dead zone)

// hoisting (decalaration is hoisted, not initialization)
lastName = "joe"; //initializing
var lastName;
console.log(lastName); //declaration

//output
// var x = 10;
// {
//   console.log(x);//give error
//   let x = 100;
//   console.log(x);
// }

// console.log(x);
