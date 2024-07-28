// Define questions in object. Key /value pairs can include image and text element (for the name of the thing).
// Needs three main DOM elements - question, answer 1, answer 2
// Return incorrect or correct
// Styling when returned?
// Play again when end of questions

"use strict";

const questions = [
  {
    name: "bic lighter",
  },
  {
    name: "strappy top",
  },
  {
    name: "donald trump",
  },
  {
    name: "a little key",
  },
  {
    name: "a little line",
  },
];

document.querySelector("body").style.backgroundColor = "#ffffff";

const startPage = document.querySelector(".start-page");
const startButton = document.querySelector(".start-game");
const guessObj = document.querySelector(".guess-object");
const guessBrat = document.querySelector(".guess-brat");
const guessNotBrat = document.querySelector(".guess-notbrat");
const result = document.querySelector(".result");
const nextButton = document.querySelector(".next-question");
const tryAgain = document.querySelector(".try-again");
let countQ = 0;

const gameStart = function () {
  document.querySelector("body").style.backgroundColor = "white";
  startPage.style.display = "none";
  guessObj.textContent = questions[0].name;
  guessObj.style.display = "block";
  startButton.style.display = "none";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
};

const rightAns = function () {
  document.querySelector("body").style.backgroundColor = "#8acf00";
  guessObj.style.display = "none";
  result.style.display = "block";
  result.textContent = "correct answer!";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  //   tryAgain.style.display = "block";
  nextButton.style.display = "block";
};

const nextAns = function () {
  if (countQ < questions.length - 1) {
    countQ++;
    return questions[countQ].name;
  } else {
    countQ = 0;
    return questions[0].name;
  }
};

const wrongAns = function () {
  document.querySelector("body").style.backgroundColor = "red";
  guessObj.style.display = "none";
  result.style.display = "block";
  result.textContent = "wrong answer";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  //   tryAgain.style.display = "block";
  nextButton.style.display = "block";
};

const nextQuestion = function () {
  document.querySelector("body").style.backgroundColor = "white";
  result.style.display = "none";
  guessObj.textContent = nextAns();
  guessObj.style.display = "block";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
  nextButton.style.display = "none";
};

const restart = function () {
  document.querySelector("body").style.backgroundColor = "white";
  guessObj.textContent = questions.item1.name;
  tryAgain.style.display = "none";
  result.style.display = "none";
  guessObj.style.display = "block";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
};

guessBrat.addEventListener("click", function () {
  rightAns();
});

guessNotBrat.addEventListener("click", function () {
  wrongAns();
});

tryAgain.addEventListener("click", function () {
  restart();
});

nextButton.addEventListener("click", function () {
  nextQuestion();
});

startButton.addEventListener("click", function () {
  gameStart();
});
