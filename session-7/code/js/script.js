// class
// creation DOM node
// capture User Input

// web storages (client storage) (2014)
// Local storage
localStorage.setItem("firstName", "Alex");
localStorage.setItem("age", 20);
localStorage.setItem(
  "emp",
  JSON.stringify({ id: 1, isVerified: true, city: "Banglore" }),
);

// retreive data
console.log(JSON.parse(localStorage.getItem("emp")));

// localStorage.clear();
localStorage.removeItem("emp");

// session storage
window.sessionStorage.setItem("lastName", "joe");
sessionStorage.setItem("nums", JSON.stringify([10, 2, 3, 30, 50, 60]));

console.log(JSON.parse(sessionStorage.getItem("nums")));
// sessionStorage.clear();
sessionStorage.removeItem("lastName");

// cookie
document.cookie =
  "username=Alina; expires=Thu, 30 Apr 2026 12:00:00 UTC; path=; secure=true";

let x = document.cookie;
console.log(x);

// sepcify the expiry date
document.cookie =
  "username=Alina; expires=Thu, 30 Apr 2026 12:00:00 UTC; path=; secure=true";

// DOM selectors
console.log(document.getElementById("sample")); //<p></p>
console.log(typeof document.getElementById("sample"));
console.log(document.getElementById("sample").textContent);

document.getElementById("sample").textContent = 12;

let collection = document.getElementsByClassName("item");
console.log(collection.length);

for (let i = 0; i < collection.length; i++) {
  console.log(collection[i].textContent);
}

// document.getElementsByTagName("p")
// document.getElementsByName("age")

// querySelector(css selector: pseudo class, elements, attribute, basic selector, combinators)
// document.querySelector("#text").textContent = 1234;
console.log(document.querySelector(".item"));
console.log(document.querySelectorAll(".item"));

console.log(document.querySelector("#items").textContent); //selecting text from element content
console.log(document.querySelector("#items").innerHTML); //complete element content is selected

document.querySelector("#text").innerHTML = "<p>Hello</p> <p>World</p>";

document.querySelector("#text").style.backgroundColor = "orange";

document.querySelector("#img").src = "";
