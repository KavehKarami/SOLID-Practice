// NOTE Without Open-Close Principles:
// FIXME if we're gonna add another questions type, we gotta change our printQuiz implementation (violation in close for modificcation)

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);

    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;

      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;

      case "text":
        console.log("Answer: --------------------");
        break;

      // case "range":
      //   console.log("Min: --------------------");
      //   console.log("Max: --------------------");
      //   break;
    }

    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "this pattern is useful",
  },
  {
    type: "multipleChoice",
    description: "what is your favorite language?",
    options: ["JS", "C++", "JAVA", "Python", "Ruby"],
  },
  {
    type: "text",
    description: "Lorem ipsum dolor sit amet.",
  },
  // {
  //   type: "range",
  //   description: "what is the speed limit in your city?",
  // },
];

printQuiz(questions);
