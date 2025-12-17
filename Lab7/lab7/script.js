const startBtn = document.getElementById("startBtn");//start button 
const startContainer = document.getElementById("startContainer");//start container 
const quizContainer = document.getElementById("quizContainer");//quiz container 
const questionBox = document.getElementById("questionBox");//question box 
const resultContainer = document.getElementById("resultContainer");//result container 


//variables 
let userName = "";
let current = 0;
let score = 0;
let timer = 60;
let countdown;


//questions 
const questions = [
  { q: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Rome"],
     answer: "Paris" },
  { q: "Which planet is known as the Red Planet?", 
    options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { q: "What is 5 × 6?", options: ["30", "35", "40", "25"], answer: "30" },
  { q: "Who wrote 'Romeo and Juliet'?", 
    options: ["Shakespeare", "Hemingway", "Austen", "Dickens"], answer: "Shakespeare" },
  { q: "What gas do plants absorb from the atmosphere?", 
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], 
    answer: "Carbon Dioxide" },
 
];

//generate 5 random questions 
const selected = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

//start quiz - by click button 
startBtn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const error = document.getElementById("errorMsg");

  if (fname === "" || lname === "") {
    error.textContent = "Please enter first name and last name.";
    return;
  }

  userName = `${fname} ${lname}`;
  document.getElementById("welcome").textContent = `Hello, ${userName}!`;

  //hide start , show quiz container 
  startContainer.style.display = "none";
  quizContainer.style.display = "block";

  startQuiz();
});

function startQuiz() {
  score = 0;
  current = 0;
  timer = 60; // 60 second - timer 

  countdown = setInterval(() => {
    document.getElementById("timer").textContent = `⏰ ${timer}s`;
    timer--;
    if (timer < 0) {
      clearInterval(countdown);
      showResult();
    }
  }, 1000);

  loadQuestion();
}

//load questions and options 
function loadQuestion() {
  const q = selected[current];
  questionBox.innerHTML = `
    <div class="question">${current + 1}. ${q.q}</div>
    <ul class="options">
      ${q.options
        .map(opt => `<li onclick="selectOption('${opt}', '${q.answer}')">${opt}</li>`)
        .join("")}
    </ul>
  `;
}

//option - selection 
window.selectOption = function(selectedOpt, correct) {
  const options = document.querySelectorAll(".options li");
  options.forEach(li => li.style.pointerEvents = "none");

  if (selectedOpt === correct) {
    score++;
    event.target.style.background = "#b2f7b2";
  } else {
    event.target.style.background = "#f7b2b2";
    options.forEach(li => {
      if (li.textContent === correct) li.style.background = "#b2f7b2";
    });
  }

  // if time out or last question 
  setTimeout(() => {
    current++;
    if (current < selected.length) loadQuestion();
    else showResult();
  }, 1000);
};

//to show result of user 
function showResult() {
  clearInterval(countdown);
  questionBox.innerHTML = "";
  resultContainer.innerHTML = `
    <h2>Your Score: ${score} / ${selected.length}</h2>
    <p>Thank you for playing this quiz, ${userName}!</p>
  `;
}

