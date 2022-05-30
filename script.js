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

//Event Listeners
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
    middle.innerText += e.target.value;
}

function appendTops() {
    tops.innerText = `${firstOperand} ${operator}`;
}

function setOperator(e) {
    let num;
    operator = e.target.value
    num = middle.innerText;
    firstOperand = num;
    
    appendTops();
    console.log(firstOperand);

    /*
        if operator is true, let num = secondOperand?
    */
}

function evaluate() {
    if(firstOperand && secondOperand && operator) {
        console.log(operate(operator, firstOperand, secondOperand))
    } else {
        return;
    }
}


// function appendTopScreen() {
//     let num;
//     num = middle.innerText;
//     firstOperand = num;

// }

// function clearMiddle() {
//     middle.innerText = '';
// }


/*
    1. enter number (firstOperand)
    2. enter operator - save the firstOperand, save operator, clear middle screen
    3. enter number (secondOperand)
    4. 
        a. if btn pressed is an operator, evaluate the first and second operand
        b. if btn pressed is equals btn, evaluate
*/