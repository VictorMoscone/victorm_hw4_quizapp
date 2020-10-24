let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");
let cardBody = document.querySelector("#cardBody");

let questionOne = [
    "When would you use an Array instead of an Object?", 
    "When wanting to have the properties in order.",
    "When wanting to use a function.",
    "When you need different types of data.",
    "All of the above."]

startBtn.addEventListener("click", quizStart)
    // How we'll begin our quiz off of the Start button.

function resetQuestion() {
    // Anything we need to dumb in here to reset each question.
    startBtn.style.display = "none";
    // This hides the start button shown on initial page load and quiz completion.
    cardText.style.display = "none";
    // This hides the introductory quiz text once the quiz starts.
}

function quizStart() {
    resetQuestion();
    titleText.textContent = questionOne[0]
    populateQuestion();
}

function populateQuestion() {
    createQButton(questionOne);
}

function createQButton(arrayName) {
    for (let i = 0; i < 4; i++) {
        let divCreate = document.createElement("div");
        // divCreate creates a div.
        divCreate.setAttribute("id", "questionButton");
        // divCreated divs have the idea of questionButton.
        cardBody.appendChild(divCreate);
        // We create the divs inside cardBody.
        let createBtn = document.createElement("BUTTON");
        // createBtn creates a button element.
        createBtn.innerHTML = arrayName[i + 1];
        // createBtn created buttons have the inner HTML matching the respective question's answer.
        let qBtn = document.querySelector("#questionButton");
        // qBtn finds all elements with the questionButton id.
        qBtn.appendChild(createBtn);
        console.log("hey") 
    }
}

// Notes to self, and don't forget to delete these this time:
    // I'm thinking each question is an array or object.
    // Each arr/obj has four buttons that operate as your multiple choice and they each trigger a function
    // to move onto the next question while also returning your answer as right or wrong.