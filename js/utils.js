let username = [];
let score = 0;
let answer ;
let currentQuiz = 0;
let limitedQuestions=[];
import { quizQuestions } from "./quizQuestions.js";


//Function to validate the name of the player
function saveUserName(name) {
  if (typeof name !== "string") {
    throw new Error("Enter valid name");
  }
  if (!name.trim()) {
    throw new Error("Name is required");
  }
  username = name.trim();
}

//function to increase the score depending on the answer
function increaseScore(isCorrect) {
  if (isCorrect) {
    score += 1;
  }
  return score;
}


function randomizeQuestion(){
  const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random());
  limitedQuestions = shuffledQuestions.slice(0, 5);
  console.log(quizQuestions.length)
}

function answerSelected(answer){
  if(answer===true){
    currentQuiz++
    
  }
  else{
    currentQuiz = currentQuiz
   throw new Error("Select the answer")
  }
  
}




//function to clear score, used for testing purposes
function clearScore (){
    score = 0
}
function clearQuiz (){
  currentQuiz= 0
}

randomizeQuestion()
export { username, saveUserName, increaseScore, score , clearScore,randomizeQuestion,limitedQuestions, answer, answerSelected,currentQuiz, clearQuiz};
