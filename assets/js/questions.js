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

    for (var i = 0; i < javaQues[currentQuestion].ans.length; i++) {
        var optiondiv = document.createElement("div");
        var option = document.createElement("input");
        var optionLabel = document.createElement("label");

        option.type ="radio";
        option.name = "answer";
        option.value = i;

        optionLabel.textContent = javaQues[currentQuestion].ans[i].text;

        optiondiv.appendChild(option);
        optiondiv.appendChild(optionLabel);
        opt.appendChild(optiondiv);

    }
}

loadQuestion ();

function loadScore() {
    var totalScore = document.getElementById("final-score")
    totalScore.textContent = 'You score ${final-score} out of ${javaQues.length}'
}

function nextQuestion() {
    if (currentQuestion < javaQues.length -1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("choices").remove()
        document.getElementById("questions").remove()
        document.getElementById("start").remove()
        loadScore();
    }
}

function checkAns() {
    var selectedAnswers = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (javaQues[currentQuestion].ans[selectedAnswers].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion()
    } else {
        nextQuestion()
    }
}