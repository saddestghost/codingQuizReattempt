// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

let button = document.querySelector("#btn")
let time = 60;
let timeInterval;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() { }
function displayResults() { }
function startQuiz() {
  
    const output = [];
    myQuestions.forEach(
        (CurrentQuestion, questionNumber) => {
            const answers = [];
            for(letter in CurrentQuestion.answers){
                answers.push(
                    <label>
                        <input type ="radio" name="questions${quesionNumber}" value="${letter}"></input>
                        ${letter} :
                        ${CurrentQuestion.answers[letter]}
                    </label>
                )
            }
        }
    )

    timeInterval = setInterval(function () {

        time = time - 1;
        document.querySelector(".timer").textContent = time;
        if (time === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)
}

button.addEventListener("click", startQuiz)

const myQuestions = [
    {
        question: "What is half of 99?",
        answers: {
            a: "92",
            b: "49.5",
            c: "I don't understand the question",
        },

        correctAnswer: "a",
    },
    {
        question: "What is the maximum total level achievable?",
        answers: {
            a: "1500",
            b: "2200",
            c: "2277",
        },

        correctAnswer: "c",
    },
    {
        question: "What is the name of the most recently added God Wars Dungeon boss?",
        answers: {
            a: "General Graardor",
            b: "Nex",
            c: "Saradomin",
        },
        correctAnswer: "b",
    }
];

