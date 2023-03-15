var secondsRemaining = document.querySelector("#seconds");
var quizSection = document.querySelector("#quizSection");
var startButton = document.createElement("button");
var quizTitle = document.createElement("h1");
var loadingParagraph = document.createElement("p");
var questionTitle = document.createElement("h2");
var questionForm = document.createElement("form");

var answerOne = document.createElement("input");
var answerTwo = document.createElement("input");
var answerThree = document.createElement("input");
var answerFour = document.createElement("input");

//var answerUl = document.createElement("ul");
//var answersLi = document.createElement("li");
//var answerButtons = document.createElement("button");
//answersLi = answersLi.appendChild(answerButtons);
//answerUl = answerUl.appendChild(answersLi);

var score = 0

var quiz = [
  {
    question: "Which of the following IS NOT a primitive data type?",
    answers: ["a) string", "b) boolean", "c) object", "d) number"],
    correctAnswer: "c) object",
  },
  {
    question: "An array is enclosed within _____",
    answers: [
      "a) curly brackets",
      "b) quotation marks",
      "c) parentheses",
      "d) square brackets",
    ],
    correctAnswer: "d square brackets",
  },
  {
    question: "Inside which HTML element do you put the JavaScript?",
    answers: ["a) <script>", "b) <link>", "c) <meta>", "d) <div>"],
    correctAnswer: "a) <script>",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _____.",
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
  var time = 60;
  var timerInterval = setInterval(function () {
    if (time >= 1) {
      time--;
      secondsRemaining.textContent = time;
    } else if (time === 0) {
      clearInterval(timerInterval);
      //end function
    }
  }, 1000);
};

var quizQuestions = function (event) {
  timer();
  quizTitle.remove();
  loadingParagraph.remove();
  startButton.remove();
  var score = 0;

  for (let i = 0; i < quiz.length; i++) {
    questionTitle.innerHTML = quiz[i].question;
    questionTitle.setAttribute("style", "font-size: 1.7em;");
    quizSection.appendChild(questionTitle);

    answerOne.setAttribute("value", quiz[i].answers[0])
    answerTwo.setAttribute("value", quiz[i].answers[1])
    answerThree.setAttribute("value", quiz[i].answers[2])
    answerFour.setAttribute("value", quiz[i].answers[3])

    answerOne.setAttribute("style", "background-color: #A4BF31; font-size: 1.3em; padding: 2% 10%; margin:1%; border: 0.1em solid black")
    answerTwo.setAttribute("style", "background-color: #A4BF31; font-size: 1.3em; padding: 2% 10%; margin:1%; border: 0.1em solid black")
    answerThree.setAttribute("style", "background-color: #A4BF31; font-size: 1.3em; padding: 2% 10%; margin:1%; border: 0.1em solid black")
    answerFour.setAttribute("style", "background-color: #A4BF31; font-size: 1.3em; padding: 2% 10%; margin:1%; border: 0.1em solid black")

    questionForm.appendChild(answerOne)
    questionForm.appendChild(answerTwo)
    questionForm.appendChild(answerThree)
    questionForm.appendChild(answerFour)

    quizSection.appendChild(questionForm)

    

  
  }
};








//    for (let i = 0; i < quiz[i].answers.length; i++) {
//      var answerChoices = quiz[i].answers[i];
//      console.log(answerChoices);
//      answerButtons.innerHTML = answerChoices;
//      answerButtons.setAttribute("style","background-color:")
//      answersOps = answersLi.appendChild(answerButtons);
//      answerList = answerUl.appendChild(answersOps);
//      quizSection.appendChild(answerList);

loadingPage();

startButton.addEventListener("click", quizQuestions);

// var quizQuestions = function(event) {
//    event.preventDefault()

//    var answerList =
//}
