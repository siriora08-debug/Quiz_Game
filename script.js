// Check student name

const studentName = localStorage.getItem("studentName");

if (!studentName) {
    window.location.href = "index.html";
}

// Display student name

document.getElementById("welcome").innerText =
    "Welcome, " + studentName + "!";

// Web Technology Questions

const questions = [

    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "2. Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "SQL"
        ],
        answer: 1
    },

    {
        question: "3. Which HTML tag creates a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },

    {
        question: "4. Which tag is used to insert an image?",
        options: [
            "<image>",
            "<picture>",
            "<img>",
            "<src>"
        ],
        answer: 2
    },

    {
        question: "5. Which CSS property changes text color?",
        options: [
            "background",
            "font-size",
            "color",
            "text-style"
        ],
        answer: 2
    },

    {
        question: "6. Which protocol is used to access web pages?",
        options: [
            "FTP",
            "HTTP",
            "SMTP",
            "TCP"
        ],
        answer: 1
    },

    {
        question: "7. What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 2
    },

    {
        question: "8. Which tag creates an unordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        answer: 1
    },

    {
        question: "9. Which HTML tag creates the largest heading?",
        options: [
            "<h6>",
            "<head>",
            "<h1>",
            "<heading>"
        ],
        answer: 2
    },

    {
        question: "10. Which attribute provides alternative text for an image?",
        options: [
            "src",
            "alt",
            "href",
            "title"
        ],
        answer: 1
    }

];

// Display questions

const questionContainer = document.getElementById("questions");

questions.forEach((q, index) => {

    const questionBox = document.createElement("div");

    questionBox.className = "question-box";

    const heading = document.createElement("h3");

    heading.textContent = q.question;

    questionBox.appendChild(heading);

    q.options.forEach((option, optionIndex) => {

        const label = document.createElement("label");

        label.className = "option";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "question" + index;
        radio.value = optionIndex;

        label.appendChild(radio);

        label.appendChild(
            document.createTextNode(" " + option)
        );

        questionBox.appendChild(label);

    });

    questionContainer.appendChild(questionBox);

});

document.getElementById("quizForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let score = 0;
    let answers = [];

    questions.forEach((q, index) => {

        const selected = document.querySelector(
            'input[name="question' + index + '"]:checked'
        );

        let userAnswer = selected ? Number(selected.value) : -1;

        if (userAnswer === q.answer) {
            score++;
        }

        answers.push({
            question: q.question,
            selected: userAnswer,
            correct: q.answer,
            options: q.options
        });

    });

    // Save quiz results

    localStorage.setItem("score", score);
    localStorage.setItem("total", questions.length);
    localStorage.setItem("answers", JSON.stringify(answers));

    // Navigate to result page

    window.location.assign("result.html");

});