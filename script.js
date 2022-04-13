// dom elements
let firstNo = document.querySelector('#firstNum');
let secondNo = document.querySelector('#secondNum');
let buttons = document.querySelectorAll('#button');
let clearBtn = document.querySelector('#clearButton')
let buttonOperator = document.querySelectorAll('#button-operator');
let equalsBtn = document.querySelector('.equals')


// variables
let firstOp = ' ';
let secondOp = ' ';
let operators = ' ';

let input = document.querySelector('#prevOp')


// create the function that will append to the screen

// pass the operator value, pass the a value then b value to the operate function?

// store input in an array, find out a way to iterate over said array and 'evaluate' each item

// figure out how to save firstOp after clicking an operator

// function to append the clicked button to our screen div
//  buttons.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         // assigns the value to the btn
//         button.value = e.target.value;
//         prevOp.push(button.value)

//         // gives us a string form of the input value, now we need to use the operate func on this value
//         prevOpValue = button.value;
//         console.log(prevOp); 

//         // append to our screen
//         prev.append(prevOpValue)
//     })
// })

buttons.forEach(function(button) {
    button.addEventListener('click', screenFirstNo, screenSecondNo)
})

// operator buttons event listener
buttonOperator.forEach(function(button) {
    button.addEventListener('click', screenOp);
})

// equalsBtn event listener
equalsBtn.addEventListener('click', equals)

clearBtn.addEventListener('click', clear)



function equals() {

    // for loop to iterate over the value array
    // for(let i = 0; i < values.length; i++) {

    // }
}

// function to clear screen

function clear() {
    firstNo.innerText = '';
    secondNo.innerText = '';
    firstOp = '';
    secondOp = '';
    operators = '';
}

// functions to populate screen

function screenFirstNo(e) {
    let a = e.target.value;
    firstNo.append(a);
    firstOp += a
    console.log(firstOp)
    return a;
}

function screenSecondNo(e) {
    let b = e.target.value;
    secondNo.append(b);
    secondOp += b
    console.log(secondOp)
    return b;
}


function screenOp(e) {
    let operator = e.target.value;
    firstNo.append(operator);
    operators += operator
    console.log(operators)
    return operator;
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
