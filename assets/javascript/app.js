// variables and counters


correctAnswers = 0;
incorrectAnswers = 0;
leftBlank = 0;
results = [];
userGuess="";
countdown = 30;
intervalId;
// empty div for images
images = "";
const quizQuestions = [

    {
        question: "What is the largest brain region?",
        answers: ["Cerebrum", "Cerebellum", "Hypothalamus", "Thalamus"],
        correctAnswer: 0,
        image: "assets/images/brain.jpg"
    },
    {
        question: "On average, how much does a human adult brain weigh?",
        answers: [ "1 pound", "2 pounds", "3 pounds", "4 pounds"],
        correctAnswer: 2,
        image: "assets/images/brainweight.jpeg"
    },
    {
        question: "What are the main chambers of the heart called?",
        answers: [ "valves and ventricles", "valves and atria", "hemispheres and valves", "ventricles and atria"],
        correctAnswer: 3,
        image: "assets/images/heartchambers.jpg"
    },
    {
        question: "The base of the heart is called what?",
        answers: ["apex", "base", "vena cava", "sinus"],
        correctAnswer: 0,
        image: "assets/images/heartbase.jpg"
    },

    {
        question: "The duodenum and jejunum are part of which body system?",
        answers: ["cardiac", "skeletal", "nervous", "digestive"],
        correctAnswer: 3,
        image: "assets/images/digestive.jpeg"
    },

    {
        question: "Pharyngeal, palatine and lingual could refer to what?",
        answers: ["nerves", "teeth", "tonsils", "tissues"],
        correctAnswer: 2,
        image: "assets/images/tonsils.jpeg"
    },

    {
        question: "Which of these structures could be considered vestigial?",
        answers: ["liver", "appendix", "thumbs", "incisors"],
        correctAnswer: 1,
        image: "assets/images/appendix.jpeg"
    },

    {
        question: "Which is considered the 'shock absorber' within the knee?",
        answers: ["patella", "meniscus", "tibia", "femur"],
        correctAnswer: 1,
        image: "assets/images/knee.jpeg"
    },

    {
        question: "The scapula is commonly known as what?",
        answers: ["shoulder blade", "deltoids", "biceps", "clavicle"],
        correctAnswer: 0,
        image: "assets/images/shoulderblade.jpeg"
    },

    {
        question: "If you were to extend your toes as if trying to 'tiptoe', which motion are you completing?",
        answers: ["adduction", "abduction", "pronation", "plantar flexion"],
        correctAnswer: 3,
        image: "assets/images/toes.jpeg"
    },
    
    // {
    //     question: "Head, shoulders, knees, and toes...",
    //     answers: ["eyes and ears and mouth and nose.", "glutes and fros.", "chin and elbows.", "teeth and nose."],
    //     correctAnswer: 0,
    //     image: "assets/images/elmo.jpeg"
        
    // }  
]; 

// functions

function quizInfo () {
    random = [Math.floor(Math.random()*quizQuestions.length)];
    console.log(random);

    // start timer for quiz question
    timer ();

    // questions
    for (j = 0; j < quizQuestions.length; j++) {
        var question = quizQuestions[random].question;
        $("#quiz-questions").text(question);
    }
    // answer pool
    for (j = 0; j < quizQuestions.length; j++) {
        var answers = quizQuestions[random].answers;
        $("#quiz-answers").text(answers[0]);
        $("#quiz-answers2").text(answers[1]);
        $("#quiz-answers3").text(answers[2]);
        $("#quiz-answers4").text(answers[3]);
    }

    // // images
    for (j = 0; j < quizQuestions.length; j++) {
        var image = quizQuestions[random].image;
        $("#images").html("<img src=" + image + ">");
    }

    // correctAnswer
    for (j = 0; j < quizQuestions.length; j++) {
        var correctAnswer = (quizQuestions[random].correctAnswer);
    }

    };       


quizInfo ();

// button to move onto next question.... need to work on this....
$("#next").on("click", function () {
    nextQuestion();
    quizInfo();
    $("input[name=userGuess]").removeAttr("checked");
});
 

function showAnswer () {
    $("#images").html("<img src=" + image + ">");
    alert("You chose: " + answers[userGuess]);

}
// if time is up or user clicks "next question", move on to different question
function nextQuestion() {
    
    timer ();

    $("#quiz-questions").empty();
    $("#quiz-answers").empty();
    $("#quiz-answers2").empty();
    $("#quiz-answers3").empty();
    $("#quiz-answers4").empty();

 
    // questions
    for (k = 0; k < quizQuestions.length; k++) {
        var question = quizQuestions[k].question;
        $("#quiz-questions").text(question);
    }
    // answer pool
    for (k = 0; k < quizQuestions.length; k++) {
        var answers = quizQuestions[k].answers;
        $("#quiz-answers").text(answers[0]);
        $("#quiz-answers2").text(answers[1]);
        $("#quiz-answers3").text(answers[2]);
        $("#quiz-answers4").text(answers[3]);
    }

    // // images
    for (k = 0; k < quizQuestions.length; k++) {
        var image = quizQuestions[random].image;
        $("#images").html("<img src=" + image + ">");
    }

    // correctAnswer
    for (k = 0; k < quizQuestions.length; k++) {
        var correctAnswer = (quizQuestions[k].correctAnswer);
    }

};


    // doesn't work
    // check user guess and if correct, congratulate and show picture or if incorrect show correct answer and picture
// function checkAnswer () {
//     for (i = 0; i < quizQuestions.length; i++){    
    // // capture value from radio button
    // $("input").click(function() {
    //     userGuess = $("input[name=userGuess]:checked").val();
    //     alert("You chose: " + answers[userGuess]);
    
    

//         if (userGuess === quizQuestions.correctAnswer) {
//             correctAnswers++;
//             console.log(correctAnswers);
//         }
//         else {
//             incorrectAnswers++;
//             console.log(incorrectAnswers);
//         }
//     };
    

  
    // reset radio button




//     // TIMER WORKS
//     // timer functions for each question
//     // 30 seconds displayed for each question

var countdown = 30;
var intervalId;

function timer () {
// this is what "runs" the time down
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // updates the html to reflect the timer
    var countdown = 30;
    $("#timer").html(countdown);

    function decrement() {
        countdown--;

        $("#timer").html(countdown);

        if (countdown === 0) {
            stop();
            showAnswer();
            nextQuestion ()
        }
    }

    // function stop() {
    //     // // this ensures the timer doesn't go into a negative count
    function stop() {
        clearInterval(intervalId);
    
    }
    // // // tells the function run to start
    run ();

}


        // TODO
        // start button to start quiz
        // iterate through array without duplicates....
        // reset radio button
        // capture radio button choice and put into correct/incorrect/blank 
        // scoring
        // images in correct places
        // end quiz/ show score
