const startButton1 = document.getElementById('start');
const startButton= document.getElementById('cli');
startButton.addEventListener('click', startit);

function startit(){
  dis=document.getElementById("startdis");
  dis.style.display="block";
  startButton1.style.display="none";
  startQuiz;
}
const questions = [
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "North-America", correct: false },
        { text: "Africa", correct: false },
      ],
    },
    {
      question:
        "What is the largest ocean on Earth?",
      answers: [
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Atlantic Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
      ],
    },
    {
      question:
        " Who was the first Prime Minister of India?",
      answers: [
        { text: "Jawaharlal Nehru", correct: true },
        { text: "Mahatma Gandhi", correct: false},
        { text: "Sardar Vallabhbhai Patel", correct: false },
        { text: "Indira Gandhi", correct: false },
      ],
    },
    {
      question:
        "Which river is considered the holiest in Hinduism?",
      answers: [
        { text: "Ganges", correct: true},
        { text: "Yamuna",correct: false},
        { text: "Brahmaputra", correct: false },
        { text: "Godavari", correct: false },
      ],
    },
    {
      question:
        "Which city is known as the Pink City of India?",
      answers: [
        { text: "Jaipur", correct: true },
        { text: "Delhi",correct: false},
        { text: "Agra", correct: false },
        { text: "Mumbai", correct: false },
      ],
    },
    {
      question:
        "What is the largest state in India by area?",
      answers: [
        { text: "Maharashtra", correct: false },
        { text: "Delhi",correct: false},
        { text: "Rajasthan", correct: true},
        { text: "Mumbai", correct: false },
      ],
    },
    {
      question:
        "Who is known as the Father of the Indian Constitution?",
      answers: [
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Mahatma Gandhi",correct: false},
        { text: "B.R. Ambedkar", correct: true },
        { text: "Sardar Vallabhbhai Patel", correct: false },
      ],
    },
    {
      question:
        "Which festival marks the victory of good over evil and is celebrated by lighting lamps?",
      answers: [
        { text: "Diwali", correct: true },
        { text: "Dussehra",correct: false},
        { text: "Holi", correct: false },
        { text: "Navratri", correct: false },
      ],
    },
    {
      question:
        "Who was the first woman Prime Minister of India?",
      answers: [
        { text: "Sarojini Naidu", correct: false },
        { text: "Mother Teresa",correct: false},
        { text: "Indira Gandhi", correct: true },
        { text: "Sonia Gandhi", correct: false },
      ],
    },
    {
      question:
        "Who was the first Indian to win the Nobel Prize?",
      answers: [
        { text: "C.V. Raman", correct: false },
        { text: "Rabindranath Tagore",correct: true},
        { text: "Mother Teresa", correct: false },
        { text: "Amartya Sen", correct: false },
      ],
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");


  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
  
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
  
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  startQuiz();