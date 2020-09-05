// link with html elements
var quizQuestion = document.getElementById("questionTitle");
var quizOptions = document.getElementById("answerArea");
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");

// quiz questions and answers
var quizQnArray = ["Q1: Lorem Ipsum?",
    "Q2: Dolor Sit?",
    "Q3: Amet Consectetur?",
    "Q4: Adipisicing Elit?",
    "Q5: Sed Do?",];
var q1_answers = ["It", "Was", "The", "Worst"];
var q2_answers = ["Of", "Times", "It", "Was"];
var q3_answers = ["The", "Winter", "Of", "Our"];
var q4_answers = ["Disco", "Tent", "C", "D"];
var q5_answers = ["E", "F", "G", "H"];

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
startButton.addEventListener("click", playQuiz());

function playQuiz(){
    isPlaying = true; // set playing status true
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
        var answerOption = document.createElement("a");
        answerOption.setAttribute("id", `option${i}`);
        answerOption.setAttribute("href", "#");
        answerOption.textContent = answerPool[i];
        quizOptions.children[i].appendChild(answerOption);
    }
}

// LOGICAL FLOW: 
// Start Quiz -> start timer (every 1000ms, timer -= 1 until 0 OR !playing)
// SET Q1 Qn and Q1 answers to display on HTML 
// GET answer clicked -> decide if correct OR !correct
// IF !correct -> timer penalty
// SET Q2 Qn and Q2 answers to display
// repeat until time = 0 OR !playing (finished)
// Save Player {Name: [entry], Score: [time-remaining] to LocalState}