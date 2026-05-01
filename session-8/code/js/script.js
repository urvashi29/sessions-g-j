// Event propogation

// class
let classes = document.querySelector("#sample").classList;
console.log(classes);
// classes.add("card");
// classes.remove("card");
classes.toggle("card");

// creation DOM node
let div = document.createElement("div"); //<div></div>
console.log(div);
div.textContent = "Hi!, we are learning DOM Manipulation";
div.style.backgroundColor = "pink";
document.body.append(div);

let img = document.createElement("img");
// img.src = "";
img.setAttribute(
  "src",
  "https://img.magnific.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg",
);
img.setAttribute("alt", "pattern");
img.style.height = "100px";
document.body.append(img);

let list = document.querySelector("#items");
const newListItem = document.createElement("li");
newListItem.textContent = "ReactJS";

let firstListItem = list.firstChild; //
console.log(firstListItem);

list.insertBefore(newListItem, firstListItem);

// capture User Input
function userInputCapture() {
  let age = document.querySelector("#age").value;
  alert(age);
}

function mouseOver() {
  alert("Mouse Hover!");
}

// addEventListener
document.querySelector("#btn").addEventListener("click", function () {
  console.log("button clicked!");
  console.log(this); //
});

document.querySelector("#hobby").addEventListener("keyup", function () {
  // e is a event, automatically created when event is fired
  console.log(e);
  console.log(e.target.value);
  console.log(this.value);
});

// let person = {
//     first: "alina",
// }

// map (key value pair)
const myMap = new Map();

myMap.set("firstName", "alex");
myMap.set(1, "some numeric value");
myMap.set({ isVerified: true }, "okay");

console.log(myMap);
console.log(myMap.get(1));
console.log(myMap.has(1));

// set (unique value)
const unique = new Set([10, 2, 4, 5, 2, 5]);
unique.add(100);
unique.add(200);

console.log(unique);
console.log(unique.size);
console.log(unique.has(5));
