let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");

startBtn.addEventListener("click", quizStart)
    // How we'll begin our quiz off of the Start button.

function quizStart() {
    titleText.textContent = "Question 1"
    cardText.textContent = "Do you got this?";
}

// Notes to self, and don't forget to delete these this time:
    // I'm thinking each question is an array or object.
    // Each arr/obj has four buttons that operate as your multiple choice and they each trigger a function
    // to move onto the next question while also returning your answer as right or wrong.