// ==========================
// QUESTÕES
// ==========================
const questions = [
  // HTML
  { category: "HTML", question: "Qual linguagem é usada para estilizar páginas web?", answers: [
    { text: "HTML", correct: false },
    { text: "CSS", correct: true },
    { text: "JavaScript", correct: false },
    { text: "Python", correct: false }
  ]},
  { category: "HTML", question: "Qual tag HTML é usada para criar um link?", answers: [
    { text: "a", correct: true },
    { text: "link", correct: false },
    { text: "href", correct: false },
    { text: "ul", correct: false }
  ]},
  { category: "HTML", question: "Qual tag HTML é usada para criar um parágrafo?", answers: [
    { text: "p", correct: true },
    { text: "h1", correct: false },
    { text: "div", correct: false },
    { text: "span", correct: false }
  ]},
  { category: "HTML", question: "Qual atributo é usado para adicionar um link em uma tag <a>?", answers: [
    { text: "src", correct: false },
    { text: "href", correct: true },
    { text: "link", correct: false },
    { text: "target", correct: false }
  ]},
  { category: "HTML", question: "Qual tag é usada para inserir uma imagem em HTML?", answers: [
    { text: "img", correct: true },
    { text: "image", correct: false },
    { text: "pic", correct: false },
    { text: "src", correct: false }
  ]},
  { category: "HTML", question: "Qual atributo da tag <img> define o texto alternativo?", answers: [
    { text: "title", correct: false },
    { text: "alt", correct: true },
    { text: "desc", correct: false },
    { text: "src", correct: false }
  ]},
  { category: "HTML", question: "Qual elemento HTML é usado para criar uma lista ordenada?", answers: [
    { text: "ul", correct: false },
    { text: "ol", correct: true },
    { text: "li", correct: false },
    { text: "list", correct: false }
  ]},

  // CSS
  { category: "CSS", question: "Qual propriedade CSS é usada para mudar a cor do texto?", answers: [
    { text: "background-color", correct: false },
    { text: "font-color", correct: false },
    { text: "text-color", correct: false },
    { text: "color", correct: true }
  ]},
  { category: "CSS", question: "Qual propriedade controla o tamanho da fonte?", answers: [
    { text: "text-size", correct: false },
    { text: "font-size", correct: true },
    { text: "font-weight", correct: false },
    { text: "size", correct: false }
  ]},
  { category: "CSS", question: "O que faz a propriedade display: flex?", answers: [
    { text: "Cria um container flexível", correct: true },
    { text: "Muda a cor de fundo", correct: false },
    { text: "Centraliza o texto", correct: false },
    { text: "Aumenta o tamanho do texto", correct: false }
  ]},
  { category: "CSS", question: "Como aplicar uma cor de fundo preta em CSS?", answers: [
    { text: "background-color: black;", correct: true },
    { text: "color: black;", correct: false },
    { text: "bg: black;", correct: false },
    { text: "text-color: black;", correct: false }
  ]},
  { category: "CSS", question: "Qual seletor aplica estilo a um elemento com id='menu'?", answers: [
    { text: ".menu", correct: false },
    { text: "#menu", correct: true },
    { text: "menu", correct: false },
    { text: "*menu", correct: false }
  ]},

  // JavaScript
  { category: "JavaScript", question: "Como declaramos uma variável em JavaScript?", answers: [
    { text: "var", correct: true },
    { text: "let", correct: true },
    { text: "const", correct: true },
    { text: "todas as anteriores", correct: true }
  ]},
  { category: "JavaScript", question: "Qual método converte uma string em número?", answers: [
    { text: "Number()", correct: true },
    { text: "parseString()", correct: false },
    { text: "toString()", correct: false },
    { text: "String()", correct: false }
  ]},
  { category: "JavaScript", question: "O que o comando console.log() faz?", answers: [
    { text: "Imprime uma mensagem no console", correct: true },
    { text: "Cria uma variável", correct: false },
    { text: "Abre uma janela pop-up", correct: false },
    { text: "Atualiza a página", correct: false }
  ]},
  { category: "JavaScript", question: "Qual símbolo é usado para comentários de linha única em JS?", answers: [
    { text: "//", correct: true },
    { text: "/*", correct: false },
    { text: "#", correct: false },
    { text: "<!-- -->", correct: false }
  ]},
  { category: "JavaScript", question: "Qual função exibe um alerta na tela?", answers: [
    { text: "alert()", correct: true },
    { text: "prompt()", correct: false },
    { text: "confirm()", correct: false },
    { text: "show()", correct: false }
  ]},

  // Banco de Dados
  { category: "Banco de Dados", question: "Qual comando SQL é usado para selecionar dados de uma tabela?", answers: [
    { text: "SELECT", correct: true },
    { text: "INSERT", correct: false },
    { text: "UPDATE", correct: false },
    { text: "DELETE", correct: false }
  ]},
  { category: "Banco de Dados", question: "Qual comando SQL insere novos dados?", answers: [
    { text: "ADD", correct: false },
    { text: "INSERT INTO", correct: true },
    { text: "CREATE", correct: false },
    { text: "INCLUDE", correct: false }
  ]},
  { category: "Banco de Dados", question: "Qual comando SQL remove uma tabela inteira?", answers: [
    { text: "DELETE TABLE", correct: false },
    { text: "DROP TABLE", correct: true },
    { text: "REMOVE TABLE", correct: false },
    { text: "CLEAR TABLE", correct: false }
  ]},
  { category: "Banco de Dados", question: "O que significa SQL?", answers: [
    { text: "Structured Query Language", correct: true },
    { text: "Simple Query Language", correct: false },
    { text: "Sequential Query Language", correct: false },
    { text: "Standard Quick Language", correct: false }
  ]},
  { category: "Banco de Dados", question: "Qual comando atualiza dados em uma tabela?", answers: [
    { text: "SET", correct: false },
    { text: "UPDATE", correct: true },
    { text: "CHANGE", correct: false },
    { text: "ALTER", correct: false }
  ]}
];

