const quizData = [
    {question:"What does HTML stand for?",
        a:"Hyper Text Markup Language",
        b:"High Text Machine Language",
        c:"Hyperlinks Text Mark Language",
        d:"None",correct:"a"},
    {question:"Which language is used for styling web pages?",
        a:"HTML",
        b:"JQuery",
        c:"CSS",
        d:"XML",correct:"c"},
    {question:"Which language makes web pages interactive?",
        a:"HTML",
        b:"CSS",
        c:"JavaScript",
        d:"Python",correct:"c"},
    {question:"Which tag is used to insert image?",
        a:"<image>",
        b:"<img>",
        c:"<src>",
        d:"<pic>",correct:"b"},
    {question:"Which tag creates hyperlink?",
        a:"<a>",
        b:"<link>",
        c:"<href>",
        d:"<url>",correct:"a"},
    {question:"CSS stands for?",
        a:"Creative Style Sheet",
        b:"Cascading Style Sheet",
        c:"Computer Style Sheet",
        d:"Colorful Style Sheet",correct:"b"},
    {question:"Which property changes text color?",
        a:"text-color",
        b:"font-color",
        c:"color",
        d:"background",correct:"c"},
    {question:"Which symbol is JS comment?",
        a:"<!-- -->",
        b:"//",
        c:"**",  
        d:"##",correct:"b"},
    {question:"JavaScript developed by?",
        a:"Google",
        b:"Microsoft",
        c:"Netscape",
        d:"Oracle",correct:"c"},
    {question:"Which keyword declares variable?",
        a:"int",
        b:"var",
        c:"string",
        d:"float",correct:"b"},
    {question:"Which tag creates list?",
        a:"<list>",
        b:"<ul>",
        c:"<li>",
        d:"<ol>",
        correct:"b"},
    {question:"Password input type?",
        a:"text",
        b:"password",
        c:"number",
        d:"email",
        correct:"b"},
    {question:"Padding means?",
        a:"Outer space",
        b:"Inner space",
        c:"Border",
        d:"None",
        correct:"b"},
    {question:"Margin means?",
        a:"Inner space",
        b:"Outer space",
        c:"Border",
        d:"None",
        correct:"b"},
    {question:"Console print method?",
        a:"console.print()"
        ,b:"console.log()",
        c:"print()",
        d:"log()",
        correct:"b"},
    {question:"Button tag?",
        a:"<input>",
        b:"<btn>",
        c:"<button>",
        d:"<click>",
        correct:"c"},
    {question:"Bold text property?",
        a:"font-style",
        b:"font-weight",
        c:"text-bold",
        d:"bold",
        correct:"b"},
    {question:"Largest heading tag?",
        a:"<h6>",
        b:"<h4>",
        c:"<h2>",
        d:"<h1>",
        correct:"d"},
    {question:"Strict comparison operator?",
        a:"==",
        b:"=",
        c:"===",
        d:"!=",
        correct:"c"},
    {question:"Click event?",
        a:"onmouseover",
        b:"onload",
        c:"onclick",
        d:"onchange",
        correct:"c"},
    {question:"Table row tag?",
        a:"<td>",
        b:"<th>",
        c:"<tr>",
        d:"<table>",
        correct:"c"},
    {question:"Background color property?",
        a:"color",
        b:"bgcolor",
        c:"background-color",
        d:"background",
        correct:"c"},
    {question:"Convert string to int?",
        a:"parseInt()",
        b:"Number()",
        c:"parseFloat()",
        d:"toInt()",
        correct:"a"},
    {question:"Form tag?",
        a:"<input>",
        b:"<form>",
        
        c:"<label>",
        d:"<fieldset>",
        correct:"b"},
    {question:"Center text property?",
        a:"align",
        b:"text-align",
        c:"center",
        d:"float",correct:"b"},
    {question:"Function keyword?",
        a:"def",
        b:"method",
        c:"function",
        d:"func",correct:"c"},
    {question:"Line break tag?",
        a:"<lb>",
        b:"<break>",
        c:"<br>"
        ,d:"<hr>",correct:"c"},
    {question:"Hide element?",
        a:"display:none",
        b:"visibility:block",
        c:"hide",
        d:"opacity:1",correct:"a"},
    {question:"Known iteration loop?",
        a:"while",
        b:"do-while",
        c:"for",
        d:"foreach",correct:"c"}
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let current = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    answers.forEach(a => a.checked = false);
    const q = quizData[current];
    questionEl.innerText = q.question;
    a_text.innerText = q.a;
    b_text.innerText = q.b;
    c_text.innerText = q.c;
    d_text.innerText = q.d;
}

submitBtn.onclick = () => {
    let selected;
    answers.forEach(a => { if (a.checked) selected = a.id; });

    if (!selected) {
        alert("Select an option!");
        return;
    }

    if (selected === quizData[current].correct) score++;
    current++;

    if (current < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>Quiz Completed</h2>
                          <p>Your Score: ${score}/30</p>
                          <button onclick="location.reload()">Restart</button>`;
    }
};

