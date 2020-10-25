let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");
let cardBody = document.querySelector("#cardBody");
let questionCount = 0;
let score = 0;

let questionList = [
    questionOne = [
        "When would you use an Array instead of an Object?", 
        "When wanting to have the properties in order.",
        "When wanting to use a function.",
        "When you need different types of data.",
        "All of the above."
    ],  
    questionTwo = [
        "What is functional programming?",
        "When you build a website that is functional using JavaScript.",
        "Any time you use a function.",
        "Your code isn't in the global scope, but instead in functions.",
        "Another word for programming."
    ],
    questionThree = [
        "What is the difference between Let and Var?",
        "Var allows you to use functions.",
        "Let is local to only the scope it's within.",
        "Let allows the assigned element access to the dom.",
        "Var is used in HTML while Let is used in JavaScript."
    ]
]

let answerKey = ["button1", "button3", "button2"]

function quizStart() {
    resetQuestion();
    timerFunc();
    populateQuestion();
}

function resetQuestion() {
    // Anything we need to dumb in here to reset each question.
    startBtn.style.display = "none";
    // This hides the start button shown on initial page load and quiz completion.
    cardText.style.display = "none";
    // This hides the introductory quiz text once the quiz starts.
}

function timerFunc() {
    let timer = document.querySelector("#timer");
    timer.textContent = 60;
    let myfunc = setInterval(function() {
        timer.textContent--
    }, 1000)
}

function populateQuestion() {
    // Creates our buttons and our line breaks.
    for (let i = 0; i < 4; i++) {
        let createBtn = document.createElement("BUTTON");
        // createBtn creates a button element.
        createBtn.setAttribute("class", "questionButton btn btn-primary m-1");
        // Created buttons have the above classes & styling.
        createBtn.setAttribute("id", "button" + (i + 1));
        // Created buttons have the ID of their 1-4.
        createBtn.addEventListener('click', function() {
            btnID = createBtn.getAttribute("id");
            checkAnswer();
        });
        // Adds an event listener to each button as they're created.
        let brCreate = document.createElement("br");
        cardBody.appendChild(brCreate);
        // the above two lines are creating line breaks
        cardBody.appendChild(createBtn);
    }
    nextQuestion(questionCount);
}

function findButtons() {
    let button1 = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let button4 = document.querySelector("#button4");
    // There's a more dynamic way to scale this, to make it easier to add more buttons.
}

function nextQuestion(questionCount) {
    titleText.textContent = questionList[questionCount][0];
    // This sets the title text dynamically to the current question.
    findButtons();
    // Findbuttons allows us to pull in the query selected variables.
    button1.innerHTML = questionList[questionCount][1];
    button2.innerHTML = questionList[questionCount][2];
    button3.innerHTML = questionList[questionCount][3];
    button4.innerHTML = questionList[questionCount][4];
    // The above 4 lines could theoretically run a for loop, but, once again it's not worth the time.
    // The above 4 lines are adding the respective question's possible answers dynamically.
}

function checkAnswer() {
    findButtons();
    if (this.btnID === answerKey[questionCount]) {
        score++
        console.log("Correct!")
    } else {
        console.log("Wrong!")
    }
    questionCount++
    // This indicates that we're moving up a question.
    nextQuestion(questionCount);
}

startBtn.addEventListener("click", quizStart);
    // How we'll begin our quiz off of the Start button.