let startBtn = document.querySelector("#startBtn");
let cardText = document.querySelector("#cardText");
let titleText = document.querySelector("#titleText");
let cardBody = document.querySelector("#cardBody");
let timer = document.querySelector("#timer");
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
    ],
    questionFour = [
        "What's the difference between ID and Class?",
        "Class is primarily used in CSS.",
        "IDs can only be constructed with digits.",
        "JQuery doesn't support Classes.",
        "You can use an ID only once."
    ],
]

let answerKey = ["button1", "button3", "button2", "button4"]

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
    timer.textContent = 10;
    // Starts the clock at X seconds.
    let myfunc = setInterval(function() {
        timer.textContent--
        if (timer.textContent < 1 || questionCount >= questionList.length) {
            clearInterval(myfunc);
            timer.textContent = "Game Over!"
            gameOver();
            // will clear the interval and display Game Over! when falling below 1 second or reaching the end.
        }
    }, 1000)
    // Every 1000 milliseconds, 1 second - the set interval will trigger.
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
    let hrCreate = document.createElement("hr");
    hrCreate.setAttribute("id", "hrrightWrong");
    hrCreate.style.display = "none";
    cardBody.appendChild(hrCreate);
    let pCreate = document.createElement("p");
    pCreate.setAttribute("id", "prightWrong");
    pCreate.style.display = "none";
    cardBody.appendChild(pCreate);
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
        notification("right");
    } else {
        timer.textContent-=3
        notification("wrong");
    }
    questionCount++
    // This indicates that we're moving up a question.
    if (questionCount < questionList.length) {
        nextQuestion(questionCount);
    } else {
        gameOver();
        // Slight redudancy since the timer uses gameOver also. This is for a more immediate game over screen.
    }   
}

function notification(rightWrong) {
    // This function displays the notification of whether your answer was right or wrong.
    if (rightWrong == "right") {
        notifTimer();
        document.querySelector("#prightWrong").textContent = "Correct!";
    } else {
        notifTimer();
        document.querySelector("#prightWrong").textContent = "Wrong!";
    }
}

function notifTimer() {
    // This function limits how long the notification is on screen.
    document.querySelector("#hrrightWrong").style.display = "block";
    document.querySelector("#prightWrong").style.display = "block";
    let thisTimer = setInterval(function() {
        document.querySelector("#hrrightWrong").style.display = "none";
        document.querySelector("#prightWrong").style.display = "none";
    }, 2000)
}

function gameOver() {
    titleText.textContent = "All done!";
    // findButtons();
    // button1.remove();
    // button2.remove();
    // button3.remove();
    // button4.remove();
    // let abo = document.querySelector("br");
    cardText.style.display = "block";
    cardText.textContent = "Your Score: " + score
}

startBtn.addEventListener("click", quizStart);
    // How we'll begin our quiz off of the Start button.