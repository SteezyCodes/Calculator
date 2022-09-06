let buttons = document.querySelectorAll(".number");
let screenOutput = document.querySelector(".output");
let clearButton = document.querySelector(".ac");
let deleteButton = document.querySelector(".del");
let addButton = document.querySelector(".plus");
let solveButton = document.querySelector(".equals");
let subtractButton = document.querySelector(".minus");

let blockMultipleMathSigns = false;

//displayed array of numbers with basic value
let output = [0];

buttons.forEach((button) => {
  const handleButton = (btn) => {
    output.push(Number(button.textContent));
    if (output.length > 1 && output[0] === 0) {
      output.shift();
    }
  };
  button.addEventListener("click", handleButton);
});

const handleDelete = () => {
  if (output.length !== 1) {
    output.pop();
  } else {
    output = [0];
  }
};

const handleClear = () => {
  output = [0];
  answer = undefined;
  blockMultipleMathSigns = false;
};

const handleAdd = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" + ");
  }
  blockMultipleMathSigns = true;
};

const handleSubtract = () => {
  if (blockMultipleMathSigns === false) {
    output.push(" - ");
  }
  blockMultipleMathSigns = true;
};

const handleEquals = () => {
  output = output.join("");
  output = output.toString("");
  answer = eval(output);
  output = answer.toString().split("");
  blockMultipleMathSigns = false;
  if (output[0] === "-") {
    output[0] = " - ";
}
};

deleteButton.addEventListener("click", handleDelete);
clearButton.addEventListener("click", handleClear);
addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);
solveButton.addEventListener("click", handleEquals);

setInterval(() => {
  screenOutput.textContent = output.join("");
}, 200);