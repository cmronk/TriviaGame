// variables and counters


correctAnswers = 0;
incorrectAnswers = 0;

quizQuestions = [

    {
        question: "What is the largest brain region?",
        answers: ["Cerebrum", "Cerebellum", "Hypothalamus", "Thalamus"],
        correctAnswer: 0
    },
    {
        question: "On average, how much does a human adult brain weigh?",
        answers: [ "1 pound", "2 pounds", "3 pounds", "4 pounds"],
        correctAnswer: 2
    },
    {
        question: "What are the main regions of the heart called?",
        answers: [ "valves and ventricles", "valves and atria", "hemispheres and valves", "ventricles and atria"],
        correctAnswer: 3
    },
    {
        question: "The base of the heart is called what?",
        answers: ["apex", "base", "vena cava", "sinus"],
        correctAnswer: 0
    },

    {
        question: "The duodenum and jejunum are part of which body system?",
        answers: ["cardiac", "skeletal", "nervous", "digestive"],
        correctAnswer: 3
    },

    {
        question: "Pharyngeal, palatine and lingual could refer to what?",
        answers: ["nerves", "teeth", "tonsils", "tissues"],
        correctAnswer: 2
    },

    {
        question: "Which of these structures could be considered vestigial?",
        answers: ["liver", "appendix", "thumbs", "incisors"],
        correctAnswer: 1
    },

    {
        question: "Which is considered the 'shock absorber' within the knee?",
        answers: ["patella", "meniscus", "tibia", "femur"],
        correctAnswer: 1
    },

    {
        question: "The scapula is commonly known as what?",
        answers: ["shoulder blade", "deltoids", "biceps", "clavicle"],
        correctAnswer: 0
    },

    {
        question: "If you were to extend your toes as if trying to 'tiptoe', which motion are you completing?",
        answers: ["adduction", "abduction", "pronation", "plantar flexion"],
        correctAnswer: 3
    },
    
    {
        question: "Head, shoulders, knees, and toes...",
        answers: ["eyes and ears and mouth and nose", "glutes and fros", "chin and elbows", "teeth and nose"],
        correctAnswer: 0
    } 
];

// update html with quizQuestions

for (var i = 0; i < quizQuestions.length; i++) {
    var question = quizQuestions[i].question;
    $("#quiz-questions").html(question);


    
}   

// functions












