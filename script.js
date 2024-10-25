import {username ,saveUserName } from "./utils.js";
import { quizQuestions } from "./quizQuestions.js";

// console.log(quizQuestions)

// localStorage.setItem("username",username)

// let getName =localStorage.getItem("username")

// document.addEventListener('DOMContentLoaded', () => {
//     const landingPage = document.getElementById('landing-page');
//     const loginPage = document.getElementById('login-page');
//     const welcomePage = document.getElementById('welcome-page');
//     const quizPage = document.getElementById('quiz-page');
 
//     const startBtn = document.getElementById('start-btn');
//     const loginForm = document.getElementById('login-form');
//     const startQuizBtn = document.getElementById('start-quiz-btn');
//     const welcomeMsg = document.getElementById('welcome-msg');
 
//     // Show Login/Signup Page after clicking Start
//     startBtn.addEventListener('click', () => {
//       landingPage.style.display = 'none';
//       loginPage.style.display = 'block';
//     });
 
//     // Step 2: Show Welcome Page with User's Name
//     loginForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const username = document.getElementById('username').value;
     
//       if (username) {
//         loginPage.style.display = 'none';
//         welcomePage.style.display = 'block';
//         welcomeMsg.textContent = `Welcome, ${username}!`;
//       }
//     });
 
//     // Step 3: Start Quiz After Login
//     startQuizBtn.addEventListener('click', () => {
//       welcomePage.style.display = 'none';
//       quizPage.style.display = 'block';
//     });
//   });
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})