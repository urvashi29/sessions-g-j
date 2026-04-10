// variables
// var, let, const (ES6)
// datatypes: string, number, null, undefined, boolean (T or F)
//arrays, objects, function

// hoisting (decalaration is hoisted in js) (temporal dead zone)
x = 10; //intialization or assigning a value
console.log(x);
var x; //declaration

//global scope
var firstName = "alex";

function add() {
  //local scope
  var lastName = "alaya";
}

var y = 10;
{
  let y = 100;
  console.log(y); //100
}

console.log(y); //10

// Arithmetic Operator
console.log(10 + 20);
console.log(50 - 10);
console.log(10 * 2);
console.log(10 / 2); //return the quotient
console.log(10 % 2); //return remainder
console.log(2 ** 4); //power

let num = 10;
num++; //num = num + 1;
num--; //num = num - 1;

console.log(num);

num /= 2; //num = num + 2

// Assignment Operator (=)

// Comparison Operators (return boolean value)
const a = 10;
const b = "10";

console.log(a == b); //compare the value
console.log(a === b); //compare value & datatype (strict checking)
console.log(a != 10); //false
console.log(b !== 10); //strict checking
// >, <, >=, <=

// Logical Operators (|| or && or !)
console.log(a == b && a === b); //
console.log(a == b || a === b);
console.log(!(a == b));

let isLogged = true;
// isLogged && <p>{user data}</p>

// ternery operator ?:
isLogged ? console.log("user logged") : console.log("Login first");

// optional chaining (?.)
let user = {
  firstName: "alex",
  contact: {
    email: "admin@gmail.com",
  },
};

console.log(user.contact?.email);
console.log(user.location?.city);

let sample = null;
console.log(sample == null);

// nullish operator (??)
const result = sample ?? user;
console.log(result);

// string operator (+)
let str = "hello";
let strVal = "gigame";

console.log(str + strVal); //concatenate
console.log(str + 10);

console.log("20" + 20); //
console.log(20 + str + 20); //20hello20
console.log(20 + 20 + str); //
console.log(str + 20 + 20); //
console.log(10 + (78 / 10) * 20 + 45 - 20);

// Opeartor precedence (priority of opeartor )
// * /
// + -
// L -> R

// Implicit coersion (automatic type conversion)

console.log("10" / 2);
console.log("jdiejdoi" / 2); //NaN
console.log(str + 20 - 100); //

// "hidjj" -> alpha or non-numeric
// "980909" -> numeric
// "idj0kdok" -> alpha-numeric

// Rules
// check operator precendence
// check operand is string and + is present, concatenate
// if + is not present, then check type of string, if numeric then convert to number and solve it
// otherwise result is NaN

// Explicit coersion
//boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(parseInt("89.8")); //89

// number to string
let n = 20;
console.log(n.toString()); //"20"
console.log(n.toFixed(2)); //"20.00"

//string to number
console.log(Number("98090"));
console.log(Number("ijdok")); //
console.log(true.toString()); //"true"

console.log(true + false - 2);

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(true + false > 2);

console.log(true || false);

console.log(null || 1); //return the first truth value

console.log(null || 0 || 1); //

console.log(undefined || null | 0);
console.log(null && 5); //
console.log(1 && 2 && null && 3);

console.log(1 && 2 && 3); //3

// Array & String Methods
