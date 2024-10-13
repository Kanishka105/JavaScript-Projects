`use strict`;
const userName = document.getElementById("user-name");
const websiteName = document.getElementById("website-name");
const passcode = document.querySelector(".passcode");
const submitBtn = document.querySelector("#submitBtn");
const website = document.querySelector(".website");
const user = document.querySelector(".user");
const passwordText = document.querySelector(".password");
const insert = document.querySelector(".insert");

let arr;
let store = new Array();
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userNameValue = userName.value;
  let passcodeVal = passcode.value;
  let websiteNameVal = websiteName.value;
  function display(ele) {}
  arr = [{ websiteNameVal, userNameValue, passcodeVal }];
  if (websiteNameVal && userNameValue && passcodeVal) {
    arr.forEach((ele, index) => {
      store.push(ele);
      const html = `<tr>
      <td>${ele.websiteNameVal}</td>
      <td>${ele.userNameValue}</td>
      <td>${ele.passcodeVal}</td>
      
      </tr>`;
      insert.insertAdjacentHTML("beforeend", html);
    });
  }
  userName.value = "";
  passcode.value = "";
  websiteName.value = "";
});
