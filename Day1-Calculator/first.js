//use of eval function
`use strict`;
const displayScreen = document.querySelector(".display-screen");
const td = document.querySelectorAll(".td");
let str = "";
td.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    console.log("enter");
    const inputVal = e.target.textContent;

    console.log(inputVal);
    if (inputVal === "=") {
      str = eval(str);
      displayScreen.textContent = str;
      console.log("=", str);
      displayScreen.textContent = str;
    } else if (inputVal === "C") {
      str = " ";
      displayScreen.textContent = str;
      console.log(str, " ");
    } else {
      str = str + inputVal;
      console.log(str, "strelse");
      displayScreen.textContent = str;
    }
  });
});
