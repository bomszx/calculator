let tops = document.querySelector('#top-screen');
let middle = document.querySelector('#middle-screen');
let firstOperand;
let secondOperand;
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
    firstOperand = '';
    secondOperand = '';
    operator = null;
    middle.innerText = '';
}

function clearScreen() {
    middle.innerText = '';
}

// append numbers to screen
function appendScreen(e) {
    middle.append(e.target.value);
}

function setOperator(e) {
    let num;
    operator = e.target.value;
    num = middle.innerText;
    firstOperand = Number(num);
    clearScreen();


}

function evaluate() {
    secondOperand = Number(middle.innerText);
    clearScreen();
    displayValue = operate(operator,firstOperand,secondOperand);

    middle.append(displayValue);
    firstOperand = displayValue;
}



