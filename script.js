import { username, saveUserName } from "./utils.js";
import { quizQuestions } from "./quizQuestions.js";

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const startQuiz = document.getElementById("start-quiz")
const form = document.querySelector(".form")



// Shuffle the quizQuestions array
const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random());

// Limit the number of questions to 5
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
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
startQuiz.addEventListener("click", (e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value;
    saveUserName(name);
    localStorage.setItem("userName", name)
    form.style.display = "none";
    quiz.style.display = "block"


})

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === limitedQuestions[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < limitedQuestions.length) {
            loadQuiz();
        } else {
            let message = '';
            if (score === 5) {
                message = "Perfect score! Excellent job! 🏆";
            } else if (score >= 3) {
                message = "Well done! Good effort! 👏";
            } else {
                message = "Keep practicing! You can do better! 💪";
            }
            quiz.innerHTML = `
                <h2>Quiz Complete!</h2>
                <h2>You answered ${score}/${limitedQuestions.length} questions correctly</h2>
                <p>${message}</p>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
