let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");
let cardBody = document.querySelector("#cardBody");
let questionCount = 0

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
    ]
]

startBtn.addEventListener("click", quizStart)
    // How we'll begin our quiz off of the Start button.

function quizStart() {
    resetQuestion();
    populateQuestion();
}

function resetQuestion() {
    // Anything we need to dumb in here to reset each question.
    startBtn.style.display = "none";
    // This hides the start button shown on initial page load and quiz completion.
    cardText.style.display = "none";
    // This hides the introductory quiz text once the quiz starts.
}

function populateQuestion() {
    for (let i = 0; i < 4; i++) {
        let createBtn = document.createElement("BUTTON");
        // createBtn creates a button element.
        createBtn.setAttribute("class", "questionButton btn btn-primary m-1");
        // Created buttons have the above classes & styling.
        createBtn.setAttribute("id", "button" + (i + 1));
        // Created buttons have the ID of their 1-4.
        let brCreate = document.createElement("br");
        cardBody.appendChild(brCreate);
        // the above two lines are creating line breaks
        cardBody.appendChild(createBtn);
    }
    nextQuestion(questionCount)
}

function nextQuestion(questionCount) {
    titleText.textContent = questionList[questionCount][0];
    
}

function question1active() {
    let button1 = document.querySelector("#button1");
    button1.addEventListener("click", function(){
        
    })
}

// Notes to self, and don't forget to delete these this time:
    // I'm thinking each question is an array or object.
    // Each arr/obj has four buttons that operate as your multiple choice and they each trigger a function
    // to move onto the next question while also returning your answer as right or wrong.