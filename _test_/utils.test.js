import { username, saveUserName, increaseScore, score, clearScore } from "../js/utils";

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

// Grouping tests for clearScore function
describe("clearScore", () => {
  test("should reset the score to 0", () => {
    increaseScore(true); 
    clearScore(); 
    expect(score).toBe(0);
  });
});
