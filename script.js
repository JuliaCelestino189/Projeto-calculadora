
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";
let result = 0;
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (!value) {
            if (button.id === "clear") clearDisplay();
            if (button.id === "calculate") calculate();
            return;
        }

        if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function updateDisplay() {
    display.innerText = currentInput || "0";
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }

    if (currentInput.includes(".") && number === ".") return;

    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "") return;

    if (previousInput !== "" && !shouldResetDisplay) {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    result = 0;
    shouldResetDisplay = false;
    updateDisplay();
}

function calculate() {
    if (previousInput === "") return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput) || 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}
