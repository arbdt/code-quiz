// link with html elements
var quizQuestion = document.getElementById("questionTitle");
var quizOptions = document.getElementById("answerOptions");
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");

// quiz questions and answers
var quizQnArray = ["Q1: Text Here",
    "Q2",
    "Q3",
    "Q4",
    "Q5",];
var q1_answers = [];
var q2_answers = [];
var q3_answers = [];
var q4_answers = [];
var q5_answers = [];

// other variables
var timeLeft = 120;
var interval;

// reset to defaults
function restartQuiz(){
    clearInterval(); // clear any timers
    quizQuestion.textContent = "When you're ready to begin, click the start button."
    startButton.hidden = "false";
}
//restartQuiz();

// start quiz on button
startButton.addEventListener("click", playQuiz());

function playQuiz(){
    //startButton.hidden = true;
    quizQuestion.textContent = quizQnArray[0];
    timerDisplay.textContent = timeLeft;
}