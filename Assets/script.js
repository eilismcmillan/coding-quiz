var secondsRemaining = document.querySelector("#seconds");
var quizSection = document.querySelector("#quizSection");
var startButton = document.createElement("button");
var quizTitle = document.createElement("h1");
var loadingParagraph = document.createElement("p");
var questionTitle = document.createElement("h2");

var questionForm = document.createElement("form");
var answerOne = document.createElement("button");
answerOne.setAttribute("id", "choiceOne");
var answerTwo = document.createElement("button");
answerTwo.setAttribute("id", "choiceTwo");
var answerThree = document.createElement("button");
answerThree.setAttribute("id", "choiceThree");
var answerFour = document.createElement("button");
answerFour.setAttribute("id", "choiceFour");

var result = document.createElement("h3");
var endScreen = document.createElement("div");
var quizComplete = document.createElement("h2");
var finalScore = document.createElement("p");
var scoreResult = document.createElement("p");
var initialsInput = document.createElement("input");
var submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");

var time = 60;
var score = 0;

var quiz = [
  {
    question: "1. Which of the following IS NOT a primitive data type?",
    answers: ["a) string", "b) boolean", "c) object", "d) number"],
    correctAnswer: "c) object",
  },
  {
    question: "2. An array is enclosed within _____",
    answers: [
      "a) curly brackets",
      "b) quotation marks",
      "c) parentheses",
      "d) square brackets",
    ],
    correctAnswer: "d square brackets",
  },
  {
    question: "3. Inside which HTML element do you put the JavaScript?",
    answers: ["a) <script>", "b) <link>", "c) <meta>", "d) <div>"],
    correctAnswer: "a) <script>",
  },
  {
    question: "4. Which of the following operators represent strict equality",
    answers: ["a) !==", "b) ===", "c) ||", "d) =="],
    correctAnswer: "b) parentheses",
  },
  {
    question:
      "5. The condition in an if/else statement is enclosed within _____.",
    answers: [
      "a) quotes",
      "b) curly brackets",
      "c) parentheses",
      "d) square brackets",
    ],
    correctAnswer: "c) parentheses",
  },
];


var loadingPage = function () {
  quizTitle.textContent = "Coding Quiz Challenge";
  quizTitle.setAttribute("style", "font-size:2.5em;");
  quizSection.appendChild(quizTitle);

  loadingParagraph.textContent =
    "Try to answer the following code-related questions within the time limit. A wrong answer will deduct 10 seconds from the clock.";
  loadingParagraph.setAttribute("style", "font-size: 1.4em;");
  quizSection.appendChild(loadingParagraph);

  startButton.textContent = "START QUIZ";
  startButton.setAttribute(
    "style",
    "padding: 1em; font-size: 1.5em; font-weight: 600; border: 0.14em solid black; background-color: #E7A48B;"
  );
  quizSection.appendChild(startButton);
};


var timer = function () {
  var timerInterval = setInterval(function () {
    if (time >= 1) {
      time--;
      secondsRemaining.textContent = time;
    } else if (time === 0) {
      clearInterval(timerInterval);
      enterInitials();
    }
  }, 1000);
};

var quizQuestions = function () {
  timer();
  score = 0;
  quizTitle.remove();
  loadingParagraph.remove();
  startButton.remove();

  questionTitle.setAttribute("style", "font-size: 1.8em;");
  quizSection.appendChild(questionTitle);

  answerOne.setAttribute(
    "style",
    "background-color: #A4BF31; font-size: 1.3em; padding: 1em 20%; margin:1%; border: 0.1em solid black"
  );
  answerTwo.setAttribute(
    "style",
    "background-color: #A4BF31; font-size: 1.3em; padding: 1em 20%; margin:1%; border: 0.1em solid black"
  );
  answerThree.setAttribute(
    "style",
    "background-color: #A4BF31; font-size: 1.3em; padding: 1em 20%; margin:1%; border: 0.1em solid black"
  );
  answerFour.setAttribute(
    "style",
    "background-color: #A4BF31; font-size: 1.3em; padding: 1em 20%; margin:1%; border: 0.1em solid black"
  );

  questionForm.appendChild(answerOne);
  questionForm.appendChild(answerTwo);
  questionForm.appendChild(answerThree);
  questionForm.appendChild(answerFour);

  quizSection.appendChild(questionForm);

  questionOne();
};

var questionOne = function () {
  questionTitle.innerHTML = quiz[0].question;

  answerOne.textContent = quiz[0].answers[0];
  answerTwo.textContent = quiz[0].answers[1];
  answerThree.textContent = quiz[0].answers[2];
  answerFour.textContent = quiz[0].answers[3];

  var choiceOne = document.getElementById("choiceOne");
  var choiceOne = document.querySelector("#choiceOne");
  var choiceTwo = document.getElementById("choiceTwo");
  var choiceThree = document.getElementById("choiceThree");
  var choiceFour = document.getElementById("choiceFour");

  choiceOne.addEventListener("click", questionTwo);
  choiceTwo.addEventListener("click", questionTwo);
  choiceThree.addEventListener("click", questionTwo);
  choiceFour.addEventListener("click", questionTwo);
};

