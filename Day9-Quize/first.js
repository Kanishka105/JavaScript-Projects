`use strict`;
const DataOb = [
  {
    que: "What is the correct way to declare a variable in javascript?",
    ansIndex: 1,
    options: ["variable x = 10;", "var x = 10;", "x = 10;", "int x = 10;"],
  },
  {
    que: "How do you check if a variable is an array in JavaScript?",
    options: [
      "isArray(x) ",
      ".isArray() ",
      "x instanceof Array ",
      " typeof Array ",
    ],
    ansIndex: 0,
  },
  {
    que: "How do you properly comment on a single line in JavaScript? ",
    ansIndex: 1,
    options: [
      "# This is a comment. ",
      " // This is a comment. ",
      "/* This is a comment. */ ",
      "Comment<!--This is the comment -->",
    ],
  },
  {
    que: "Where is the correct place to insert JavaScript code in an HTML document?",
    ansIndex: 0,
    options: [
      " Both the <head> section and the <body> section",
      "The <head> section ",
      " The <body> section ",
      "Anywhere in the HTML file",
    ],
  },
  {
    que: " What are the main types of loops available in JavaScript? ",
    ansIndex: 0,
    options: [
      "for loop, do...while loop, while loop",
      "for loop, do...until loop, while loop",
      " for loop, while loop, repeat...until loop",
      "for loop, do...while loop, repeat...until loop ",
    ],
  },
];

const StartBtn = document.querySelector(".start-btn");
const quizeBlock = document.querySelector(".que-block");
const NextBtn = document.querySelector(".next-btn");
const SubmitBtn = document.querySelector(".submit-btn");
const ScorePrintBox = document.querySelector(".score-print");

function DisplayQuestions(DataOb, index, insert) {
  const html = ` <div class="index index-${index}">
      <h4>${DataOb[index].que}</h4>
      <div class="in-box">
        <div class="op">
          <input class="input" type="radio" id="opt-1" name="opts" value="0" />
          <label class="label" for="opt-1">${DataOb[index].options[0]}</label>
        </div>
        <div class="op">
          <input class="input" type="radio" id="opt-2" name="opts" value="1" />
          <label class="label" for="opt-2">${DataOb[index].options[1]}</label>
        </div>
        <div class="op">
          <input class="input" type="radio" id="opt-3" name="opts" value="2" />
          <label class="label" for="opt-3">${DataOb[index].options[2]}</label>
        </div>
        <div class="op">
          <input class="input" type="radio" id="opt-4" name="opts" value="3" />
          <label class="label" for="opt-4">${DataOb[index].options[3]}</label>
        </div>
      </div>
    </div>`;
  insert.insertAdjacentHTML("beforeend", html);
}
function DisplayChoice(selector1, ch1, selector2, ch2) {
  selector1.style.display = ch1;
  selector2.style.display = ch2;
}

let index = 0;
let checkInputValue;
let score = 0;

StartBtn.addEventListener("click", () => {
  index = 0;

  if (index === 0) {
    DisplayQuestions(DataOb, index, quizeBlock);
    quizeBlock.style.display = "block";
    DisplayChoice(StartBtn, "none", NextBtn, "block");
    document.querySelector(".in-box").addEventListener("click", (e) => {
      checkInputValue = Number(e.target.value);
    });
  }
});

NextBtn.addEventListener("click", (e) => {
  index++;
  if (index !== 0 && index > 0 && index < 4) {
    checkInputValue === DataOb[index].ansIndex && (score = score + 1);
    Array.from({ length: index }, (ele, index) => {
      document.querySelector(`.index-${index}`).style.display = "none";
    });
    DisplayQuestions(DataOb, index, quizeBlock);
    document.querySelector(".index").style.display = "none";
  }
  if (index === 3) {
    DisplayChoice(NextBtn, "none", SubmitBtn, "block");
  }
});

SubmitBtn.addEventListener("click", () => {
  document.querySelector(`.index-${index}`).style.display = "none";
  DisplayChoice(quizeBlock, "none", SubmitBtn, "none");

  const html = `<p class="print"> You have scored ${score} out of 5</p>`;
  ScorePrintBox.insertAdjacentHTML("beforeend", html);
});
