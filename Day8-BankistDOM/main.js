`use strict`;
// ===slide show====================================================
const slidesPage = document.querySelectorAll('.slideshow-block');
const forwardBtn = document.querySelector('.for-btn');
const backBtn = document.querySelector('.back-btn');
let step = 1;
function displayBlock(s) {
  document.querySelector(`.slide-${s}`).style.display = 'block';
  document.querySelector(`.dot-${s}`).style.backgroundColor = 'black';
}
function condition(aru1, cur) {
  if (aru1 >= 1 && aru1 <= 3) {
    displayBlock(aru1);
  } else {
    step = cur;
    displayBlock(step);
  }
}
function r(ar) {
  document.querySelector(`.slide-${ar}`).style.display = 'none';
  document.querySelector(`.dot-${ar}`).style.backgroundColor = 'grey';
}
forwardBtn.addEventListener('click', () => {
  r(step);
  step = step + 1;
  condition(step, 1);
});
backBtn.addEventListener('click', () => {
  r(step);
  step = step - 1;
  condition(step, 3);
});
// ==================================================================================tab component========================================
function dpColor(arr) {
  document.querySelector(`.comment-${arr}`).style.display = 'block';
}
document.querySelector('.color-box').addEventListener('click', e => {
  if (e.target.classList.contains('color-ele')) {
    document.querySelectorAll(`.comment`).forEach(ele => {
      ele.style.display = 'none';
    });
    const tail = Number(e.target.value); //2
    tail === 1 && dpColor(tail);
    tail === 2 && dpColor(tail);
    tail === 3 && dpColor(tail);
  }
});
// ===========================================================================================================================================================================================================================lazy loading images==================================
const imgTargets = document.querySelectorAll('img[data-src]'); //create img array
const imgObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries; //destructuring to get the intersectionentry object/ it also have intersectionobserve object
    const depend = entry.isIntersecting;
    const curTargetValue = entry.target; //have to load images one by one not to other that why not use array methods
    if (!depend) return;
    if (depend) {
      curTargetValue.src = curTargetValue.dataset.src;
      curTargetValue.addEventListener('load', () => {
        setTimeout(() => {
          curTargetValue.classList.remove('lazy-img');
        }, 2000);
      });
    }
    observer.unobserve(entry.target); //so that loading occur at a time not again again
  },
  {
    root: null, //intersection through viewport and can even select the element by which want to do
    threshold: 0, //determine isintersection done when what % of element intersect
  }
);
imgTargets.forEach(img => imgObserver.observe(img));
// ==========================================================================================================================================
