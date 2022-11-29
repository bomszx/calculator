

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, previousOperand, currentOperand) {
    switch(operator) {
        case '+':
            return add(previousOperand, currentOperand)
            break;
        case '-':
            return subtract(previousOperand, currentOperand) 
            break;
        case 'x':
            return multiply(previousOperand, currentOperand)
            break;
        case '/':
            return divide(previousOperand, currentOperand)
            break;
        default:
            return;
    }
}

// variables
let prevOperandTextEl = document.querySelector('[data-previous-operand]');
let currOperandTexEl = document.querySelector('[data-current-operand]');
let operator = '';
let currentOperand = '';
let prevOperand = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('#button-clear');

numberButtons.forEach((button) => button.addEventListener('click', () => {
    appendNumber(button.innerText)
    updateDisplay()
}))

equalsButton.addEventListener('click', () => {
    evaluate();
    updateDisplay();
})

operationButtons.forEach((operation) => operation.addEventListener('click', () => {
    setOperator(operation.innerText)
}))

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
}

function updateDisplay() {
    currOperandTexEl.innerText = currentOperand;
}

function setOperator(operation) {
    operator = operation;
    console.log(operator)
    if(operator === '') return
    if(prevOperand !== '') {
        evaluate();
    }
    prevOperand = currentOperand;
    currentOperand = '';
}

function evaluate() {
    let curr = parseFloat(currentOperand);
    let prev = parseFloat(prevOperand);
    currentOperand = operate(operator, prev, curr)
    return;
}