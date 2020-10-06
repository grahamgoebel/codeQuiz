// // variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

function startQuiz() {
var initializeQuiz = document.getElementById("start-screen")
initializeQuiz.setAttribute("class", "hide");
timerId.setInterval(clockTick, 1000)
timerEl.textContent = time
getQuestion()
}
// timer function
function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }
startBtn.onclick = startQuiz;

var createQuestion = document.getElementById("question-title")
createQuestion.setAttribute("class", "start");
myQuestions (i = 0);

