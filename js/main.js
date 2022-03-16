const elLeft = document.getElementById("left");
const addCard = document.getElementById("add");
const elOutput = document.getElementById("output");
const elOne = document.getElementById("one");
const elTwo = document.getElementById("two");
const elThree = document.getElementById("three");
const elFour = document.getElementById("four");
const elFive = document.getElementById("five");
const elSix = document.getElementById("six");
const elSeven = document.getElementById("seven");
const elEight = document.getElementById("eight");
const elNine = document.getElementById("nine");
const elZero = document.getElementById("zero");
const elDeleteAll = document.getElementById("deleteAll");
const elDeleteOne = document.getElementById("deleteOne");
const elDot = document.getElementById("dot");
const elDivide = document.getElementById("divide");
const elMultiply = document.getElementById("multiply");
const elDeduct = document.getElementById("deduct");
const elAddition = document.getElementById("addition");
const elEqual = document.getElementById("equal");


elLeft.addEventListener("click", ()=> {
  addCard.classList.toggle("flex");
  elLeft.classList.toggle("go");
});

let value = [];

elOne.addEventListener("click", () => {
  value += elOne.innerText;
  elOutput.innerText = value;
});

elTwo.addEventListener("click", () => {
  value += elTwo.innerText;
  elOutput.innerText = value;
});

elThree.addEventListener("click", () => {
  value += elThree.innerText;
  elOutput.innerText = value;
});
elFour.addEventListener("click", () => {
  value += elFour.innerText;
  elOutput.innerText = value;
});
elFive.addEventListener("click", () => {
  value += elFive.innerText;
  elOutput.innerText = value;
});
elSix.addEventListener("click", () => {
  value += elSix.innerText;
  elOutput.innerText = value;
});
elSeven.addEventListener("click", () => {
  value += elSeven.innerText;
  elOutput.innerText = value;
});
elEight.addEventListener("click", () => {
  value += elEight.innerText;
  elOutput.innerText = value;
});
elNine.addEventListener("click", () => {
  value += elNine.innerText;
  elOutput.innerText = value;
});
elZero.addEventListener("click", () => {
  value += elZero.innerText;
  elOutput.innerText = value;
});
elDot.addEventListener("click", () => {
  value += elDot.innerText;
  elOutput.innerText = value;
});


elDeleteAll.addEventListener("click", () => {
  value = [];
  elOutput.innerText = value;
});

elAddition.addEventListener("click", () => {
  value += elAddition.innerText;
  elOutput.innerText = value;
});

elDeduct.addEventListener("click", () => {
  value += elDeduct.innerText;
  elOutput.innerText = value;
});

elMultiply.addEventListener("click", () => {
  value += elMultiply.innerText;
  elOutput.innerText = value;
});

elDivide.addEventListener("click", () => {
  value += elDivide.innerText;
  elOutput.innerText = value;
});

elEqual.addEventListener("click", () => {
  elOutput.innerText = eval(elOutput.innerText);
});