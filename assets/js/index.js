// Select relevant HTML elements
const startButton = document.querySelector('#start-button');
const quizSection = document.querySelector('#quiz');
const highScoresSection = document.querySelector('#high-scores');
const scoreList = document.querySelector('#score-list');
const timerElement = document.querySelector('#timer');

let timer;
let timeLeft = 60; // Set your desired initial time in seconds
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is JavaScript?',
    answers: [
      { text: 'A type of coffee', correct: false },
      { text: 'A programming language', correct: true },
      { text: 'A city in Indonesia', correct: false }
    ]
  },
  {question: "Inside which HTML element do we put the JavaScript____",
  answers: [{text: "<js>", correct: false },
  {text: "<script>", correct: true },
  {text: "<javascript>", correct: false },
  {text: "<scripting>", correct: false }
  ]
},
{
  question: "Where is the correct place to insert a JavaScript?",
  answers: [{text: "Both the <head> section and the <body> section are correct", correct: false, isSelected: false },
  {text: "The <head> section", correct: false },
  {text: "The <body> section", correct: true}
  ]   
},
{   
  question: "How do you call a function named 'myFunction'?",
  answers: [{text: "call function myFunction()", correct: false, isSelected: false},
  {text: "call myFunction()", correct: false },
  {text: "myFunction", correct: true}
  ]
}
];

// Event listener for the start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.style.display = 'none';
  showQuestion(0);
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerElement.textContent = `Time: ${timeLeft}`;
    
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion(index) {
  const question = questions[index];
  const questionElement = document.createElement('h2');
  questionElement.textContent = `Question ${index + 1}: ${question.question}`;
  quizSection.appendChild(questionElement);
  
  const answerList = document.createElement('ul');
  question.answers.forEach(answer => {
    const answerItem = document.createElement('li');
    const answerButton = document.createElement('button');
    answerButton.textContent = answer.text;
    answerButton.addEventListener('click', () => {
      if (answer.correct) {
        score += 10; // Adjust the score as needed
      } else {
        timeLeft -= 10; // Deduct time for incorrect answers
      }
      quizSection.innerHTML = ''; // Clear current question
      currentQuestionIndex++;
      
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        endQuiz();
      }
    });
    answerItem.appendChild(answerButton);
    answerList.appendChild(answerItem);
  });
  quizSection.appendChild(answerList);
}

function endQuiz() {
  clearInterval(timer);
  quizSection.innerHTML = '';
  timerElement.textContent = '';
  
  // Display the final score and allow the user to save their initials
  const initials = prompt('Enter your initials:');
  
  // Store the score and initials in a data structure (e.g., an array)
  const scoreEntry = { initials, score };
  // You can also save the score to local storage or a server
  
  // Display high scores
  // You can sort and display high scores here
  
  // Show the high scores section
  highScoresSection.style.display = 'block';
}
