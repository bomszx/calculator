let tops = document.querySelector('#top-screen');
let middle = document.querySelector('#middle-screen');
let a;
let b;
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
    button.addEventListener('click', e => {
        console.log(e.target.value)
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', e => {
        console.log(e.target.value)
    })
})

equalsBtn.addEventListener('click', e => {
    console.log(e.target.value)
})