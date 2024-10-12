`use strict`;
let checkBtn = document.querySelector("Again");
let numInput = document.querySelector(".numInput");
let resRate = document.querySelector(".rate");
let bodyHtml = document.querySelector("body");
let highScore = document.querySelector(".highScoremark");
let ScoreId = document.querySelector(".scoreId");
let againBtn = document.querySelector(".btn");
let numShow = document.querySelector(".numShow");

let scoreCurrent = 20;
let highScoreCurrent = 0;
const checking = function () {
  let randomNum = Math.floor(Math.random() * 20 + 1);
  let inputVal = Number(numInput.value);
  if (inputVal) {
    if (scoreCurrent > 0) {
      if (inputVal === randomNum) {
        resRate.textContent = "CORRECT NUMBER!!!";
        bodyHtml.style.backgroundColor = " rgb(211, 249, 218)";
        highScoreCurrent = scoreCurrent + highScoreCurrent;
        highScore.textContent = highScoreCurrent;
        numShow.textContent = inputVal;
      } else if (randomNum > inputVal) {
        resRate.textContent = "TOO LOW";
        cal();
      } else if (randomNum < inputVal) {
        resRate.textContent = "TOO HIGH";
        cal();
      }
    } else {
      resRate.textContent = "YOU LOST...";
    }
  } else {
    resRate.textContent = "INCORRECT INPUT..";
  }
};

const cal = () => {
  scoreCurrent = scoreCurrent - 1;
  bodyHtml.style.backgroundColor = "white";
  ScoreId.textContent = scoreCurrent;
};

const displayBtnIncDec = () => {
  btnIncDec.style.opacity = 1;
};
const againbtnWork = () => {
  highScoreCurrent = 0;
  scoreCurrent = 20;
  resRate.textContent = "START GUESSING...";
  ScoreId.innerHTML = scoreCurrent;
  highScore.innerHTML = "";
  bodyHtml.style.backgroundColor = "white";
  btnIncDec.style.opacity = 0;
  numInput.value = "";
};
