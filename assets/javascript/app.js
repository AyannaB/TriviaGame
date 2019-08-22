//Initiallize Variables
let counter = 35;
let currentQuestion = 0;
let correct = 0;
let wrong = 0;
let timer;

//Create on click function to start game
$("#start").on("click", function() {
generateQuestion();
});

//Checks if the userAnswer = the actual answer
$(document).on('click','.choices',function(){
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
  setTimeout (generateQuestion,1000)
});

//Generates the questions for the quiz
function generateQuestion(){
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

//Showing the results 
  function generateResults(){
    $('#game').hide();
    $('.results').show();
    $('.correct').append(correct);
    $('.incorrect').append(wrong);
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
