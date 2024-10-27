import { username, saveUserName, increaseScore } from "./utils.js";
import { quizQuestions } from "./quizQuestions.js";

// Get elements from HTML
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextQuestionBtn = document.getElementById("submit");
const startQuizBtn = document.getElementById("start-quiz");

// Shuffle and limit the quizQuestions array
const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random());
const limitedQuestions = shuffledQuestions.slice(0, 5);

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = limitedQuestions[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.options[0];
  b_text.innerText = currentQuizData.options[1];
  c_text.innerText = currentQuizData.options[2];
  d_text.innerText = currentQuizData.options[3];
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

startQuizBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  saveUserName(name);
  localStorage.setItem("username", name);
  document.getElementById("start-page").style.display = "none";
  quiz.style.display = "flex";
  document.getElementById(
    "welcome-message"
  ).textContent = `Good luck, ${name}!`;
  loadQuiz();
});


nextQuestionBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    const isCorrect = answer === limitedQuestions[currentQuiz].answer;
    score = increaseScore(isCorrect);

    currentQuiz++;

    if (currentQuiz < limitedQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                 <h2>You answered ${score}/${limitedQuestions.length} questions correctly</h2>
                <button onclick="location.reload()">Restart Quiz</button>
            `;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.getElementById("start-quiz");
  const nameInput = document.getElementById("name");
  const welcomeMessage = document.getElementById("welcome-message");

  startQuizButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting

    // Check if the name input is empty
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
    } else {
      // Set the welcome message and proceed to quiz
      welcomeMessage.textContent = `Welcome, ${nameInput.value}! Let's begin the quiz.`;
      
      // Hide the start page and show the quiz page
      document.getElementById("start-page").style.display = "none";
      document.getElementById("quiz").style.display = "block";
    }
  });
});

