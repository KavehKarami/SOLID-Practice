// REVIEW With Open-Close Principles:
// REVIEW we never had to touch pritQuiz, this was closed, but it was open to be extended
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

// REVIEW instead of changing code, you create a new code, is gonna work with your old code
class Question {
  constructor(description) {
    this.description = description;
  }
}

class BooleanQuestion extends Question {
  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion extends Question {
  constructor(description, options) {
    super(description);
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}
class TextQuestion extends Question {
  printQuestionChoices() {
    console.log("Answer: --------------------");
  }
}

class RangeQuestion extends Question {
  printQuestionChoices() {
    console.log("Min: --------------------");
    console.log("Max: --------------------");
  }
}

/* -------------------------------------------------------------------------- */

const questions = [
  new BooleanQuestion("this pattern is useful"),
  new MultipleChoiceQuestion("what is your favorite language?", [
    "JS",
    "C++",
    "JAVA",
    "Python",
    "Ruby",
  ]),
  new TextQuestion("Lorem ipsum dolor sit amet."),
  new RangeQuestion("what is the speed limit in your city?"),
];

printQuiz(questions);
