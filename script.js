let calcArea = document.querySelector(".grid-section");
let buttons = document.querySelectorAll(".number");
let screenOutput = document.querySelector(".output");
let clearButton = document.querySelector(".ac");
let deleteButton = document.querySelector(".del");
let solveButton = document.querySelector(".equals");
let addButton = document.querySelector(".plus");
let subtractButton = document.querySelector(".minus");
let multiplicationButton = document.querySelector(".times");
let divisionButton = document.querySelector(".division");

let blockMultipleMathSigns = false;

//displayed array of numbers with basic value
let output = [0];

//display number and add them to output
buttons.forEach((button) => {
  const handleButton = (btn) => {
    output.push(Number(button.textContent));
    if (output.length > 1 && output[0] === 0) {
      output.shift();
    }
  };
  button.addEventListener("click", handleButton);
});

//delete last character
const handleDelete = () => {
  if (output.length !== 1) {
    output.pop();
  } else {
    output = [0];
  }
  blockMultipleMathSigns = false;
};

//clear all function
const handleClear = () => {
  output = [0];
  answer = undefined;
  blockMultipleMathSigns = false;
};

//sum up function
const handleAdd = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" + ");
  }
  blockMultipleMathSigns = true;
};

//substract function
const handleSubtract = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" - ");
  }
  blockMultipleMathSigns = true;
};

//multiplicate function
const handleMultiplication = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" * ");
  }
  blockMultipleMathSigns = true;
};

//divide function
const handleDivision = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" / ");
  }
  blockMultipleMathSigns = true;
};

//get result of operation
const handleEquals = () => {
  if (isNaN(output[output.length - 1]) === true) {
    return;
  }
  output = output.join("");
  output = output.toString("");
  answer = eval(output);
  console.log(answer)
  if(answer % 1 === 0) {
    answer = answer
  } else {
    answer = answer.toFixed(10)
  }
  output = answer.toString().split("");
  blockMultipleMathSigns = false;

  if (output[0] === "-") {
    output[0] = " - ";
  }
};

const updateOutput = () => {
  screenOutput.textContent = output.join("");
};
multiplicationButton.addEventListener("click", handleMultiplication)
divisionButton.addEventListener("click", handleDivision)
deleteButton.addEventListener("click", handleDelete);
clearButton.addEventListener("click", handleClear);
addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);
solveButton.addEventListener("click", handleEquals);
calcArea.addEventListener("click", updateOutput);
document.body.addEventListener("click", () => {
  // console.log(blockMultipleMathSigns);
console.log(output.length)

});
updateOutput();
