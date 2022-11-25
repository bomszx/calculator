

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

// variables
let prevOperandTextEl = document.querySelector('[data-previous-operand]');
let currOperandTexEl = document.querySelector('[data-current-operand]');
let operation = '';
let currentOperand = '';
let prevOperand = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('#button-clear');

// event listeners for clicks on number btns - appendNum appends/joins the values of the buttons
numberButtons.forEach(button => button.addEventListener('click', () => {
    appendNumber(button.innerText)
    updateDisplay()
}));

// event listeners for clicks on orperator btns - setOp sets the operator to the buttons innerText value
operationButtons.forEach(button => button.addEventListener('click', () => {
    setOperator(button.innerText)
    updateDisplay()
}));

// this function joins the number strings so we can pass it to our fn that displays to our screen
function appendNumber(number) {
    currentOperand = currentOperand + number
    console.log(currentOperand)
}

//this sets our textElement into the current operand, we can use template string later to display the operand and the operator
function updateDisplay() {
    prevOperandTextEl.innerText = `${currentOperand} ${operation} `
}


function setOperator(operator) {
    operation = operator;
    console.log(operation)
}

/*
    1. we type the number on our currentOperand screen
        - it has to be a number otherwise it should not work
        -
    2. once we press an operator, the number currently on the screen will become our prevOperand
    3. we type the numbers on our screen for the next operand then..
        - if an operator is pressed, we should save the numbers on the screen, then compute
        - if equals is pressed, our screen should display the solution
    4. 
    

*/

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