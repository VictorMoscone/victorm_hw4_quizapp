let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");
let a1btn = document.createElement("BUTTON");
let a2btn = document.createElement("BUTTON");
let cardBody = document.querySelector("#cardBody");


let questionOne = {
    q1statement: "When would you use an Array instead of an Object?",
    q1answer: "When wanting to have the properties in order.",
}

startBtn.addEventListener("click", quizStart)
    // How we'll begin our quiz off of the Start button.

function resetQuestion() {
    // Anything we need to dumb in here to reset each question.
    startBtn.style.display = "none";
    // This hides the start button shown on initial page load and quiz completion.
}

function createQButton(objectName) {
    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "questionButton");
    cardBody.appendChild(btnDiv);
    let test = document.querySelector("#questionButton");
    a1btn.innerHTML = "Click me";
    test.appendChild(a1btn);
}

function quizStart() {
    resetQuestion();
    titleText.textContent = questionOne.q1statement
    cardText.textContent = questionOne.q1answer;
    createQButton(questionOne);
    // a1btn.innerHTML = "Click me";
    // a2btn.innerHTML = "Click me";
    // cardText.appendChild(a1btn);
    // cardText.appendChild(a2btn)
}

// Notes to self, and don't forget to delete these this time:
    // I'm thinking each question is an array or object.
    // Each arr/obj has four buttons that operate as your multiple choice and they each trigger a function
    // to move onto the next question while also returning your answer as right or wrong.