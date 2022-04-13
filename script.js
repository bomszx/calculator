// dom elements
let prev = document.querySelector('#prevOp');
let cur = document.querySelector('#curOp');
let buttons = document.querySelectorAll('#button');
let buttonOperator = document.querySelectorAll('#button-operator');
let equalsBtn = document.querySelector('.equals')


// variables
let prevOp = [];
let curOp = [];
let operators = [];

let input = document.querySelector('#prevOp')


// create the function that will append to the screen

// pass the operator value, pass the a value then b value to the operate function?

// store input in an array, find out a way to iterate over said array and 'evaluate' each item

// function to append the clicked button to our screen div
 buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // assigns the value to the btn
        button.value = e.target.value;
        prevOp.push(button.value)

        // gives us a string form of the input value, now we need to use the operate func on this value
        prevOpValue = button.value;
        console.log(prevOp);

        // append to our screen
        prev.append(prevOpValue)
    })
})

// operator buttons event listener
buttonOperator.forEach(function(button) {
    button.addEventListener('click', populateScreen);
})

// equalsBtn event listener
equalsBtn.addEventListener('click', equals)

function equals() {

    // for loop to iterate over the value array
    // for(let i = 0; i < values.length; i++) {

    // }
}

// function to populate screen
function populateScreen(e) {
    let a = e.target.value;
    cur.append(a);

    return a;
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