// ==========================
// DOM ELEMENTS
// ==========================
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

// Criar barra de progresso
const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
progressBar.style.height = "20px";
progressBar.style.backgroundColor = "#e5e7eb";
progressBar.style.margin = "10px 0";
progressBar.style.borderRadius = "5px";
quizScreen.prepend(progressBar);

// ==========================
// ESTADO
// ==========================
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// ==========================
// ESCOLHER CATEGORIA
// ==========================
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    currentQuestions = questions.filter(q => q.category === category);
    categoryScreen.style.display = "none";
    quizScreen.style.display = "block";
    startQuiz();
  });
});

// ==========================
// FUNÇÕES DO QUIZ
// ==========================
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  updateProgress();
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersElement.appendChild(button);

    if(answer.correct) button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);
  });
  updateProgress();
}

function resetState() {
  nextButton.style.display = "none";
  while(answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if(isCorrect) {
    selectedBtn.style.background = "#22c55e";
    score++;
  } else {
    selectedBtn.style.background = "#ef4444";
  }

  // Mostrar cor das respostas corretas
  Array.from(answersElement.children).forEach(button => {
    if(button.dataset.correct === "true") button.style.background = "#22c55e";
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou <span style="color:#22c55e">${score}</span> de <span style="color:#2563eb">${currentQuestions.length}</span> perguntas!`;

  nextButton.innerHTML = "Voltar para categorias";
  nextButton.style.display = "block";
  progressBar.style.width = "100%";
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < currentQuestions.length) {
    handleNextButton();
  } else {
    quizScreen.style.display = "none";
    categoryScreen.style.display = "block";
  }
});

// ==========================
// BARRA DE PROGRESSO
// ==========================
function updateProgress() {
  const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
  progressBar.style.width = percent + "%";
  progressBar.style.backgroundColor = "#2563eb";
}
