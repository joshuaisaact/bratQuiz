// Define questions in object. Key /value pairs can include image and text element (for the name of the thing).
// Needs three main DOM elements - question, answer 1, answer 2
// Return incorrect or correct
// Styling when returned?
// Play again when end of questions

"use strict";

const questions = {
  item1: {
    name: "bic lighter",
  },
  item2: {
    name: "strappy top",
  },
  item3: {
    name: "donald trump",
  },
};

document.querySelector("body").style.backgroundColor = "#ffffff";

const guessObj = document.querySelector(".guess-object");
const guessBrat = document.querySelector(".guess-brat");
const guessNotBrat = document.querySelector(".guess-notbrat");
const result = document.querySelector(".result");
const tryAgain = document.querySelector(".try-again");

const rightAns = function () {
  document.querySelector("body").style.backgroundColor = "#8acf00";
  guessObj.style.display = "none";
  result.style.display = "block";
  result.textContent = "correct answer!";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  tryAgain.textContent = "try again?";
  tryAgain.style.display = "block";
};

const wrongAns = function () {
  document.querySelector("body").style.backgroundColor = "red";
  guessObj.style.display = "none";
  result.style.display = "block";
  result.textContent = "wrong answer";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  tryAgain.textContent = "try again?";
  tryAgain.style.display = "block";
};
// Display result and correct answer
// Hide guess buttons
// Display button to try again
// console.log(guessBrat);

// Logic when game starts

guessObj.textContent = questions.item1.name;

guessBrat.addEventListener("click", function () {
  rightAns();
});
guessNotBrat.addEventListener("click", function () {
  wrongAns();
});
