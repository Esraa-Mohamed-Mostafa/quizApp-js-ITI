const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Madrid", "Paris", "Rome"], "correctAnswer": "Paris",
        timeLimit: 20
    }, {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"], "correctAnswer": "Mars",
        timeLimit: 15
    }, {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain"
        ],
        correctAnswer: "William Shakespeare", "timeLimit": 25
    }, {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"], "correctAnswer": "Blue Whale",
        timeLimit: 30
    }, {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], "correctAnswer": "Carbon Dioxide",
        timeLimit: 18
    }]

let index = 0
let rightAnswers = 0;


let quizContent = document.querySelector(".quizContent")
let quizHeader = document.querySelector(".quizHeader");
let quizQuestion = document.querySelector(".quizQuestion");
let quizAnswer = document.querySelector(".quizAnswer");
let submit = document.querySelector(".submit");
let down = document.querySelector(".down");
let results = document.querySelector(".results");
let radioButtons = document.querySelectorAll("input");
//let radioButtons = document.querySelectorAll('input[name="answer"]');
//console.log(radioButtons);

addQuestion()

function addQuestion() {
    if (index < quizData.length) {
        let headerEle = document.createElement("h2");
        let headerTxt = document.createTextNode(`Question ${index + 1} of 5`);
        headerEle.appendChild(headerTxt)
        quizHeader.appendChild(headerEle)

        let questionEle = document.createElement("p");
        let questionTxt = document.createTextNode(quizData[index].question);
        //console.log(quizData[index].question);
        questionEle.className = "questionClass"
        questionEle.appendChild(questionTxt);
        quizQuestion.appendChild(questionEle);

        down.textContent = quizData[index].timeLimit;

        for (let i = 0; i < radioButtons.length; i++) {

            radioButtons[i].value = quizData[index].options[i];
            let label = document.querySelector(`label[for="${radioButtons[i].id}"]`);
            label.textContent = quizData[index].options[i];
            //console.log(radioButtons[i].value);
            // console.log(quizData[i].timeLimit);
        }
        startTimer(quizData[index].timeLimit);
    }
}

var sum = 0
submit.addEventListener("click", submitFinc)
function submitFinc() {
    sum += quizData[index].timeLimit - timeLeft;
    //sum+=timeLeft
    //console.log(sum);
    clearInterval(timer);
    let correct = quizData[index].correctAnswer;
    index++;
    selectedAnswer(correct);
    quizHeader.innerHTML = "";
    quizQuestion.innerHTML = "";
    clearRadioButtons();
    addQuestion();
    showResults();
}

function selectedAnswer(correct) {
    const selected = document.querySelector('input:checked')
    if (selected) {
        const choosen = selected.value;
        if (choosen == correct) {
            rightAnswers++;
        }
        // console.log(correct);
        // console.log(choosen);
        // console.log(rightAnswers);
    }
}

function showResults() {
    if (index === quizData.length) {
        quizQuestion.remove();
        quizAnswer.remove();
        submit.remove();
        down.remove();
        if (rightAnswers < 4) {
            results.innerHTML =
                `<h2>You have completed the Quiz ! </h2>
                <h2> and <span class="red">sorry </span>, You answered ${rightAnswers} from ${quizData.length} Question </h2><h2> Total time:${sum} seconds </h2>`;
        }
        else {
            results.innerHTML =
                `<h2>You have completed the Quiz ! </h2>
            <h2> <span class="green">Congratulation</span> , You answered ${rightAnswers} from ${quizData.length} Question </h2><h2> Total time:${sum} seconds </h2>`;
        };
    }
}


var timeLeft
function startTimer(timeLimit) {
    //console.log(quizData[index].timeLimit);
    timeLeft = timeLimit;
    down.textContent = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        down.textContent = timeLeft;

        if (timeLeft == 0) {
            clearInterval(timer);
            submitFinc();
        }
    }, 1000);
}

function clearRadioButtons() {
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
}