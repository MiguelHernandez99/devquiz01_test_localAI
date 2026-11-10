// DevQuiz - Logica para questions ya cargadas en scope (quiz.js)

// Carga directo el objeto de preguntas que viene desde window
/* Evitar re-definir questions: usar solo lo cargado vía window */

// Variables globales
let currentQuestionIndex = 0;
const score = 0;

// DOM Elements
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressEl = document.getElementById('progress');
const feedbackContainer = document.getElementById('feedback-container');
const explanationTextEl = document.getElementById('explanation-text');
const resultSection = document.getElementById('result-section');
const restartBtn = document.getElementById('restart-btn');
const scoreEl = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');

// Valida preguntas y inicializa quiz
function initQuiz() {
  if (!questions || questions.length === 0) {
    console.error('Error: quiz.js no tiene preguntas disponibles.');
    return;
  }

  currentQuestionIndex = 0;
  scoreEl.textContent = '0';
  totalQuestionsSpan.textContent = questions.length;
  location.reload(); // Recarga la interfaz para re-inicializar todo
}

// Muestra pregunta actual
function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionTextEl.textContent = current.question;
  progressEl.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;

  // Limpiar opciones anteriores
  optionsContainer.innerHTML = '';
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.dataset.index = index;
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// Checkea respuesta y actualiza visualización
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.answer;

  feedbackContainer.classList.add('show', isCorrect ? 'correct' : 'wrong');
  explanationTextEl.innerHTML = `
    ${isCorrect ? '✅ Correcto' : '❌ Incorrecto: '}
    <strong>${currentQuestion.explanation}</strong>`;

  let buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === selectedIndex) btn.style.backgroundColor = isCorrect ? '#51B749' : '#D63333';
  });

  scoreEl.textContent = isCorrect ? parseInt(scoreEl.textContent) + 1 : scoreEl.textContent;

  // Transición a siguiente pregunta
  setTimeout(() => {
    currentQuestionIndex++;
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.style.backgroundColor = '';
    });
    feedbackContainer.classList.remove('show', 'correct', 'wrong');

    if(currentQuestionIndex >= questions.length) {
      showResult();
    } else {
      showQuestion();
    }
  }, 2000);
}

// Muestra seccion de resultados
function showResult() {
  questionTextEl.innerHTML = '¡Quiz Finalizado!';
  optionsContainer.innerHTML = '';
  resultSection.style.display = 'block';
}

// Event listeners
restartBtn.addEventListener('click', initQuiz);

// Iniciar quiz
if (questions && questions.length > 0) {
  showQuestion();
} else {
  questionTextEl.textContent = 'Error: Sin preguntas disponibles.';
}