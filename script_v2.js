let buttons = document.querySelectorAll(".number");
let calcArea = document.querySelector(".grid-section");
let clearButton = document.querySelector(".ac");
let deleteButton = document.querySelector(".del");
let screenOutput = document.querySelector(".output");
let operators = document.querySelectorAll(".operator");
let screenOutputTop = document.querySelector(".top-output");
let equals = document.querySelector(".equals");

let firstNumber = "";
let operator = null;
let secondNumber = null;
let answer = null;

//UI
function formatOperator(operatorString) {
  if (operatorString === "+" || operatorString === "-") {
    return operatorString;
  }
  if (operatorString === "*") {
    return "×";
  }
  if (operatorString === "/") {
    return "÷";
  }
}

function updateUI() {
    screenOutputTop.textContent = "";
    screenOutput.textContent = "";
  if (secondNumber == null && operator == null && answer == null) {
    screenOutput.textContent = firstNumber;
    return;
  }
  if (secondNumber == null && operator != null && answer == null) {
    screenOutput.textContent = `${firstNumber} ${formatOperator(operator)}`;
    return;
  }
  if (secondNumber != null && operator != null && answer == null) {
    screenOutput.textContent = `${firstNumber} ${formatOperator(operator)} ${secondNumber}`;
    return;
  }
  screenOutput.textContent = answer;
  screenOutputTop.textContent = `${firstNumber} ${formatOperator(operator)} ${secondNumber} =`;
}

//numbered buttons
function handleNumberButtonClick(buttonEvent) {
  let buttonNumber = buttonEvent.target.dataset.buttonValue;
  if (answer != null) {
    operator = null;
    secondNumber = null;
    answer = null;
    firstNumber = buttonNumber;
    updateUI();
    return;
  }
  if (operator != null) {
    if (secondNumber == null) {
      secondNumber = buttonNumber;
    } else {
      secondNumber = secondNumber + buttonNumber;
    }
    updateUI();
    return;
  }
  //modifying first number
  if (firstNumber === "0" && buttonNumber === "0") {
    return;
  }
  if (firstNumber === "0" && buttonNumber !== "0") {
    firstNumber = buttonNumber;
  } else {
    firstNumber = firstNumber + buttonNumber;
  }
  updateUI();
}

buttons.forEach((button) => {
  button.addEventListener("click", handleNumberButtonClick);
});

//operators buttons
function handleOperatorButtonClick(operatorButtonEvent) {
  if (firstNumber === "" || secondNumber != null) {
    return;
  }
  operator = operatorButtonEvent.target.dataset.buttonValue;
  updateUI();
}

operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorButtonClick);
});

//equals button
function handleEqualsButtonClick(equalsButtonEvent) {
  if (firstNumber === "" || operator == null || secondNumber == null) {
    return;
  }
  if (operator === "+") {
    answer = Number(firstNumber) + Number(secondNumber);
    updateUI();
    return;
  }
  if (operator === "-") {
    answer = Number(firstNumber) - Number(secondNumber);
    updateUI();
    return;
  }
  if (operator === "*") {
    answer = Number(firstNumber) * Number(secondNumber);
    updateUI();
    return;
  }
  if (operator === "/") {
    answer = Number(firstNumber) / Number(secondNumber);
    updateUI();
    return;
  }
}

equals.addEventListener("click", handleEqualsButtonClick);
