// link with html elements
var quizQuestion = document.getElementById("questionTitle");
var quizOptions = document.getElementById("answerArea");
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");
var showScoresButton = document.getElementById("viewScoreBtn");
var hideScoresButton = document.getElementById("closeScoresBtn");
var scoreCard = document.getElementById("scoreCard");
var gameCard = document.getElementById("questionArea");

// quiz questions and answers
var quizQnArray = ["Q1: Commonly used data types do not include ...",
    "Q2: The condition of a loop is enclosed in ...",
    "Q3: Arrays in JavaScript can be used to store ...",
    "Q4: String values must be enclosed within...",
    "Q5: To print to console in JavaScript, the syntax is...",];
var q1_answers = ["Strings", "Booleans", "Alerts", "Numbers"];
var q2_answers = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"];
var q3_answers = ["Numbers", "Strings", "Objects", "All of the above"];
var q4_answers = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"];
var q5_answers = ["Print()", "Console.log()", "System.out.Println()", "cout <<"];

// other variables
var playerStorage = window.localStorage; // storage of scores
var timeLeft = 75; // timer maximum and remaining
var interval; // refresh each second
var qnCorrect = false; // for scoring of each question
var isPlaying = true; // is quiz running
var numQuestion = 1; // track current question

// user storage
/*var playerRecord = {
    playerName: ,
    playerScore: ,
};*/

// start quiz on button
startButton.addEventListener("click", playQuiz);

function playQuiz(){
    event.preventDefault(); //prevent button from refreshing form and page
    console.log("now playing");
    isPlaying = true; // set playing status true
    timeLeft= 75; //set max time remaining to begin
    timerDisplay.textContent = timeLeft; // display time remaining
    //while (isPlaying){
        interval = setInterval(function(){ // count each second
            timeLeft -= 1;
            timerDisplay.textContent = timeLeft; // display decremented time
            console.log(timeLeft);
            if (timeLeft == 0){ // stop timer if ran out of time
                clearInterval(interval); // clear any timers
                console.log("time ended");
                isPlaying = false; // no longer quizzing
            }
            if (!isPlaying){ // stop timer if finished quiz
                clearInterval(interval); // clear any timers
                console.log("quiz ended");
            }
        }, 1000);
        startButton.style="display:none"; // hide start button
        
        //pose first question
        poseQuestion(numQuestion);
    //}

    if (!isPlaying){ //stopped playing quiz
        // ask user to enter name to save score
        console.log("finished quiz");
    }
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
        quizOptions.children[i].style = "display: list-item"; // show answer list to user
        quizOptions.children[i].firstChild.textContent = answerPool[i]; // add answers to answer area list
        quizOptions.children[i].firstChild.addEventListener("click",choseAnswer);
        console.log(answerPool[i]);
    }
    
}

// answer clicked
function choseAnswer(){
    var qnAnswered = false;
    var answerChosen = event.currentTarget; //get object being listened to
    event.preventDefault();
       while (!qnAnswered){
            document.getElementById("qnResult").textContent = ""; // reset correct/incorrect message
            
            // correct / incorrect answer logic
            if (numQuestion == 1 && answerChosen.innerText == "Alerts"){ // question 1
                console.log(answerChosen.innerText);
                document.getElementById("qnResult").textContent = "Correct!";
                qnAnswered = true;
            }
            else if (numQuestion == 1 && answerChosen.innerText != "Alerts"){
                console.log(answerChosen.innerText);
                console.log(answerChosen);
                document.getElementById("qnResult").textContent = "Incorrect!";
                timeLeft -= 15;
                qnAnswered = true;
            }
            if (numQuestion == 2 && answerChosen.textContent == "Parentheses"){ // question 2
                console.log(answerChosen.textContent); 
                document.getElementById("qnResult").textContent = "Correct!";
                qnAnswered = true;
            }
            else if (numQuestion == 2 && answerChosen.textContent != "Parentheses"){
                console.log("incorrect");
                document.getElementById("qnResult").textContent = "Incorrect!";
                timeLeft -= 15;
                qnAnswered = true;
            }
            if (numQuestion == 3 && answerChosen.textContent == "All of the above"){ // question 3
                console.log(answerChosen.textContent);
                document.getElementById("qnResult").textContent = "Correct!";
                qnAnswered = true;
            }
            else if (numQuestion == 3 && answerChosen.textContent != "All of the above"){
                console.log("incorrect");
                document.getElementById("qnResult").textContent = "Incorrect!";
                timeLeft -= 15;
                qnAnswered = true;
            }
            if (numQuestion == 4 && answerChosen.textContent == "Quotes"){ //question 4
                console.log(answerChosen.textContent);
                document.getElementById("qnResult").textContent = "Correct!";
                qnAnswered = true;
            }
            else if (numQuestion == 4 && answerChosen.textContent != "Quotes"){
                console.log("incorrect");
                document.getElementById("qnResult").textContent = "Incorrect!";
                timeLeft -= 15;
                qnAnswered = true;
            }
            if (numQuestion == 5 && answerChosen.textContent == "Console.log()"){ //question 5
                console.log(answerChosen.textContent);
                document.getElementById("qnResult").textContent = "Correct!";
                qnAnswered = true;
            }
            else if (numQuestion == 5 && answerChosen.textContent != "Console.log()"){
                console.log("incorrect");
                document.getElementById("qnResult").textContent = "Incorrect!";
                timeLeft -= 15;
                qnAnswered = true;
            }
        }
        if (qnAnswered && numQuestion < 5){
            numQuestion += 1; // move on to next question
            poseQuestion(numQuestion);
        }
        else if (timeLeft <= 0 || numQuestion == 5){
            isPlaying = false;
            clearInterval();
        }
}


// reset to defaults
function restartQuiz(){

}

// high scores

// show high scores pane
showScoresButton.addEventListener("click", showScoreCard);

function showScoreCard(){
    event.preventDefault();
    console.log("show scores");
    gameCard.style = "display: none;";
    scoreCard.style="display: flex;";
}

// hide high scores pane
hideScoresButton.addEventListener("click", hideScoreCard);

function hideScoreCard(){
    event.preventDefault();
    console.log("hide scores");
    scoreCard.style = "display: none;";
    gameCard.style = "display: flex;";

}

// LOGICAL FLOW: 
// Start Quiz -> start timer (every 1000ms, timer -= 1 until 0 OR !playing)
// SET Q1 Qn and Q1 answers to display on HTML 
// GET answer clicked -> decide if correct OR !correct
// IF !correct -> timer penalty
// SET Q2 Qn and Q2 answers to display
// repeat until time = 0 OR !playing (finished)
// Save Player {Name: [entry], Score: [time-remaining] to LocalState}