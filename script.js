let opScreen = document.querySelector('#opScreen');
let solution = document.querySelector('#solution-screen');
let history = document.querySelector('#history');
let firstOp = '';
let secondOp = '';
let result = '';
let storedOp = '';
let historyVar = '';
let operator;
let waitingSecondOp = true;

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector('#button-clear')
const delBtn = document.querySelector('#button-delete')
const sign = document.querySelector('.sign');
const decimal = document.querySelector('.decimal')

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if(b === 0) {
                solution.innerText = 'Null'
                // return null
            } else {
                return divide(a, b)
            }
        default:
            return null;
    }
}

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

/*
enter numbers on screen
when operator is pressed save the numbers currently on screen
clear screen
numbers entered will be second operand
if button pressed is operator, evaluate
*/

function popHistory() {
    history.innerText = `${firstOp} ${operator} ${secondOp}`
}

function appendScreen(e) {
    opScreen.innerText += e.target.value;
}

function saveOperator(e) {
    operator = e.target.value    
    console.log(operator)
    if(!firstOp) {
        saveFirstOp();
    } else {
        saveSecondOp();
    }
    return operator
}

function saveFirstOp() {
    firstOp = opScreen.innerText;
    console.log(firstOp, "first op");
    opScreen.innerText = '';
    return firstOp;
}

function saveSecondOp() {
    secondOp = opScreen.innerText;
    console.log(secondOp, "second op")
    return secondOp;
}

function evaluate() {
    saveSecondOp()
    a = parseInt(firstOp);
    b = parseInt(secondOp)
    console.log(operate(operator, a, b))
}


equalsBtn.addEventListener('click', evaluate)

numbers.forEach(button => button.addEventListener('click', appendScreen));

operators.forEach(button => button.addEventListener('click', saveOperator))

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
    historyVar += e.target.value
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