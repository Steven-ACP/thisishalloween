/** @format */

let askBtn = document.getElementById("add");
let text = document.getElementById("someThing");
let para = document.createElement("p");
let funnyJoke = document.getElementById("funnyJoker");
let string = document.getElementById("funnierJoke");

askBtn.addEventListener("click", addList);

function addList() {
  para.innerText = "Coffin";
  document.body.appendChild(para);
}

const funnyJokeArray = [
  "What do you call a sick vampire?",
  "BMW",
  "Ford",
  "Mazda",
];
console.log(funnyJokeArray[0]);
