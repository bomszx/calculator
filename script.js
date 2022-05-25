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

function clearScreen() {
    middle.innerText = '';
}

// append numbers to screen
function appendScreen(e) {
    console.log(e.target.value)
    middle.append(e.target.value)

}

function appendTopScreen() {
    let num;
    num = middle.innerText;

    tops.append(`${num} ${operator}`);
}

function setOperator(e) {
    operator = e.target.value;
    appendTopScreen();
    firstOperand = middle.innerText;
    middle.innerText = '';

    // if(!firstOperand)
    
}

function evaluate() {
    if(firstOperand && secondOperand && operator) {
        middle.append((operate(operator, firstOperand, secondOperand)));
    }
}

