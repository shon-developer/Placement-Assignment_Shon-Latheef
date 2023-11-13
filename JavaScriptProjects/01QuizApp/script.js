const questions = [
  {
    question: "What is your name?",
    options: ["Zareel", "Shon", "Shine", "Melvina"],
    answer: "Shon",
  },
  {
    question: "What is the color of your eyes?",
    options: ["Blue", "Dark Brown", "Green", "Black"],
    answer: "Dark Brown",
  },
  {
    question: "How many planets are there in the solar system?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What does BBC stands for?",
    options: [
      "British BroadCasting Corporation",
      "Business Based Company",
      "Basic Bio Commitee",
      "Melvina",
    ],
    answer: "British BroadCasting Corporation",
  },
  {
    question: "What nut is used to make marzipan?",
    options: ["Pista", "Almond", "Walnut", "Cashewnut"],
    answer: "Almond",
  },
  {
    question: "What element does 'O' represent on the periodic table?",
    options: ["Oxalic acid", "Ozone", "Orion", "Oxygen"],
    answer: "Oxygen",
  },
  {
    question: "How many makes up a baker's dozen?",
    options: ["11", "12", "13", "14"],
    answer: "12",
  },
  {
    question: "How many letters in the word hippopotamus?",
    options: ["11", "12", "13", "14"],
    answer: "12",
  },
];

const questionElement = document.querySelector("#question");
const choices = document.querySelector("#choices");
const nextButton = document.querySelector("#nextButton");
const displayScore = document.querySelector("#score");

let currentQuestion;
let index;
let score;

// function to start quiz

const startQuiz = () => {
  index = 0;
  score = 0;

  nextButton.innerHTML = "Next";
  showQuestion();
};

// function to showQuestion
// create random question and assign it to question element
// display the question in the browser
const showQuestion = () => {
  resetState();
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  console.log(currentQuestion);
  const questionNumber = index + 1;
  questionElement.innerHTML = ` ${questionNumber}. ${currentQuestion.question}`;
  displayScore.innerHTML = score;

  currentQuestion.options.forEach((option) => {
    let button = document.createElement("button");
    button.innerHTML = option;
    choices.appendChild(button);
    button.addEventListener("click", selectAnAnswer);
  });
};

// function resetState
const resetState = () => {
  nextButton.style.display = "none";
  while (choices.firstChild) {
    choices.firstChild.remove();
  }
};

// function to select an answer
const selectAnAnswer = (e) => {
  const selectAnAnswer = e.target;
  const selectedAnswer = selectAnAnswer.innerHTML;
  console.log(selectedAnswer);
  isCorrect = selectedAnswer === currentQuestion.answer;
  if (isCorrect) {
    score++;
  }
  nextButton.style.display = "block";
};

// function to show score
const showScore = () => {
  questionElement.innerHTML = `You have scored ${score} out of 5`;
  nextButton.innerHTML = "Restart Quiz";
  displayScore.innerHTML = score;
  nextButton.style.display = "block";
};

// function to handle nextButton
const handleNextButton = () => {
  index++;
  if (index < 5) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (index < 5) {
    handleNextButton();
  } else {
    showScore();
  }
});

startQuiz();
