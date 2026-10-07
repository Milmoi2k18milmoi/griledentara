// ============================================================
// LOGICA APLICAȚIEI
// ============================================================
let currentQuiz = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let userAnswers = [];
const QUIZ_LENGTH = 10;

// Utilitare
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pornește testul
function startQuiz() {
  // Amestecă toate întrebările și ia 10
  const shuffled = shuffle(QUESTIONS).slice(0, QUIZ_LENGTH);
  // Amestecă și variantele de răspuns pentru fiecare întrebare
  currentQuiz = shuffled.map(q => {
    const indices = shuffle([0, 1, 2, 3]);
    const newOptions = indices.map(i => q.o[i]);
    const newAnswer = indices.indexOf(q.a);
    return { c: q.c, q: q.q, o: newOptions, a: newAnswer };
  });
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  userAnswers = [];

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("resultsScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  renderQuestion();
}

// Afișează întrebarea curentă
function renderQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById("qNumber").textContent = "Întrebarea " + (currentIndex + 1);
  document.getElementById("qCategory").textContent = q.c;
  document.getElementById("qText").textContent = q.q;

  const list = document.getElementById("optionsList");
  list.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.o.forEach((opt, i) => {
    const li = document.createElement("li");
    li.className = "option";
    li.innerHTML = '<span class="letter">' + letters[i] + '</span><span>' + opt + '</span>';
    li.addEventListener("click", () => selectOption(i));
    list.appendChild(li);
  });

  document.getElementById("feedback").className = "feedback";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("btnNext").disabled = true;
  document.getElementById("btnNext").textContent =
    currentIndex === QUIZ_LENGTH - 1 ? "Vezi rezultatul →" : "Următoarea →";

  updateStats();
  updateProgress();
}

// Selectează un răspuns
function selectOption(selected) {
  const q = currentQuiz[currentIndex];
  const options = document.querySelectorAll(".option");
  if (options[0].classList.contains("disabled")) return;

  options.forEach((opt, i) => {
    opt.classList.add("disabled");
    if (i === q.a) opt.classList.add("correct");
    if (i === selected && i !== q.a) opt.classList.add("wrong");
  });

  const isCorrect = selected === q.a;
  if (isCorrect) {
    correctCount++;
  } else {
    wrongCount++;
  }
  userAnswers.push({
    q: q.q,
    c: q.c,
    options: q.o,
    correct: q.a,
    selected: selected,
    isCorrect: isCorrect
  });

  const fb = document.getElementById("feedback");
  if (isCorrect) {
    fb.className = "feedback ok show";
    fb.innerHTML = "<strong>✅ Corect!</strong> Bravo!";
  } else {
    fb.className = "feedback bad show";
    fb.innerHTML = "<strong>❌ Greșit.</strong> Răspunsul corect era: <b>" + q.o[q.a] + "</b>";
  }

  document.getElementById("btnNext").disabled = false;
  updateStats();
}

// Următoarea întrebare
function nextQuestion() {
  if (currentIndex < QUIZ_LENGTH - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

// Actualizează statisticile
function updateStats() {
  document.getElementById("statCorrect").textContent = correctCount;
  document.getElementById("statWrong").textContent = wrongCount;
  document.getElementById("statProgress").textContent = (currentIndex + 1) + "/" + QUIZ_LENGTH;
}

// Actualizează bara de progres
function updateProgress() {
  const pct = ((currentIndex) /
