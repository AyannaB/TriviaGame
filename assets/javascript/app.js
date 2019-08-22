//Initiallize Variables
let counter = 35;
let currentQuestion = 0;
let correct = 0;
let wrong = 0;
let timer;

//Create on click function to start game
$("#start").on("click", function() {
  $(".question").text(quizQuestions[0].questions);
//Create for loop to loop through the quiz questions and start at the first one
  for (var i = 0; i < quizQuestions[0].choices.length; i++) {
    var choices = $("<div>");
    choices.addClass(`${i}`);
    choices.text(quizQuestions[0].choices[i]);
    $(".options").append(choices);
  }
});

$('document').on('click',function(){
  

});

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
