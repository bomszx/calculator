let prevOperandTextEl = document.querySelector('[data-previous-operand]');
let currOperandTexEl = document.querySelector('[data-current-operand]');
let operator = '';
let currentOperand = '';
let prevOperand = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('#button-clear');

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
        case '*':
            return multiply(previousOperand, currentOperand)
            break;
        case '/':
            return divide(previousOperand, currentOperand)
            break;
        default:
            return;
    }
}

numberButtons.forEach(button => button.addEventListener('click', () => {
    appendNumber(button.innerText)
    updateDisplay();
}));

operationButtons.forEach(button => button.addEventListener('click', () => {
    setOperator(button.innerText)
    updateDisplay();
}));

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
}

function updateDisplay() {
    currOperandTexEl.innerText = currentOperand;
}

function setOperator(operator) {
    console.log(operator)
}

/*
// Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', appendScreen)
    })

operatorBtn.forEach(operator => {
    operator.addEventListener('click', setOperator);
    })


// operatorBtn.forEach(button => {
//     button.addEventListener('click', setOperator)
// })

equalsBtn.addEventListener('click', evaluate);

clearBtn.addEventListener('click', clearButton)

// Functions
function clearButton() {
    firstOp = '';
    secondOp = '';
    operator = null;
    history.innerText = '';
    opScreen.innerText = '';
    solution.innerText = '';
}

function clearScreen() {
    opScreen.innerText = '';
}

opScreen.innerText = '';
solution.innerText = '';

// append numbers to screen
function appendScreen(e) {
    historyVar += e.target.value
    console.log(historyVar)
    opScreen.innerText += e.target.value //middle screen
    storedOp = opScreen.innerText;
    secondOp = storedOp;
    console.log(firstOp + ' ' + ' I\'m firstOp')
    if(firstOp && secondOp) {
        evaluate();
    }
}

function setOperator(e) {
    // waitingSecondOp = true;
    operator = e.target.value;
    clearScreen();
    firstOp = storedOp;
}

function evaluate() {
    if(result != undefined) {
        result = operate(operator, parseInt(firstOp), parseInt(secondOp))
        console.log(result + ' ' + 'I\'m the result')
        solution.innerText = result;
        storedOp = result;
    } else {
        result = operate(operator, parseInt(firstOp), parseInt(secondOp))
        console.log(result + ' ' + 'I\'m the result')
        solution.innerText = result;
    }
}
*/