//Initiallize Variables
let counter = 35;
let currentQuestion = 0;
let correct = 0;
let wrong = 0;
let notAnswered = 0;
// let timer;
let intervalId;

//Create on click function to start game
$("#start").on("click", function() {
  clearInterval(intervalId);
currentQuestion = 0;
correct = 0;
wrong = 0;
notAnswered = 0; 
$('#start').hide();
$('#game').show();
$('.results').hide();
generateQuestion();
});

//Checks if the userAnswer = the actual answer
$(document).on('click','.choices',function(){
  console.log("this was clicked");
  let answered = $(this).attr("data-answered")
  if(answered != "answered"){
    let userAnswer = $(this).text();
    console.log(userAnswer);
    console.log('it works girl');
  
    if(userAnswer == quizQuestions[currentQuestion-1].correctAnswer){
      $(this).css("color", "green");
      console.log('you got it!');
      correct++;
      
    } else{
      $(this).css("color", "red");
      console.log('sis what?');
      wrong++;
    }
    $(".choices").attr("data-answered", "answered");
    $(".choices").attr("disabled", true);
  }else{

  }

  clearInterval(intervalId);
  setTimeout (generateQuestion,1000)
});

//Generates the questions for the quiz
function generateQuestion(){
  let time = 20;
  $(".time").text('Time Left: ' + time);
  timer(time);
  if(quizQuestions.length > currentQuestion){
    $(".question").text(quizQuestions[currentQuestion].questions);
    $(".options").empty();
  
  //Create for loop to loop through the quiz questions and start at the first one
      for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
        var choices = $("<div>");
        choices.addClass("choices");
        choices.text(quizQuestions[currentQuestion].choices[i]);
        $(".options").append(choices);
      }
      currentQuestion++;
  } else{
    generateResults();
  }

}

// Timer stuff
function timer(time){
  
  
   intervalId = setInterval(count, 1000);

  function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    if(time===0){
      clearInterval(intervalId);
      notAnswered++;
      setTimeout (generateQuestion,2000)
    }
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $(".time").text('Time Left: ' + time);
  }
}

//Showing the results 
  function generateResults(){
    clearInterval(intervalId);
    $('#game').hide();
    $('.results').show();
    $('.correct').text("Correct: " + correct);
    $('.incorrect').text("Incorrect: " + wrong);
    $('.notAnswered').text("Not Answered: " + notAnswered)
    $('#start').show().text('Play Again');
  }

//Create Questions
const quizQuestions = [
  {
    questions: "How many known moons does Jupiter have?",
    choices: [45, 50, 66, 79],
    correctAnswer: 79
  },
  {
    questions: "Who is George Lemaître?",
    choices: [
      "The founder of the Big Bang Theory.",
      "The founder of the Theory of Special Relativity.",
      "The founder of Dark Matter.",
      "The first person to predict the existence of Black Holes."
    ],
    correctAnswer: "The founder of the Big Bang Theory."
  },
  {
    questions: "How many planets are there?",
    choices: [9, 12, 8, 7],
    correctAnswer: 8
  },

  {
    questions:
      "What year was the first module of the International Space Station (ISS) launched into space?",
    choices: [1969, 1975, 1998, 1985],
    correctAnswer: 1998
  }
];
