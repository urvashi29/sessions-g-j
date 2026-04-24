// web storages (client storage)

// class
//base
class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

const empOne = new Employee(1, "Alex", 90999);
console.log(empOne);

console.log(Employee.constructor);

//child/derived
class Programmer extends Employee {
  constructor(id, name, salary, language) {
    super(id, name, salary);
    this.languag;
  }
  details() {
    console.log();
  }
}

const prog = new Programmer(2, "Alina", 90000, "js");
console.log(prog);

// Spread(...): arrays & object
let obj = {
  a: 10,
  b: 20,
};

// const objTwo = obj;
// objTwo.a = 100;

const objTwo = { ...obj, a: 100, z: 200 };
console.log(obj, objTwo);

let arrOne = [10, 2, 100];
let arrTwo = [...arrOne, 200, 500];
console.log(arrOne, arrTwo);

// Rest Operator(...): get indefinite number of arguments in of arr
function add() {
  console.log(arguments);
}

add(10, 2, 3, 4, 5, 20, 100, 200);

sum = (...arr) => {
  // console.log(arguments);//get error
  console.log(arr);
};

sum(10, 2, 3, 4, 5, 20, 100, 200);

// de-structuring of arrays & objects
let person = {
  id: 10,
  isVerified: true,
};

const { id, isVerified } = person;
console.log(id, isVerified);

// property shorthand

let arr = [10, 2, 3, 30, 200];
const [a, b, , ...d] = arr;
console.log(a, b, d);

// re-structuring of object & arrays
let first = "alex";
let last = "joe";
let city = "banglore";

const user = {
  first,
  last,
  city,
};
console.log(user);

const newArr = [a, b];
console.log(newArr);

// Symbol: primitive datatype
const idOne = Symbol("user");
console.log(idOne.description);
console.log(typeof idOne);

const idTwo = Symbol("user");
console.log(idOne == idTwo);

console.log("user" == "user");

const emp = {
  name: "Alice",
  [idOne]: 12345,
  [idTwo]: 900,
};

console.log(emp);
console.log(emp.name);
console.log(emp["name"]);

console.log(emp[idOne]);
console.log(emp[idTwo]);

// Debugging
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// JSON: javscript object notion
console.log(arr);

let jsonString = JSON.stringify(arr);
console.log(jsonString);

console.log(JSON.parse(jsonString));

console.log(JSON.stringify(user));
