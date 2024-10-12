`use strict`;
// data
const arr = [
  "Hello Mr Peter",
  "How are you??",
  "My name is katherine",
  "Your name is not in the list",
];
// selectors
const btnSubmit = document.querySelector(".btn");
const textarea = document.querySelector(".textarea");
const startBtn = document.querySelector(".start-btn");
const againBtn = document.querySelector(".again-btn");
const inner = document.querySelector(".inner");
const DoneBtn = document.querySelector(".done-btn");
const scoreBox = document.querySelector(".score");
const h2 = document.querySelector(".h2");

// global-variables
let i = -1;
let score = 0;

// addEventListeners
startBtn.addEventListener("click", () => {
  i++;
  h2.textContent = arr[i];
  startBtn.style.display = "none";
  DoneBtn.style.display = "block";
  textarea.style.display = "block";
});

DoneBtn.addEventListener("click", () => {
  const textVal = textarea.value;
  textarea.value = "";
  if (textVal === arr[i]) {
    console.log("in");
    score = score + 1;
  }
  i++;
  h2.textContent = arr[i];
  if (i > arr.length - 1) {
    textarea.style.display = "none";
    DoneBtn.style.display = "none";
    againBtn.style.display = "block";
    scoreBox.textContent = `You have scored ${score} out of ${arr.length} `;
    scoreBox.style.display = "block";
  }
});

againBtn.addEventListener("click", () => {
  i = -1;
  score = 0;
  startBtn.style.display = "block";
  againBtn.style.display = "none";
  scoreBox.style.display = "none";
});
