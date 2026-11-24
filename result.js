const name = localStorage.getItem("studentName");

const score = Number(localStorage.getItem("score"));

const total = Number(localStorage.getItem("total"));

const answers = JSON.parse(
    localStorage.getItem("answers") || "[]"
);

if (!name || !total || answers.length !== total) {
    window.location.href = "index.html";
}

document.getElementById("student").innerText =
    "Student Name: " + name;

document.getElementById("score").innerText =
    score + " / " + total;

let percentage = (score / total) * 100;

document.getElementById("percentage").innerText =
    "Percentage: " + percentage + "%";

let message = "";

if (percentage >= 80) {
    message = "Excellent Performance! 🏆";
}
else if (percentage >= 50) {
    message = "Good Job! Keep Practicing!";
}
else {
    message = "Keep Learning and Try Again!";
}

document.getElementById("message").innerText = message;

const summary = document.getElementById("summary");

answers.forEach((item, index) => {

    let selectedAnswer = item.selected === -1
        ? "Not Answered"
        : item.options[item.selected];

    let correctAnswer = item.options[item.correct];

    let result = item.selected === item.correct
        ? "Correct ✓"
        : "Incorrect ✗";

    summary.innerHTML += `

        <div class="summary-box">

            <h3>${item.question}</h3>

            <p>Your Answer: ${selectedAnswer}</p>

            <p>Correct Answer: ${correctAnswer}</p>

            <strong>${result}</strong>

        </div>

    `;

});

function restartQuiz() {

    localStorage.removeItem("score");
    localStorage.removeItem("total");
    localStorage.removeItem("answers");

    window.location.href = "quiz.html";

}

function goHome() {

    localStorage.clear();

    window.location.href = "index.html";

}