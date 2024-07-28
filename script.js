// Define questions in object. Key /value pairs can include image and text element (for the name of the thing).
// Needs three main DOM elements - question, answer 1, answer 2
// Return incorrect or correct
// Styling when returned?
// Play again when end of questions

"use strict";

let questions = [
  {
    name: "bic lighter",
    answer: "brat",
  },
  {
    name: "taylor swift",
    answer: "not brat",
  },
  {
    name: "strappy top",
    answer: "brat",
  },
  {
    name: "a stanley cup",
    answer: "not brat",
  },
  {
    name: "a lime bike",
    answer: "brat",
  },
  {
    name: "a cheeseburger",
    answer: "brat",
  },
  {
    name: "a little key",
    answer: "brat",
  },
  {
    name: "rishi sunak",
    answer: "not brat",
  },
  {
    name: "elon musk",
    answer: "not brat",
  },
  {
    name: "a spicy marg",
    answer: "brat",
  },
  {
    name: "a little line",
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
let countQ = 0;
let currentAns = [];
let score = 0;

const gameStart = function () {
  document.querySelector("body").style.backgroundColor = "white";
  startPage.style.display = "none";
  guessObj.textContent = questions[0].name;
  guessObj.style.display = "block";
  startButton.style.display = "none";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
  currentAns.push(questions.shift());
};

const rightAns = function () {
  score++;
  document.querySelector(".score").textContent = score.toString();
  document.querySelector("body").style.backgroundColor = "#8acf00";
  guessObj.textContent = "correct answer";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  if (questions.length > 0) {
    nextButton.style.display = "block";
  } else {
    result.style.display = "block";
    result.textContent = `You got ${score} out of ${currentAns.length} correct`;
    tryAgain.style.display = "block";
  }
};

const nextAns = function () {
  if (questions.length > 0) {
    return questions[0].name;
  } else {
    return `You got ${score} out of ${currentAns.length} correct`;
  }
};

const wrongAns = function () {
  document.querySelector("body").style.backgroundColor = "red";
  guessObj.textContent = "wrong answer";
  guessBrat.style.display = "none";
  guessNotBrat.style.display = "none";
  if (questions.length > 0) {
    nextButton.style.display = "flex";
  } else {
    result.style.display = "block";
    result.textContent = `You got ${score} out of ${currentAns.length} correct`;
    tryAgain.style.display = "block";
  }
};

const nextQuestion = function () {
  document.querySelector("body").style.backgroundColor = "white";
  result.style.display = "none";
  guessObj.textContent = nextAns();
  guessObj.style.display = "block";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
  nextButton.style.display = "none";
  //   console.log(currentAns);
  //   console.log(questions);
  currentAns.unshift(questions.shift());
};

const restart = function () {
  score = 0;
  document.querySelector(".score").textContent = score.toString();
  document.querySelector("body").style.backgroundColor = "white";
  questions = currentAns.splice(0, currentAns.length).reverse();
  guessObj.textContent = questions[0].name;
  tryAgain.style.display = "none";
  result.style.display = "none";
  guessObj.style.display = "block";
  guessBrat.style.display = "inline-block";
  guessNotBrat.style.display = "inline-block";
  currentAns.push(questions.shift());
};

guessBrat.addEventListener("click", function () {
  return currentAns[0].answer === "brat" ? rightAns() : wrongAns();
});
// if (currentAns.answer === "brat") {
//     rightAns();
// } else {
//     wrongAns();
// });

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
