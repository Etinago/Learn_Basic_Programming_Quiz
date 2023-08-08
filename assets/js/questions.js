var javaQues = [{
    que: "Inside which HTML element do we put the JavaScript____",
    ans: [{text: "<js>", isCorrect: false },
    {text: "<script>", isCorrect: true },
    {text: "<javascript>", isCorrect: false },
    {text: "<scripting>", isCorrect: false }
    ]
},
{
    que: "Where is the correct place to insert a JavaScript?",
    ans: [{text: "Both the <head> section and the <body> section are correct", isCorrect: false, isSelected: false },
    {text: "The <head> section", isCorrect: false },
    {text: "The <body> section", isCorrect: true}
    ]   
},
{   
    que: "How do you call a function named 'myFunction'?",
    ans: [{text: "call function myFunction()", isCorrect: false, isSelected: false},
    {text: "call myFunction()", isCorrect: false },
    {text: "myFunction", isCorrect: true}
    ]

}]

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    var question = document.getElementById("question-title")
    var opt = document.getElementById("choices")

    question.textContent = javaQues[currentQuestion].que;
    opt.innerHTML = ""
}