"use strict";

let score = 0;
const questions = [
  {
    question: "V8 dvigatelni nechta componenti mavjud ?",
    answer: "c",
    answers: {
      a: "3 ta",
      b: "4 ta",
      c: "2 ta",
      d: "1 ta",
    },
  },
  {
    question: "JavaScript yaratilganda uni birinchi nomi nima bo'lgan ?",
    answer: "b",
    answers: {
      a: "Ecmascript",
      b: "Livescript",
      c: "Java",
      d: "TypeScript",
    },
  },
  {
    question: "Undefined nima ?",
    answer: "a",
    answers: {
      a: "varible berilgan lekin unga value biriktirilmagan.",
      b: "variable bor va value ham bor",
      c: "Global",
      d: "Local",
    },
  },
];

const isConfirmed = confirm("O'yinga tayyormisiz ?");

if (isConfirmed) displayQuestion();
else alert("Ok Fine Bro!");

function displayQuestion() {
  for (const question of questions) {
    const questionMessage = `${question.question}\n
    A) ${question.answers.a}
    B) ${question.answers.b}
    C) ${question.answers.c}
    D) ${question.answers.d}`;

    const result = prompt(questionMessage);
    calculateScore(result.toLowerCase(), question.answer);
  }

  showResult();
}

function calculateScore(answer, realAnswer) {
  if (answer === realAnswer) {
    alert("Correct answer");
    score++;
  } else alert("Wrong answer");
}

function showResult() {
  alert(`${score} of ${questions.length} correct answers`);
}
