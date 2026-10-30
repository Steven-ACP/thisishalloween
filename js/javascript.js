/** @format */

let askBtn = document.getElementById("add");
let text = document.getElementById("someThing");
let joke = document.getElementById("placeholder");
let punchline = document.getElementById("tingus");
// let para = document.createElement("p");
// let funnyJoke = document.getElementById("funnyJoker");
// let string = document.getElementById("funnierJoke");
let jokeList = [
  "What do you call a sick vampire? A COFFIN!",
  "Why didn't the skeleton go the Halloween party? Because they had NO BODY to go with!",
  "What do the skeleton say before they begin eating? BONE-appetite",
  "Who won the skeleton beauty contest? No body",
  "Why did the skeleton stay out in the snow all night? He was chillin' to the BONE! ",
];

askBtn.addEventListener("click", tellJoke);

function tellJoke() {
  joke.innerText = jokeList[Math.floor(Math.random() * jokeList.length)];

  if (joke.innerHTML == jokeList[0]) {
    ((punchline.innerHTML =
      "We hope you liked the joke! Click the button again to get a brand new original non-ai joke!"),
      "pingus",
      "vingus",
      "butt",
      "nutt");
  }
}

// const funnyJokeArray = [
//   "What do you call a sick vampire?",
//   "BMW",
//   "Ford",
//   "Mazda",
// ];
// console.log(funnyJokeArray[0]);
