let tops = document.querySelector('#top-screen');
let middle = document.querySelector('#middle-screen');
let firstOp;
let secondOp;
let result;
let displayValue;
let operator;


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
    middle.innerText = '';
}

function clearScreen() {
    middle.innerText = '';
}

/*
    4. Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

    5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    a. press numbers
    b. press operator (save numbers for a)
    c. press numbers
    d. press operator(evaluate) or press equals (evaluate) either way will save the number for (b)

    */

// append numbers to screen
function appendScreen(e) {
    middle.append(e.target.value);
    displayValue = Number(middle.innerText);

    firstOp = displayValue;
    console.log(firstOp);
}

function appendTop() {
    tops.append(displayValue);
}

function setOperator(e) {
    operator = e.target.value
    displayValue = Number(middle.innerText);

    secondOp = displayValue;
    console.log(secondOp)

}

function evaluate() {
    result = operate(operator, firstOp, secondOp);
    console.log(result);
}






