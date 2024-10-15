`use strict`;
const container = document.querySelector(".container");
function work(num) {
  const selector = document.querySelector(`.section-${num}`);
  selector.style.display = "block";
  document.querySelector(`.close-${num}`).addEventListener("click", () => {
    selector.style.display = "none";
  });
}
container.addEventListener("click", (e) => {
  for (let i = 1; i <= 3; i++) {
    document.querySelector(`.section-${i}`).style.display = "none";
  }
  const val = Number(e.target.getAttribute("value"));
  work(val);
});
