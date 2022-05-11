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
    button.addEventListener('click', function(e) {
        if(!operator) {
            displayOne(e)
        }  else {
            displayTwo(e)
        }
    })
})

buttonOperator.forEach(button => {
    button.addEventListener('click', clickOp)
})

equalsBtn.addEventListener('click', equals) 


//convert the values into int, then the logic should allow for a single pair of numbers to be evaluated first!

// we want a function/logic that would run the operate function everytime an operator is clicked

/*
    - click numpad for numbers
    - numbers that will show on screen will be our first value if an operator btn is pressed after the numbers
    - next numbers on screen after an op btn is pressed will be our second value
    - after the second set of numbers, if an operator button is pressed it should evaluate that pair

    if first no is ''?, we assign the no. on the screen as the first no when we pressed an operator, after pressing an op, we clear the screen in prep for the second no.

    the next numbers on the screen will be evaluated based on the operator that has been pressed if we eigher press '=' or another operator key

    find a way to get values without removing the numbers from the topScreen
*/

// populateDisplay function
// function populateDisplay(e) {
    
//     if(!operator) {
//         let num = e.target.value;
//         topScreen.append(num);
//         a = parseInt(topScreen.innerText);
//         console.log(a)
//     } else if(a) {
//         let numTwo = e.target.value;
//         topScreen.append(numTwo);
//         b = parseInt(topScreen.innerText);
//         console.log(b)
//     }
// }

function displayOne(e) {
    topScreen.append(e.target.value)
    a = parseInt(topScreen.innerText);
}

function displayTwo(e) {
    topScreen.append(e.target.value)
    b = parseInt(topScreen.innerText);
}

// press an operator button
function clickOp(e) {
    operator = e.target.value;
    topScreen.append(operator)   
  
}

//  press equals button
function equals(e) {
    console.log(e.target.value)

    thirdNo = operate(operator, a, b)
    solutionScreen.append(thirdNo)
}