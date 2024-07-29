// Define questions in object. Key /value pairs can include image and text element (for the name of the thing).
// Needs three main DOM elements - question, answer 1, answer 2
// Return incorrect or correct
// Styling when returned?
// Play again when end of questions

"use strict";

let questions = [
  {
    name: "bic lighters",
    answer: "brat",
  },
  {
    name: "taylor swift",
    answer: "not brat",
  },
  {
    name: "strappy tops",
    answer: "brat",
  },
  {
    name: "stanley cups",
    answer: "not brat",
  },
  {
    name: "lime bikes",
    answer: "brat",
  },
  {
    name: "jenga",
    answer: "not brat",
  },
  {
    name: "prince william",
    answer: "not brat",
  },
  {
    name: "little keys",
    answer: "brat",
  },
  {
    name: "belgium",
    answer: "not brat",
  },
  {
    name: "rishi sunak",
    answer: "not brat",
  },
  {
    name: "wearable blankets",
    answer: "not brat",
  },
  {
    name: "spicy margs",
    answer: "brat",
  },
  {
    name: "little lines",
    answer: "brat",
  },
];

// document.querySelector("body").style.backgroundColor = "#ffffff";

const startPage = document.querySelector(".start-page");
const startButton = document.querySelector(".start-game");
const guessObj = document.querySelector(".guess-object");
const guessBrat = document.querySelector(".guess-brat");
const guessNotBrat = document.querySelector(".guess-notbrat");
const result = document.querySelector(".result");
const nextButton = document.querySelector(".next-question");
const tryAgain = document.querySelector(".try-again");
let currentAns = [];
let score = 0;

const gameStart = function () {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".scorebox").classList.remove("hidden");
  startPage.classList.toggle("hidden");
  guessObj.textContent = questions[0].name;
  guessObj.classList.remove("hidden");
  startButton.classList.add("hidden");
  guessBrat.classList.remove("hidden");
  guessNotBrat.classList.remove("hidden");
  currentAns.push(questions.shift());
};

const nextQ = function () {
  if (questions.length > 0) {
    setTimeout(nextQuestion, 1 * 1000);
  } else {
    result.classList.remove("hidden");
    result.textContent = `${score} out of ${currentAns.length}`;
    tryAgain.classList.remove("hidden");
  }
};

const rightAns = function () {
  score++;
  document.querySelector(".score").textContent = score.toString();
  document.querySelector("body").style.backgroundColor = "#8acf00";
  guessObj.textContent = "right";
  guessBrat.classList.add("hidden");
  guessNotBrat.classList.add("hidden");
  nextQ();
};

const nextAns = function () {
  if (questions.length > 0) {
    return questions[0].name;
  } else {
    return `You got ${score} out of ${currentAns.length} correct`;
  }
};

const resGuess = function () {
  guessObj.classList.remove("hidden");
  guessBrat.classList.remove("hidden");
  guessNotBrat.classList.remove("hidden");
};

const wrongAns = function () {
  document.querySelector("body").style.backgroundColor = "red";
  guessObj.textContent = "wrong";
  guessBrat.classList.add("hidden");
  guessNotBrat.classList.add("hidden");
  nextQ();
};

const nextQuestion = function () {
  resGuess();
  document.querySelector("body").style.backgroundColor = "white";
  result.classList.add("hidden");
  guessObj.textContent = nextAns();
  nextButton.classList.add("hidden");
  currentAns.unshift(questions.shift());
};

const restart = function () {
  resGuess();
  score = 0;
  document.querySelector(".score").textContent = score.toString();
  document.querySelector("body").style.backgroundColor = "white";
  questions = currentAns.splice(0, currentAns.length).reverse();
  guessObj.textContent = questions[0].name;
  tryAgain.classList.add("hidden");
  currentAns.push(questions.shift());
  result.classList.add("hidden");
};

guessBrat.addEventListener("click", function () {
  return currentAns[0].answer === "brat" ? rightAns() : wrongAns();
});

guessNotBrat.addEventListener("click", function () {
  return currentAns[0].answer === "not brat" ? rightAns() : wrongAns();
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
