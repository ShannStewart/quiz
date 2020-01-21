'use strict';

function startQuiz(){
   console.log("startQuiz ran");
  //on quizSlide.on 'click' startQuiz
  //get rid of inital slide and start quiz
}

function fabricateQuestion(){
  console.log("fabricateQuiz ran");
  //make question and answers appear
  //question h1
  //answers button class
  //var currentQuestion 

  //if there are no questions left go to final screen 
  // while CurrectQuestion < Store.Questions


  //recieve question and answers and feed into template below
  //questions++ 

  //<div class="quizQuestion"><h1>What is this? Tell me now.</h1></div>
  //        <div class="quizAnswers">
  //        <button class="choice">answerA </button>
  //        <button class="choice">answerB</button>
  //        <button class="choice">answerC</button>
  //         <button class="choice">answerD</button>
  //        </div>
}

function recieveAnswer(){
  console.log("recieveAnswer ran");
  //quizAnswers.onclick 'choice'
  //compare choice to answer 
  //if they match add point to score
  //if they match correct = true, if not correct = false
  //function displayAnswer
}

function displayAnswer(){
  console.log("displayAnswer ran");
  // add class rightAnswer to quiz section if correct = true
  // add class wrongAnswer to quizSection if correct = false
  // display answer
  // make <button class="continue">Next</button>

  //right answer slide

    //"<div class='quizSlide rightAnswer'><h1>The answer was " 
    //+ quizAnswer + "</h1><button class='continueQuiz'>Next Question</button></div>"

  //wrong answer slide
    
    //"<div class='quizSlide wrongAnswer'><h1>The answer was " 
    //+ quizAnswer + "</h1><button class='continueQuiz'>
    //Next Question</button></div>"
}

function continueQuiz(){
  console.log("continueQuiz ran");
  //quizSection.onclick 'continue'
  //remove class rightAnswer and class wrongAnswer
  //run fabricateQuestion
}

function scoreBoard(){
  console.log("scoreBoard ran");
  //last screen
  //display correctAnswer
  //make restart button

  //restart on click, set currentQuestion = 0 and then go to fabricateQuestion

  //final slide
   
  // "<div class='quizSlide'><h1>" + correctAnswers + 
  //" out of " + STORE.length + 
  //" were answered correctly."
  //</h1><button class='startQuiz'>Retry</button></div>"

}


function handleQuiz(){
  console.log("handleQuiz ran");

  startQuiz();
  fabricateQuestion();
  recieveAnswer();
  displayAnswer();
  continueQuiz();
  scoreBoard();
}

$(handleQuiz);