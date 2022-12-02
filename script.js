
function operate(operation, previousOperand, currentOperand) {
    let solution;
    let prev = parseFloat(previousOperand)
    let curr = parseFloat(currentOperand)
    if(currOperand === '') return
    switch(operation) {
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
    currOperand = solution.toString();
    updateDisplay()
    prevOperand = '';
    operator = undefined;
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
    setOperator(operation.innerText);
}))

clearButton.addEventListener('click', () => {
    clear();
})

function appendNumber(number) {
    if(currOperand.includes('.') && number === '.') return;
    currOperand = currOperand.toString() + number.toString();
    console.log(currOperand)
}

function updateDisplay() {
    currOperandTexEl.innerText = currOperand;
}

function setOperator(operation) {
    // operator = operation;
    if(currOperand == '') return
    if(prevOperand !== '') {
        operate(operator, prevOperand, currOperand)
    }
    operator = operation;
    prevOperand = currOperand
    currOperand = '';
}

function clear() {
    currOperandTexEl.innerText = '';
    prevOperand = '';
    currOperand = '';
    operator = undefined;
}
