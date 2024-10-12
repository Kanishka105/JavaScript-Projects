`use strict`;
//selection==============
const input = document.querySelector(".input");
const Again = document.querySelector(".again-btn");
const btn = document.querySelector(".btn");
const QRblock = document.querySelector(".QR-block");
//global variable=============
let index = 0;
//function
function InsertQR(inputVal, index) {
  const html = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal} " class="img img-${index}" alt="img-qr"/>`;
  QRblock.insertAdjacentHTML("beforeend", html);
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  if (inputVal) {
    InsertQR(inputVal, index);
    if (index > 0) {
      document.querySelector(`.img-${index - 1}`).style.display = "none";
    }
    index++;
    inputVal = null;
  }
});
