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
var playerStorage = window.localStorage; // storage of scores
var timeLeft = 75; // timer maximum and remaining
var interval; // refresh each second
var qnCorrect = false; // for scoring of each question
var isPlaying = true; // is quiz running
var numQuestion = 1; // track current question

// start quiz on button
startButton.addEventListener("click", playQuiz);

function playQuiz(){
    event.preventDefault(); //prevent button from refreshing form and page
    console.log("now playing");
    isPlaying = true; // set playing status true
    timeLeft= 75; //set max time remaining to begin
    timerDisplay.textContent = timeLeft; // display time remaining
    interval = setInterval(function(){ // count each second
        timeLeft -= 1;
        timerDisplay.textContent = timeLeft; // display decremented time
        console.log(timeLeft);
        if (isPlaying == false || timeLeft == 0){ // stop timer if quiz finished or ran out of time
           clearInterval(interval); // clear any timers
           console.log("time stopped");
        }
    }, 1000);
    startButton.style="display:none"; // hide start button
    //pose first question
    poseQuestion(numQuestion);
}

function poseQuestion(qnNumber){ //to show question and answers
    console.log("printing qns");
    quizQuestion.textContent = quizQnArray[qnNumber-1];
    var answerPool;
    if (qnNumber == 1){
        answerPool = q1_answers;
    }
    else if (qnNumber == 2){
        answerPool = q2_answers;
    }
    else if (qnNumber == 3){
        answerPool = q3_answers;
    }
    else if (qnNumber == 4){
        answerPool = q4_answers;
    }
    else if (qnNumber == 5){
        answerPool = q5_answers;
    }
    for (var i =0; i < answerPool.length; i++){ //for each answer in set
        var answerOption = document.createElement("a"); // create an answer element
        answerOption.setAttribute("id", `option${i}`);
        answerOption.setAttribute("class", "answerLink");
        answerOption.setAttribute("href", "#");
        answerOption.textContent = answerPool[i];
        answerOption.style = "display: block";
        quizOptions.children[i].style = "display: list-item"; // show answer list to user
        quizOptions.children[i].appendChild(answerOption); // add answers to answer area list
        console.log(answerOption);
    }
}

// reset to defaults


// high scores

// LOGICAL FLOW: 
// Start Quiz -> start timer (every 1000ms, timer -= 1 until 0 OR !playing)
// SET Q1 Qn and Q1 answers to display on HTML 
// GET answer clicked -> decide if correct OR !correct
// IF !correct -> timer penalty
// SET Q2 Qn and Q2 answers to display
// repeat until time = 0 OR !playing (finished)
// Save Player {Name: [entry], Score: [time-remaining] to LocalState}