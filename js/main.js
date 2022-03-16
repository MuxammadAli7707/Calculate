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
const elFact = document.getElementById("fact");
const elSin = document.getElementById("sin");
const elCos = document.getElementById("cos");
const elTan = document.getElementById("tan");
const elLog = document.getElementById("log");
const elPi = document.getElementById("pi");
const elPumpkinLeft = document.getElementById("pumpkin__left");
const elPumpkinRight = document.getElementById("pumpkin__right");
const elRoot = document.getElementById("root");
const elPercent = document.getElementById("percent");
const elExponet = document.getElementById("exponet");
const elPow = document.getElementById("pow");
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

elFact.addEventListener("click", () => {
  let a = 1;
  for(let i = 1; i <= eval(value); i++){
    a *= i;
  }
  elOutput.innerText = a;
});

elSin.addEventListener("click", () => {
  value = Math.sin(eval(value));
  elOutput.innerText = value;
});

elCos.addEventListener("click", () => {
  value = Math.cos(eval(value));
  elOutput.innerText = value;
});

elLog.addEventListener("click", () => {
  value = Math.log(eval(value));
  elOutput.innerText = value;
});

elTan.addEventListener("click", () => {
  value = Math.tan(eval(value));
  elOutput.innerText = value;
});

elLog.addEventListener("click", () => {
  value = Math.log(eval(value));
  elOutput.innerText = value;
});

elPi.addEventListener("click", () => {
  value = Math.PI;
  elOutput.innerText = value;
});

elPumpkinLeft.addEventListener("click", () => {
  value += elPumpkinLeft.innerText;
  elOutput.innerText = value;
});
elPumpkinRight.addEventListener("click", () => {
  value += elPumpkinRight.innerText;
  elOutput.innerText = value;
});

elRoot.addEventListener("click", () => {
  value = Math.sqrt(eval(value));
  elOutput.innerText = value;
});

elPercent.addEventListener("click", () => {
  value += elPercent.innerText;
  elOutput.innerText = value;
});

elPow.addEventListener("click", () => {
  value = Math.pow(eval(value), 2);
  elOutput.innerText = value;
});

// elExponet.addEventListener("click", () => {
//   value = Math.E(eval(value));
//   elOutput.innerText = value;
// });


elEqual.addEventListener("click", () => {
  elOutput.innerText = eval(elOutput.innerText);
});