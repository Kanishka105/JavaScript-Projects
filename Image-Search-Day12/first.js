`use strict`;
const accessKey = `qhcsdyX0sRw7dzqG5QBtt83icCmTglWzqaf93J0tp9k`;
const btnSearch = document.querySelector(".btn-search");
const input = document.querySelector(".input");

const Imagesection = document.querySelector(".img-section");
const page = 1;
let p = 0;
async function fetchingData(page, inputData, accessKey) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const result = data.results;

  result.map((ele) => {
    const html = `<img
          src=${ele.urls["regular"]}
          alt="image"
          class="img"
        />`;
    Imagesection.insertAdjacentHTML("beforeend", html);
  });
}
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  if (p !== 0) {
    const f = document.querySelectorAll(".img");
    f.forEach((ele) => {
      ele.style.display = "none";
    });
  }
  const inputData = input.value;
  fetchingData(page, inputData, accessKey);
  p = p + 1;
});
