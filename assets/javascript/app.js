// variables and counters


correctAnswers = 0;
incorrectAnswers = 0;
leftBlank = 0;
results = [];
userGuess="";


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
        image: "../assets/images/brainweight.jpeg"
    },
    {
        question: "What are the main chambers of the heart called?",
        answers: [ "valves and ventricles", "valves and atria", "hemispheres and valves", "ventricles and atria"],
        correctAnswer: 3,
        image: "../assets/images/heartchambers.jpg"
    },
    {
        question: "The base of the heart is called what?",
        answers: ["apex", "base", "vena cava", "sinus"],
        correctAnswer: 0,
        image: "../assets/images/heartbase.jpg"
    },

    {
        question: "The duodenum and jejunum are part of which body system?",
        answers: ["cardiac", "skeletal", "nervous", "digestive"],
        correctAnswer: 3,
        image: "../assets/images/digestive.jpeg"
    },

    {
        question: "Pharyngeal, palatine and lingual could refer to what?",
        answers: ["nerves", "teeth", "tonsils", "tissues"],
        correctAnswer: 2,
        image: "../assets/images/tonsils.jpeg"
    },

    {
        question: "Which of these structures could be considered vestigial?",
        answers: ["liver", "appendix", "thumbs", "incisors"],
        correctAnswer: 1,
        image: "../assets/images/appendix.jpeg"
    },

    {
        question: "Which is considered the 'shock absorber' within the knee?",
        answers: ["patella", "meniscus", "tibia", "femur"],
        correctAnswer: 1,
        image: "../assets/images/knee.jpeg"
    },

    {
        question: "The scapula is commonly known as what?",
        answers: ["shoulder blade", "deltoids", "biceps", "clavicle"],
        correctAnswer: 0,
        image: "../assets/images/shoulderblade.jpeg"
    },

    {
        question: "If you were to extend your toes as if trying to 'tiptoe', which motion are you completing?",
        answers: ["adduction", "abduction", "pronation", "plantar flexion"],
        correctAnswer: 3,
        image: "../assets/images/toes.jpeg"
    },
    
    {
        question: "Head, shoulders, knees, and toes...",
        answers: ["eyes and ears and mouth and nose.", "glutes and fros.", "chin and elbows.", "teeth and nose."],
        correctAnswer: 0,
        image: "images/elmo.jpeg"
        
    }  
];

function makeQuiz () {
    // questions
    for (i = 0; i < quizQuestions.length; i++) {
        question = quizQuestions[i].question;
        console.log(question);
        $("#quiz-questions").text(question);
    }
        // answer pool
    for (i = 0; i < quizQuestions.length; i++) {
        var answers = quizQuestions[i].answers;
        $("#quiz-answers").text(answers[0]);
        $("#quiz-answers2").text(answers[1]);
        $("#quiz-answers3").text(answers[2]);
        $("#quiz-answers4").text(answers[3]);
    }

    // images
    for (i = 0; i < quizQuestions.length; i++) {
        image = quizQuestions[i].image;
        console.log(image);
        $("#images").text(image);
    }



    // capture value from radio button
    $("input").click(function() {
        var userGuess = $("input[name=userGuess]:checked").val();
        $("#results").html("log answer" + userGuess);


    });
        
}

makeQuiz ();

    // // button to move onto next question.... need to dry
    // $("#next").on("click", function () {
    //     for (i = 0; i < quizQuestions.length; i++) {
    //         question = quizQuestions[1].question;
    //         $("#quiz-questions").text(question);
    //     }

    //     for (i = 0; i < quizQuestions.length; i++) {
    //         var answers = quizQuestions[1].answers;
    //         $("#quiz-answers").text(answers[0]);
    //         $("#quiz-answers2").text(answers[1]);
    //         $("#quiz-answers3").text(answers[2]);
    //         $("#quiz-answers4").text(answers[3]);
    //     }






// functions

    // randomly select question and display 
    // make sure randomly selected question only appears once during iteration


    // doesn't work
    // check user guess and if correct, congratulate and show picture or if incorrect show correct answer and picture
    // function checkAnswer () {
    // for (i = 0; i < quizQuestions.length; i++){
    //     if (userGuess === quizQuestions.correctAnswer) {
    //         correctAnswers++;
    //         console.log(correctAnswers);
    //     }
    //     else {
    //         incorrectAnswers++;
    //         console.log(incorrectAnswers);
    //     }
    // }
   

  
    // reset radio button




    // TIMER WORKS
    // timer functions for each question
    // 30 seconds displayed for each question

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
                alert("Time's up!");
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

    timer ();


        // TODO
        // cycle to next question when user clicks button or if time runs out

        // images

