`use strict`;

const dataOb = {
  meta: {
    last_updated_at: "2023-06-23T10:15:59Z",
  },
  data: {
    AED: {
      code: "AED",
      value: 3.67306,
    },
    AFN: {
      code: "AFN",
      value: 91.80254,
    },
    ALL: {
      code: "ALL",
      value: 108.22904,
    },
    AMD: {
      code: "AMD",
      value: 480.41659,
    },
    "...": "150+ more currencies",
  },
};

const currency = dataOb.data;

console.log(currency);
const amtInput = document.querySelector(".amt-input");
const selectFrom = document.querySelector(".from");
const selectTo = document.querySelector(".to");
const btn1 = document.querySelector(".btn-1");
const printAmt = document.querySelector(".amt-print");
const fromcurPrint = document.querySelector(".from-cur-print");
const TocurPrint = document.querySelector(".to-cur-print");
const res = document.querySelector(".res-print");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  const valOfSelectFrom = selectFrom.value;
  const valOfSelectTo = selectTo.value;
  const amtInvalue = amtInput.value;
  const y = dataOb.data[valOfSelectFrom].value;
  const z = dataOb.data[valOfSelectTo].value;
  let one = (z / y) * Number(amtInvalue);
  res.textContent = one.toFixed(2);
  printAmt.textContent = amtInvalue;
  fromcurPrint.textContent = valOfSelectFrom;
  TocurPrint.textContent = valOfSelectTo;
});
