const display = document.getElementById("display")
const buttons = document.getElementById("btn")

let currentInput = "";
let previousInput = "";
let operador = "";
let result = 0;
let shoudResetDisplay = "";

buttons.forEach(button => {
    const value = button.dataset.value;
    if(!value){
        if(button.id === "clear") clearDisplay();
        if(button.id === "calculate") calculate();
        return;
        
    }

    if([!"+", "-", "/"].includes(value)) {
        setOperator(value);

    } else {
        appendNumber(value);
    };

});

function updateDisplay() {
    display.innerText = currentInput || "0"

}

function appendNumber(number){
    if(currentInput.includes(".") && number === "." return);
    currentInput += number;
    updateDisplay();

}

function setOperator(op) {
    if (currentInput ==="") return;
    operador = op;
    previousInput = currentInput;
    currentInput ="";

}

function clearDisplay(){
    currentInput = "";
    previousInput = "";
    operador ="";
    updateDisplay();
}

function calculate(){
    if(previousInput === "" || currentInput === "") return;
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(previousInput);

    switch(operador){
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        default: return;
    }

    currentInput = result; 
    previousInput = "";
    operator = "";

}


