import { quizQuestions } from "../js/quizQuestions";
import { username, saveUserName, increaseScore, score, clearScore, answerSelected,currentQuiz, randomizeQuestion, answer, clearQuiz, limitedQuestions } from "../js/utils";

//Tests for saveUserName function
describe("saveUserName", () => {
  beforeEach(() => {
// Reset username before each test
    clearScore();
  });

  test("should save the trimmed username when a valid name is provided", () => {
    saveUserName(" Phakamani ");
    expect(username).toBe("Phakamani");
  });

  test("if the name is not a string it should throw an error", () => {
    expect(() => saveUserName(123)).toThrow("Enter valid name");
  });

  test("should throw an error if name is an empty string", () => {
    expect(() => saveUserName("")).toThrow("Name is required");
  });
});

// Test for increaseScore function
describe("increaseScore", () => {
  beforeEach(() => {
// Reset score before each test
    clearScore();
 });

  test("should increase the score by 1 if answer is correct", () => {
    increaseScore(true);
    expect(score).toBe(1);
  });

  test("should not increase the score if answer is incorrect", () => {
    increaseScore(false);
    expect(score).toBe(0);
  });

 test("should keep increasing score for multiple correct answers", () => {
    increaseScore(true);
    increaseScore(true);
    expect(score).toBe(2);
  });
});

describe ("answerSelected", () =>{
  beforeEach(()=>{
    clearQuiz()
  })
  test("if the answer is selected the currentQuiz should increase", () =>{
    answerSelected(true)
    expect(currentQuiz).toBe(1)
  })
  // test("current quiz question remains the same", () =>{
  //   const answerSelected = answerSelected(false)
  //   expect(answerSelected).toBe(0)
  // })

  test("increament current quiz when selected answer fo multiple Question", () =>{
    answerSelected(true)
    answerSelected(true)
    expect(currentQuiz).toBe(2)
  })

  test("if the answer is not selected throw error", () =>{
    
    expect(()=>answerSelected(false)).toThrow("Select the answer");
  })
  
  
})

describe ("randomizeQuestion", () =>{
  beforeEach(() =>{
    // limitedQuestions = [];
  })

  test("it should return 5 questions", () =>{
    randomizeQuestion();
    expect(randomizeQuestion.length).toBe(0);
  })
})

// Grouping tests for clearScore function
describe("clearScore", () => {
  test("should reset the score to 0", () => {
    increaseScore(true); 
    clearScore(); 
    expect(score).toBe(0);
  });
});
