let username = "";
let score = 0;

function saveUserName(name) {
  if (typeof name !== "string") {
    throw new Error("Enter valid name");
  }
  if (!name.trim()) {
    throw new Error("Name is required");
  }
  username = name.trim();
}

function increaseScore(isCorrect) {
  if (isCorrect) {
    score += 1;
  }
  return score;
}

function clearScore (){
    score = 0
}

export { username, saveUserName, increaseScore, score , clearScore};
