const list = [
  {
    question: "what is 2 + 2",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "6",
        correct: false,
      },
      {
        text: "7",
        correct: false,
      },
    ],
  },
  {
    question: "what is 2 + 3",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "6",
        correct: false,
      },
      {
        text: "7",
        correct: false,
      },
    ],
  },
  {
    question: "what is 3 + 2",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "6",
        correct: false,
      },
      {
        text: "7",
        correct: false,
      },
    ],
  },
];

let shuffledQuestions;
let currentQuestionIndex;

//start
function startGame() {
  questionContainer.classList.remove("hide");
  nextBtn.classList.remove("hide");
  startBtn.classList.add("hide");

  shuffledQuestions = list.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  restQuestion();
  setNextQuestion();
}

// set next question
function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// show
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((item) => {
    console.log(item);
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = item.text;
    if (item.correct) {
      btn.dataset.correct = item.correct;
    }

    btn.addEventListener("click", selectedAns);
    answersbuttonsElement.appendChild(btn);
  });
}

// rest questions
function restQuestion() {
  nextBtn.classList.add("hide");
  questionElement.innerHTML = "";
  answersbuttonsElement.innerHTML = "";
}

// selected ans
function selectedAns(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  //true else undiefined
  setSatusClass(document.body, correct);
  Array.from(answersbuttonsElement.children).forEach((ele) => {
    setSatusClass(ele, ele.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    nextBtn.innerText = "Restart";
    nextBtn.classList.remove("hide");
  }
}

function setSatusClass(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questionElement = document.getElementById("question");
const answersbuttonsElement = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("question-container");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  restQuestion();
  setNextQuestion();
});
