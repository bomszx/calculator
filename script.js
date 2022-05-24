let tops = document.querySelector('#top-screen');
let middle = document.querySelector('#middle-screen');
let firstOperand;
let secondOperand;
let c;
let operator;

const buttons = document.querySelectorAll('#button')
const operatorBtn = document.querySelectorAll('#button-operator')
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

buttons.forEach(button => {
    button.addEventListener('click', appendScreen)
    })


operatorBtn.forEach(button => {
    button.addEventListener('click', setOperator)
})

equalsBtn.addEventListener('click', evaluate);

// append numbers to screen
function appendScreen(e) {
    let num = e.target.value;
    middle.append(num);
}

function appendTopScreen() {
    let num = middle.textContent
    tops.append(num)
}

function setOperator(e) {
    operator = e.target.value;
    appendTopScreen();
}

function evaluate() {
    if(a && b && operator) {
        console.log(operate(operator, a, b))
    }
}

/*
    - click a number
    - when an operator is clicked
    - send the number into top screen

    - if the user presses '=' evaluate
    - if the user presses another operator append number into top screen
*/