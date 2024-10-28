const quizQuestions = [
  {
    question: "What is the primary purpose of unit testing?",
    options: [
      "To test the entire application",
      "To validate individual components or functions",
      "To check user interface design",
      "To assess performance under load",
    ],
    answer: "b",
  },
  {
    question:
      "Which JavaScript method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.convert()",
    ],
    answer: "a",
  },
  {
    question:
      "In CSS, which property is used to change the text color of an element?",
    options: ["font-color", "color", "text-color", "background-color"],
    answer: "b",
  },
  {
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "b",
  },
  {
    question: "What is a common JavaScript testing framework?",
    options: ["React", "Angular", "Jest", "Bootstrap"],
    answer: "c",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "a",
  },
  {
    question:
      "In HTML5, which attribute is used to specify that an input field must be filled out before submitting a form?",
    options: ["required", "validate", "mandatory", "must-fill"],
    answer: "a",
  },
  {
    question:
      "Which of the following is a way to select an element with the class name 'example' in CSS?",
    options: ["#example", ".example", "*example", "example"],
    answer: "b",
  },

  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HomeTool Markup Language",
      "HyperLink and Text Markup Language",
    ],
    answer: "a",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<stylesheet>"],
    answer: "c",
  },

  {
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "background-color", "color", "background"],
    answer: "b",
  },
  {
    question: "How do you add a border to an element?",
    options: [
      "border: 1px solid black;",
      "outline: 1px solid black;",
      "border-style: solid black;",
      "border-width: 1px;",
    ],
    answer: "a",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    answer: "d",
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "b",
  },
  {
    question: "Which tool is used for unit testing in JavaScript?",
    options: ["Jest", "React", "Bootstrap", "Express"],
    answer: "a",
  },
  {
    question: "What is a test suite?",
    options: [
      "A. A single test case",
      "B. A collection of test cases",
      "C. A tool for running tests",
      "D. A file for storing tests",
    ],
    answer: "b",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<head>", "<title>", "<meta>", "<header>"],
    answer: "b",
  },
  {
    question: "What is the purpose of the `defer` attribute in a script tag?",
    options: [
      "To load the script before the page loads",
      "To run the script after the page has finished loading",
      "To load the script in parallel with the page loading",
      "To ensure the script runs immediately",
    ],
    answer: "b",
  },
  {
    question: "Which CSS property controls the spacing between words?",
    options: ["word-spacing", "letter-spacing", "line-height", "text-spacing"],
    answer: "a",
  },
  {
    question: "What is the default value of the `position` property in CSS?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "d",
  },
  {
    question:
      "In JavaScript, what will the following code output: `console.log(typeof null)`?",
    options: ["object", "null", "undefined", "string"],
    answer: "a",
  },
  {
    question:
      "Which method would you use to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "slice()", "splice()"],
    answer: "a",
  },
  {
    question: "What does the `this` keyword refer to in JavaScript?",
    options: [
      "The global object",
      "The current function context",
      "The previous function context",
      "The window object",
    ],
    answer: "b",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Flask", "Angular", "Ruby on Rails"],
    answer: "c",
  },
  {
    question: "In CSS, what does the `!important` rule do?",
    options: [
      "It increases the specificity of a style rule",
      "It makes a style rule less important",
      "It applies a style rule to all elements",
      "It prevents any other style rules from overriding it",
    ],
    answer: "d",
  },
  {
    question: "Which of the following is used to make a web page responsive?",
    options: ["Media Queries", "Flexbox", "CSS Grid", "All of the above"],
    answer: "d",
  },
  {
    question: "What is Jest primarily used for?",
    options: [
      "End-to-end testing",
      "Unit testing",
      "Performance testing",
      "Integration testing",
    ],
    answer: "b",
  },
  {
    question: "Which command is used to run Jest tests?",
    options: ["jest run", "npm test", "jest start", "npm jest"],
    answer: "b",
  },
  {
    question: "How do you mock a function in Jest?",
    options: ["jest.mock()", "jest.spyOn()", "jest.fn()", "All of the above"],
    answer: "d",
  },
  {
    question: "What does the `test` function in Jest do?",
    options: [
      "Defines a single test case",
      "Runs all tests in a file",
      "Groups related tests",
      "Mocks a function",
    ],
    answer: "a",
  },
  {
    question: "How can you set up a global configuration for Jest?",
    options: [
      "In the Jest settings in package.json",
      "In a jest.config.js file",
      "Using a .babelrc file",
      "Both a and b",
    ],
    answer: "d",
  },
  {
    question: "What is the purpose of `beforeEach` in Jest?",
    options: [
      "Runs a function after each test",
      "Runs a function before all tests",
      "Runs a function before each test",
      "Skips a test",
    ],
    answer: "c",
  },
  {
    question:
      "Which method can you use to assert that a value is true in Jest?",
    options: [
      "expect.toBeTruthy()",
      "expect.true()",
      "expect.isTrue()",
      "expect.toBeTrue()",
    ],
    answer: "a",
  },
  {
    question: "How do you test for an error being thrown in Jest?",
    options: [
      "expect(() => { throw new Error() }).toThrow()",
      "expect.toThrow()",
      "expect.throws()",
      "expect.error()",
    ],
    answer: "a",
  },
  {
    question: "What does the `afterAll` function do in Jest?",
    options: [
      "Runs a function after each test",
      "Runs a function after all tests in a file",
      "Runs a function before each test",
      "Runs a function before all tests",
    ],
    answer: "b",
  },
  {
    question: "Which command is used to generate a coverage report in Jest?",
    options: [
      "jest --coverage",
      "npm run coverage",
      "jest --report-coverage",
      "npm test --coverage",
    ],
    answer: "a",
  },
];

export { quizQuestions };