var questionTwo = function (event) {
  event.preventDefault();
  let userAnswer = event.currentTarget.textContent;
  // hard coding for now, set quiz index as a variable
  questionTitle.innerHTML = quiz[1].question;

  answerOne.textContent = quiz[1].answers[0];
  answerTwo.textContent = quiz[1].answers[1];
  answerThree.textContent = quiz[1].answers[2];
  answerFour.textContent = quiz[1].answers[3];

  var choiceOne = document.getElementById("choiceOne");
  var choiceTwo = document.getElementById("choiceTwo");
  var choiceThree = document.getElementById("choiceThree");
  var choiceFour = document.getElementById("choiceFour");

  choiceOne.addEventListener("click", questionThree);
  choiceTwo.addEventListener("click", questionThree);
  choiceThree.addEventListener("click", questionThree);
  choiceFour.addEventListener("click", questionThree);

  if (userAnswer === quiz[0].answers[2]) {
    score += 10;
    result.textContent = "Correct!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  } else {
    result.textContent = "Incorrect!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
    time -= 10;
  }
};

var questionThree = function (event) {
  event.preventDefault();
  let userAnswer = event.currentTarget.textContent;

  questionTitle.innerHTML = quiz[2].question;

  answerOne.textContent = quiz[2].answers[0];
  answerTwo.textContent = quiz[2].answers[1];
  answerThree.textContent = quiz[2].answers[2];
  answerFour.textContent = quiz[2].answers[3];

  if (userAnswer === quiz[1].answers[3]) {
    score += 10;
    result.textContent = "Correct!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  } else {
    result.textContent = "Incorrect!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
    time -= 10;
  }

  var choiceOne = document.getElementById("choiceOne");
  var choiceTwo = document.getElementById("choiceTwo");
  var choiceThree = document.getElementById("choiceThree");
  var choiceFour = document.getElementById("choiceFour");

  choiceOne.addEventListener("click", questionFour);
  choiceTwo.addEventListener("click", questionFour);
  choiceThree.addEventListener("click", questionFour);
  choiceFour.addEventListener("click", questionFour);
};

var questionFour = function (event) {
  event.preventDefault();
  let userAnswer = event.currentTarget.textContent;

  questionTitle.innerHTML = quiz[3].question;

  answerOne.textContent = quiz[3].answers[0];
  answerTwo.textContent = quiz[3].answers[1];
  answerThree.textContent = quiz[3].answers[2];
  answerFour.textContent = quiz[3].answers[3];

  if (userAnswer == quiz[2].answers[0]) {
    score += 10;
    result.textContent = "Correct!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  } else {
    result.textContent = "Incorrect!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
    time -= 10;
  }

  var choiceOne = document.getElementById("choiceOne");
  var choiceTwo = document.getElementById("choiceTwo");
  var choiceThree = document.getElementById("choiceThree");
  var choiceFour = document.getElementById("choiceFour");

  choiceOne.addEventListener("click", questionFive);
  choiceTwo.addEventListener("click", questionFive);
  choiceThree.addEventListener("click", questionFive);
  choiceFour.addEventListener("click", questionFive);
};

var questionFive = function (event) {
  event.preventDefault();
  let userAnswer = event.currentTarget.textContent;

  questionTitle.innerHTML = quiz[4].question;

  answerOne.textContent = quiz[4].answers[0];
  answerTwo.textContent = quiz[4].answers[1];
  answerThree.textContent = quiz[4].answers[2];
  answerFour.textContent = quiz[4].answers[3];

  if (userAnswer == quiz[3].answers[1]) {
    score += 10;
    result.textContent = "Correct!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  } else {
    result.textContent = "Incorrect!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
    time -= 10;
  }

  var choiceOne = document.getElementById("choiceOne");
  var choiceTwo = document.getElementById("choiceTwo");
  var choiceThree = document.getElementById("choiceThree");
  var choiceFour = document.getElementById("choiceFour");

  choiceOne.addEventListener("click", enterInitials);
  choiceTwo.addEventListener("click", enterInitials);
  choiceThree.addEventListener("click", enterInitials);
  choiceFour.addEventListener("click", enterInitials);
};

var checkLastAnswer = function (event) {
  let userAnswer = event.currentTarget.textContent;
  if (userAnswer === quiz[4].answers[2]) {
    score += 10;
    result.textContent = "Correct!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  } else {
    result.textContent = "Incorrect!";
    result.setAttribute(
      "style",
      "padding-top: 0.5em; border-top: 0.08em solid black"
    );
    quizSection.append(result);
  }
};

var enterInitials = function (event) {
  quizSection.innerHTML = "";
  checkLastAnswer(event, result);
  quizComplete.textContent = "Quiz Complete!";
  quizComplete.setAttribute("style", "font-size:2.1em; margin-top: 0");
  finalScore.textContent = "Your final score is:";
  finalScore.setAttribute("style", "font-size:1.4em;");
  scoreResult.textContent = score;
  scoreResult.setAttribute(
    "style",
    "font-size:3em; font-weight: 700; color: #289D8F; margin: 0 "
  );
  initialsInput.setAttribute("placeholder", "enter initials");
  initialsInput.setAttribute(
    "style",
    "padding: 0.6em; border: 0.1em solid black; margin: 1em"
  );
  submitButton.textContent = "Submit";
  submitButton.setAttribute(
    "style",
    "padding: 0.3em 1em; margin-left: 0.6em; font-size: 1.3em; font-weight: 300; border: 0.07em solid black; background-color: #E7A48B;"
  );
  endScreen.append(
    quizComplete,
    finalScore,
    scoreResult,
    initialsInput,
    submitButton,
    result
  );
  quizSection.append(endScreen);
  submitButton.addEventListener("click", saveHighscores);
};

var saveHighscores = function () {
  var initials = initialsInput.value.toUpperCase();
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var newScore = {
    score: score,
    initials: initials,
  };
  highscores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.href = "scoreboard.html";
};

loadingPage();

startButton.addEventListener("click", quizQuestions);

// TODO: FIX TIMER
// TODO: FIX BUTTON DESIGN
