const quizData = [

{
        question: "Q1. Father and mother are our",
        a: "Aunt",
        b: "Grandparent",
        c: "Uncle",
        d: "Parents",
        correct: "d",
},
{
        question: "Q2.  Our brothers or sisters are our",
        a: "Siblings",
        b: "Cousins",
        c: "Uncle",
        d: "Parents",
        correct: "a",
},
{
        question: "Q3.  Our father's father is our",
        a: "Father",
        b: "Cousins",
        c: "Grandfather",
        d: "Grandmother",
        correct: "c",
  },
  {
        question: "Q4.  Our mother's mother is our",
        a: "Father",
        b: "Mother",
        c: "Grandmother",
        d: "Grandfather",
        correct: "c",  
  },
  {
        question: "Q5.  Our father's or mother's brother is our",
        a: "Aunt",
        b: "Uncle",
        c: "Cousins",
        d: "Parents",
        correct: "b",    
  },
  {
        question: "Q6.  Our uncles or aunties children are our",
        a: "Siblings",
        b: "Cousins",
        c: "Uncle",
        d: "Parents",
        correct: "b",      
  },
  {
        question: "Q7. Family members ____ each other",
        a: "beat",
        b: "hate",
        c: "none",
        d: "love",
        correct: "d",        
  },
  {
        question: "Q8.  Our brothers or sisters son is our",
        a: "Siblings",
        b: "nephew",
        c: "Uncle",
        d: "niece",
        correct: "b",          
  },
  {
        question: "Q9.  Our brothers or sisters daughter is our",
        a: "Siblings",
        b: "nephew",
        c: "Uncle",
        d: "niece",
        correct: "d",        
  },
  {
        question: "Q10.  Family is made up of ____",
        a: "father&mother",
        b: "children",
        c: "all of the above",
        d: "none of the abve",
        correct: "c",              
  },
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected() {
  let answer = undefined;
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id;
      }
  })
  return answer;
}

submitButton.addEventListener("click", () => {
  const answer = getselected();
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score+= 10;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    }
     else {
      quiz.innerHTML = `
      <h2> Test completed, you Scored:
      ${score}/${quizData.length * 10}</h2>

      <button onclick="location.reload()">Reload</button>"`
    }
  }
});