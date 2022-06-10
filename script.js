let opScreen = document.querySelector('#opScreen');
let solution = document.querySelector('#solution-screen');
let firstOp = '';
let secondOp = '';
let result = '';
let storedOp = '';
let operator;
let waitingSecondOp = true;

const buttons = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('#button-equals')
const clearBtn = document.querySelector('#button-clear')
const delBtn = document.querySelector('#button-delete')

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
                return null
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
    opScreen = '';
    solution.innerText = '';
}

function clearScreen() {
    opScreen.innerText = '';
}

/*
    4. Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

    5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    a. press numbers
        - save number(firstOp)

    b. press operator to save number
        - save operator clicked
        - clearScreen()
        - number input on screen will be saved (secondOp)

    c. press numbers
        - evaluate
        - number on solution should be first/secondOp?
    */

opScreen.innerText = '';
solution.innerText = '';

// append numbers to screen
function appendScreen(e) {
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
    console.log(operator);
    clearScreen();
    firstOp = storedOp;
    console.log(secondOp + ' ' + 'I\'m secondOp')
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