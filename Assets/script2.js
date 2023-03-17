// created elements to be used on loading screen
var secondsRemaining = document.querySelector("#seconds");
var quizSection = document.querySelector("#quizSection");
var startButton = document.createElement("button");
var quizTitle = document.createElement("h1");
var loadingParagraph = document.createElement("p");
var questionTitle = document.createElement("h2");

// created elements to be used in the questions
var questionForm = document.createElement("form");
var answerOne = document.createElement("button");
answerOne.setAttribute("id", "choiceOne");
var answerTwo = document.createElement("button");
answerTwo.setAttribute("id", "choiceTwo");
var answerThree = document.createElement("button");
answerThree.setAttribute("id", "choiceThree");
var answerFour = document.createElement("button");
answerFour.setAttribute("id", "choiceFour");

// created elements to be used on the end screen
var result = document.createElement("h3");
var endScreen = document.createElement("div");
var quizComplete = document.createElement("h2");
var finalScore = document.createElement("p");
var scoreResult = document.createElement("p");
var initialsInput = document.createElement("input");
var submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");

// set global variables
var time = 60;
var score = 0;
var index = 0;

// created quiz as an array that holds each question and answers as objects
// each answer was also an array, and correct answer, a separate key value pair
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

// loaded the created loading screen elements, and set design
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
      // when time is up, the page will cease the question section
      // redirecting to the final score/enter initials section
      // clearInterval(timerInterval);
      enterInitials();
    }
  }, 1000);
};

// initiated the timer
// removed loading screen elements
// added design elements to
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

  nextQuestion();
};

var nextQuestion = function () {
  questionTitle.innerHTML = quiz[index].question;

  answerOne.textContent = quiz[index].answers[0];
  answerTwo.textContent = quiz[index].answers[1];
  answerThree.textContent = quiz[index].answers[2];
  answerFour.textContent = quiz[index].answers[3];

  if (userAnswer === quiz[index].correctAnswer) {
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
  index++;
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
