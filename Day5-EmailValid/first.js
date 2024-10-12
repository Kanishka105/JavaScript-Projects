`use strict`;
const inputEmail = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const contentResult = document.querySelector("#resultCont");
const res = document.querySelector("#res");
submitBtn.addEventListener("click", (e) => {
  inputEmail.value = "";
  e.preventDefault();
  const emailValue = inputEmail.value;
  const arr = Array.from(emailValue);
  const exist = arr.includes("@");
  if (exist) {
    contentResult.textContent = "Email-Valid";
    res.textContent = emailValue;
  } else {
    contentResult.textContent = "Invalid-email";
    res.textContent = "Kindly enter correct email";
  }
});

console.log(typeof inputEmail.value);
