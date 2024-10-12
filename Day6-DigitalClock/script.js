`use strict`;
const minDisplay = document.querySelector(".mins");
const hourDisplay = document.querySelector(".hours");
const secDisplay = document.querySelector(".sec");

setInterval(function () {
  const now = new Date();
  const Hour = now.getHours();
  const minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minDisplay.textContent = minutes;
  hourDisplay.textContent = Hour;
  secDisplay.textContent = seconds === 0 ? 60 : seconds;
  console.log(Hour, minutes, seconds);
}, 1000);
