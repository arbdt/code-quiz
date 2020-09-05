// link with html elements
var quizQuestion = document.getElementById("questionTitle");
var quizOptions = document.getElementById("answerArea");
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");

// quiz questions and answers
var quizQnArray = ["Q1: Text Here",
    "Q2",
    "Q3",
    "Q4",
    "Q5",];
var q1_answers = ["answer 1", "answer 2", "answer 3", "answer 4"];
var q2_answers = [];
var q3_answers = [];
var q4_answers = [];
var q5_answers = [];

// other variables
var playerStorage = window.localStorage;
var timeLeft = 75;
var interval;
var qnCorrect = false;
var isPlaying = true;

// reset to defaults
function restartQuiz(){
    clearInterval(); // clear any timers
    quizQuestion.textContent = "When you're ready to begin, click the start button."
    startButton.hidden = "false";
}
//restartQuiz();

// start quiz on button
startButton.onclick(playQuiz());

function playQuiz(){
    timerDisplay.textContent = timeLeft;
    //startButton.hidden = true;
    for (var i = 0; i < quizQnArray.length; i++){
        poseQuestion(i);
    }

}

function poseQuestion(qnNumber){
    quizQuestion.textContent = quizQnArray[qnNumber];
    var answerPool;
    if (qnNumber == 0){
        answerPool = q1_answers;
    }
    else if (qnNumber == 1){
        answerPool = q2_answers;
    }
    else if (qnNumber == 2){
        answerPool = q3_answers;
    }
    else if (qnNumber == 3){
        answerPool = q4_answers;
    }
    else if (qnNumber == 4){
        answerPool = q5_answers;
    }
    for (var i =0; i < answerPool.length; i++){
        var answerOption = document.createElement("button");
        answerOption.setAttribute("id", `option${i}`);
        answerOption.textContent = answerPool[i];
        quizOptions.appendChild(answerOption);
    }
}