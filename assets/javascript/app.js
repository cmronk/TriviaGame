// (function() {
//     function buildQuiz() {
//       // we'll need a place to store the HTML output
//       const output = [];
  
//       // for each question...
//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         // we'll want to store the list of answer choices
//         const answers = [];
  
//         // and for each available answer...
//         for (letter in currentQuestion.answers) {
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join("")} </div>`
//         );
//       });
  
//       // finally combine our output list into one string of HTML and put it on the page
//       quizContainer.innerHTML = output.join("");
//     }
  
//     function showResults() {
//       // gather answer containers from our quiz
//       const answerContainers = quizContainer.querySelectorAll(".answers");
  
//       // keep track of user's answers
//       let numCorrect = 0;
  
//       // for each question...
//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         // find selected answer
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//         // if answer is correct
//         if (userAnswer === currentQuestion.correctAnswer) {
//           // add to the number of correct answers
//           numCorrect++;
  
//           // color the answers green
//           answerContainers[questionNumber].style.color = "lightgreen";
//         } else {
//           // if answer is wrong or blank
//           // color the answers red
//           answerContainers[questionNumber].style.color = "red";
//         }
//       });
  
//       // show number of correct answers out of total
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }
  
//     const quizContainer = document.getElementById("quiz");
//     const resultsContainer = document.getElementById("results");
//     const submitButton = document.getElementById("submit");
// // quiz questions 

// const myQuestions = [
//     {
//         question: "What is the largest brain region?",
//         answers: {
//             a: "Cerebrum",
//             b: "Cerebellum",
//             c: "Hypothalamus",
//             d: "Thalamus"
//         },
//         correctAnswer: "a"
//     },

//     {
//         question: "On average, how much does a human adult brain weigh?",
//         answers: {
//             a: "1 pound",
//             b: "2 pounds",
//             c: "3 pounds",
//             d: "4 pounds",
//         },
//         correctAnswer: "c"
//     },

//     {
//         question: "What are the main regions of the heart called?",
//         answers: {
//             a: "valves and ventricles",
//             b: "valves and atria",
//             c: "hemispheres and valves",
//             d: "ventricles and atria"
//         },
//         correctAnswer: "d"
//     },

//     {
//         question: "The base of the heart is called what?",
//         answers: {
//             a: "apex",
//             b: "base",
//             c: "vena cava",
//             d: "sinus"
//         },
//         correctAnswer: "a"
//     },

//     {
//         question: "The duodenum and jejunum are part of which body system?",
//         answers: {
//             a: "cardiac",
//             b: "skeletal",
//             c: "nervous",
//             d: "digestive"
//         },
//         correctAnswer: "d"
//     },

//     {
//         question: "Pharyngeal, palatine and lingual could refer to what?",
//         answers: {
//             a: "nerves",
//             b: "teeth",
//             c: "tonsils",
//             d: "tissues"
//         },
//         correctAnswer: "c"
//     },

//     {
//         question: "Which of these structures could be considered vestigial?",
//         answers: {
//             a: "liver",
//             b: "appendix",
//             c: "thumbs",
//             d: "incisors"
//         },
//         correctAnswer: "b"
//     },

//     {
//         question: "Which is considered the 'shock absorber' within the knee?",
//         answers: {
//             a: "patella",
//             b: "meniscus",
//             c: "tibia",
//             d: "femur"
//         },
//         correctAnswer: "b"
//     },

//     {
//         question: "The scapula is commonly known as what?",
//         answers: {
//             a: "shoulder blade",
//             b: "deltoids",
//             c: "biceps",
//             d: "clavicle"
//         },
//         correctAnswer: "a"
//     },

//     {
//         question: "If you were to extend your toes as if trying to 'tiptoe', which motion are you completing?",
//         answers: {
//             a: "adduction",
//             b: "abduction",
//             c: "pronation",
//             d: "plantar flexion"
//         },
//         correctAnswer: "d"
//     },
    
//     {
//         question: "Head, shoulders, knees, and toes...",
//         answers: {
//             a: "eyes and ears and mouth and nose",
//             b: "glutes and fros",
//             c: "chin and 'bows",
//             d: "teeth and nose"
//         },
//         correctAnswer: "a"
//     } 
// ];
//  // display quiz right away
//  buildQuiz();

//  // on submit, show results
//  submitButton.addEventListener("click", showResults);
// })();


// // TODO
// // add styling
// // work in timeout function and use of slides






