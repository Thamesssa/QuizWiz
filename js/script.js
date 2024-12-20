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
let limitedQuestions;
if (localStorage.getItem("limitedQuestions")) {
  limitedQuestions = JSON.parse(localStorage.getItem("limitedQuestions"));
} else {
  const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random());
  limitedQuestions = shuffledQuestions.slice(0, 5);
  localStorage.setItem("limitedQuestions", JSON.stringify(limitedQuestions));
}

let currentQuiz = parseInt(localStorage.getItem("currentQuiz")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let savedName = localStorage.getItem("name");

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

//function to start the quiz and validate the name
function startQuiz() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Enter valid name");
    return;
  }

  saveUserName(name);
  localStorage.setItem("name", name);

  document.getElementById("start-page").style.display = "none";
  quiz.style.display = "flex";
  document.getElementById(
    "welcome-message"
  ).textContent = `Welcome ${name}, You may Begin`;

  loadQuiz();
}

//function  controlling the flow of the the quiz
function nextQuestion() {
  const answer = getSelected();

  //checks if answer is selected
  if (!answer) {
    alert('Please choose an answer before proceeding.');
    return; 
  }

  

  if (answer) {
    //update the score and move to the question
    const isCorrect = answer === limitedQuestions[currentQuiz].answer;
    const name = document.getElementById("name").value;
    score = increaseScore(isCorrect);
    localStorage.setItem("score", score);

    
    document.getElementById(
      "welcome-message"
    ).textContent = `Goodluck ${name}`;
  
    
    
    currentQuiz++;
    localStorage.setItem("currentQuiz", currentQuiz);

    
    if (currentQuiz < limitedQuestions.length) {
      loadQuiz();
    } else {
      displayResults();
    }
  }
}

//button for starting the quiz the quiz
startQuizBtn.addEventListener("click", (e) => {
  e.preventDefault();
  startQuiz();
});

nextQuestionBtn.addEventListener("click", nextQuestion);


//function to display the results at the end of the all the question answered
function displayResults() {
  let message = "";
  if (score === 5) {
    message = "Perfect score! Excellent job! 🏆";
  } else if (score >= 3) {
    message = "Well done! Good effort! 👏";
  } else {
    message = "Keep practicing! You can do better! 💪";
  }

  quiz.innerHTML = `
  <div class="quiz-complete"
      <h2>Quiz Complete!</h2>
      <h2>You answered ${score}/${limitedQuestions.length} questions correctly</h2>
      <p>${message}</p>
      <button onclick="location.reload();">Restart Quiz</button>
      </div>
  `;

  localStorage.clear();
}

//load the previous state of the quiz
window.addEventListener("DOMContentLoaded", () => {
  if (savedName) {
    document.getElementById("start-page").style.display = "none";
    quiz.style.display = "flex";
    document.getElementById(
      "welcome-message"
    ).textContent = `Welcome back, ${savedName}! Let's continue the quiz.`;
    loadQuiz();
  }
});
