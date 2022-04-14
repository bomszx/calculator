// dom elements
let topScreen = document.querySelector('#topScreen');
let middleScreen = document.querySelector('#middleScreen');
let buttons = document.querySelectorAll('#button');
let clearBtn = document.querySelector('#clearButton')
let buttonOperator = document.querySelectorAll('#button-operator');
let equalsBtn = document.querySelector('.equals')
let input = document.querySelector('#prevOp')

/*
    1. input numbers on screen
    2. save the numbers on the screen after an operator button has been pressed
    3. operate on the values when 'equals' is pressed
    4. update screen with 'solution' value
*/ 

// variables
let displayValue;
let firstNo;
let secondNo;
let operators;

buttons.forEach(function(button) {
    button.addEventListener('click', onDisplay)
})

// operator buttons event listener
buttonOperator.forEach(function(button) {
    button.addEventListener('click', operatorClick);
})

// equalsBtn event listener
equalsBtn.addEventListener('click', equals)

clearBtn.addEventListener('click', clear)

function onDisplay(e) {
    let num = e.target.value;  
    middleScreen.append(num);
} 

function operatorClick() {
    console.log(middleScreen.innerText)
}

function equals() {

    // for loop to iterate over the value array
    // for(let i = 0; i < values.length; i++) {

    // }
}

// function to clear screen

function clear() {
    topScreen.innerText = '';
    middleScreen.innerText = '';
    firstNo = '';
    secondNo = '';
    operators = '';
}

// functions to populate screen


// operate function, used a switch statement to switch operators depending on the need
function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            if(b === 0) {
                return null
            } else {
                return divide(a, b)
            }
            break;
        default:
            return null;
    }
}

// add
function add(a,b) {
    return a + b
}

// subtract
function subtract(a,b) {
    return a - b
}


// multiply
function multiply(a,b) {
    return a * b
}

// divide
function divide(a,b) {
    return a / b
}
