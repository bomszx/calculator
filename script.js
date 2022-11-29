
function operate(operator, previousOperand, currentOperand) {
    let solution;
    let prev = parseFloat(previousOperand)
    let curr = parseFloat(currentOperand)
    switch(operator) {
        case '+':
            solution = prev + curr;
            break;
        case '-':
            solution = prev - curr;
            break;
        case 'x':
            solution = prev * curr;
            break;
        case '/':
            solution = prev / curr;
            break;
        default:
            return; 
    }
    currOperand = solution;
}

// variables
let prevOperandTextEl = document.querySelector('[data-previous-operand]');
let currOperandTexEl = document.querySelector('[data-current-operand]');
let operator = '';
let currOperand = '';
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
    operate(operator, prevOperand, currOperand);
    updateDisplay();
})

operationButtons.forEach((operation) => operation.addEventListener('click', () => {
    setOperator(operation.innerText)
}))

function appendNumber(number) {
    currOperand = currOperand.toString() + number.toString();
}

function updateDisplay() {
    currOperandTexEl.innerText = currOperand;
}

function setOperator(operation) {
    operator = operation;
    prevOperand = currOperand
    currOperand = '';
    console.log(operator, prevOperand)
}

