// ============================================================
// LOGICA APLICAȚIEI - Grile Morfologie Dentară
// ============================================================
let currentQuiz = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let userAnswers = [];
const QUIZ_LENGTH = 10;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function startQuiz() {
  const shuffled = shuffle(QUESTIONS).slice(0, QUIZ_LENGTH);
  currentQuiz = shuffled.map(function(q) {
    const indices = shuffle([0, 1, 2, 3]);
    const newOptions = indices.map(function(i) { return q.o[i]; });
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

function renderQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById("qNumber").textContent = "Întrebarea " + (currentIndex + 1);
  document.getElementById("qCategory").textContent = q.c;
  document.getElementById("qText").textContent = q.q;

  const list = document.getElementById("optionsList");
  list.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.o.forEach(function(opt, i) {
    const li = document.createElement("li");
    li.className = "option";
    li.innerHTML = '<span class="letter">' + letters[i] + '</span><span>' + opt + '</span>';
    li.addEventListener("click", function() { selectOption(i); });
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

function selectOption(selected) {
  const q = currentQuiz[currentIndex];
  const options = document.querySelectorAll(".option");
  if (options[0].classList.contains("disabled")) return;

  options.forEach(function(opt, i) {
    opt.classList.add("disabled");
    if (i === q.a) opt.classList.add("correct");
    if (i === selected && i !== q.a) opt.classList.add("wrong");
  });

  const isCorrect = selected === q.a;
  if (isCorrect) correctCount++; else wrongCount++;

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

function nextQuestion() {
  if (currentIndex < QUIZ_LENGTH - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function updateStats() {
  document.getElementById("statCorrect").textContent = correctCount;
  document.getElementById("statWrong").textContent = wrongCount;
  document.getElementById("statProgress").textContent = (currentIndex + 1) + "/" + QUIZ_LENGTH;
}

function updateProgress() {
  const pct = (currentIndex / QUIZ_LENGTH) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
}

function showResults() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultsScreen").classList.remove("hidden");

  const total = QUIZ_LENGTH;
  const pct = Math.round((correctCount / total) * 100);

  document.getElementById("resScore").textContent = pct + "%";
  document.getElementById("resCorrect").textContent = correctCount;
  document.getElementById("resWrong").textContent = wrongCount;
  document.getElementById("resTotal").textContent = total;

  let emoji = "😢";
  let title = "Mai încearcă!";
  if (pct >= 90) { emoji = "🏆"; title = "Excelent!"; }
  else if (pct >= 70) { emoji = "🎉"; title = "Foarte bine!"; }
  else if (pct >= 50) { emoji = "👍"; title = "Bine, dar se poate mai bine!"; }

  document.getElementById("resEmoji").textContent = emoji;
  document.getElementById("resTitle").textContent = title;

  let subtitle = "";
  if (pct >= 90) subtitle = "Ești pregătit pentru examen!";
  else if (pct >= 70) subtitle = "Continuă tot așa!";
  else if (pct >= 50) subtitle = "Mai exersează!";
  else subtitle = "Revizuiește cursurile și reia testul.";
  document.getElementById("resSubtitle").textContent = subtitle;

  updateProgress();
}

function showReview() {
  document.getElementById("resultsScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.remove("hidden");

  const list = document.getElementById("reviewList");
  list.innerHTML = "";

  userAnswers.forEach(function(ans, i) {
    const div = document.createElement("div");
    div.className = "review-item" + (ans.isCorrect ? " correct-item" : "");

    const statusClass = ans.isCorrect ? "ok" : "bad";
    const statusText = ans.isCorrect ? "✅ Corect" : "❌ Greșit";

    let html = '<div class="q-header">' +
      '<span class="q-num">Întrebarea ' + (i + 1) + ' · ' + ans.c + '</span>' +
      '<span class="q-status ' + statusClass + '">' + statusText + '</span>' +
      '</div>' +
      '<div class="q">' + ans.q + '</div>';

    if (ans.isCorrect) {
      html += '<div class="a correct-a"><span class="a-label">Răspunsul tău (corect)</span>' +
        ans.options[ans.selected] + '</div>';
    } else {
      html += '<div class="a wrong-a"><span class="a-label">Răspunsul tău</span>' +
        ans.options[ans.selected] + '</div>';
      html += '<div class="a correct-a"><span class="a-label">Răspunsul corect</span>' +
        ans.options[ans.correct] + '</div>';
    }

    div.innerHTML = html;
    list.appendChild(div);
  });

  const wrongCountLocal = userAnswers.filter(function(a) { return !a.isCorrect; }).length;
  document.getElementById("reviewSubtitle").textContent =
    wrongCountLocal === 0 ? "🎉 Toate răspunsurile au fost corecte!" :
    "Ai " + wrongCountLocal + " răspuns(uri) greșit(e) din " + userAnswers.length;

  window.scrollTo(0, 0);
}

function restartQuiz() {
  document.getElementById("resultsScreen").classList.add("hidden");
  document.getElementById("reviewScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
  window.scrollTo(0, 0);
}

// Legarea butoanelor după încărcarea paginii
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnStart").addEventListener("click", startQuiz);
  document.getElementById("btnNext").addEventListener("click", nextQuestion);
  document.getElementById("btnReview").addEventListener("click", showReview);
  document.getElementById("btnRestart1").addEventListener("click", restartQuiz);
  document.getElementById("btnRestart2").addEventListener("click", restartQuiz);
});
