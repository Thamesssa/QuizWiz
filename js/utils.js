let username = "";
let score = 0;


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


//function to clear score, used for testing purposes
function clearScore (){
    score = 0
}

export { username, saveUserName, increaseScore, score , clearScore};
