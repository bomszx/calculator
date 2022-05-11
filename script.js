// dom elements
let topScreen = document.querySelector('#topScreen');
let solutionScreen = document.querySelector('#solution');
let buttons = document.querySelectorAll('#button');
let clearBtn = document.querySelector('#clearButton')
let buttonOperator = document.querySelectorAll('#button-operator');
let equalsBtn = document.querySelector('#button-equals')
let input = document.querySelector('#prevOp')

/*
    1. input numbers on screen
    2. save the numbers on the screen after an operator button has been pressed
    3. operate on the values when 'equals' is pressed
    4. update screen with 'solution' value
*/ 

// Variables
let firstNo;
let secondNo;
let thirdNo
let a;
let b;
let c;
let operator = "";


// Arithmetic Functions

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

// operate function, used a switch statement to switch operators depending on the need
function operate(operator, a, b) {

    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
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

// Event listeners
buttons.forEach(button => {
    button.addEventListener('click', populateDisplay)
})

buttonOperator.forEach(button => {
    button.addEventListener('click', clickOp)
})

equalsBtn.addEventListener('click', equals) 


// populateDisplay function
function populateDisplay(e) {
     if(!operator) {
        let num = e.target.value;
        topScreen.append(num);
        a = parseInt(topScreen.innerText);
        console.log(a)
    } else if(a) {
        let numTwo = e.target.value;
        topScreen.append(numTwo);
        b = parseInt(topScreen.innerText);
        console.log(b)

    } 

}

// press an operator button
function clickOp(e) {
        operator = e.target.value;
        topScreen.append(operator)   
        topScreen.innerText = '';
}

//  press equals button
function equals(e) {
    console.log(e.target.value)

    console.log(operate(operator, a,b))
        solutionScreen.append((operate(operator,a,b)))
}