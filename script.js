// dom elements
let prev = document.querySelector('#prevOp');
let buttons = document.querySelectorAll('#button');
let buttonOperator = document.querySelectorAll('#button-operator');

// variables
let prevOpValue = ''; // a
let curOpValue = ''; // b
let operator = '';

// function to append the clicked button to our screen div
 buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // assigns the value to the btn
        button.value = e.target.value;

        // pushes the value to the displayValue array
        // curOpValue.push(button.value)

        prevOpValue += button.value;
        console.log(prevOpValue);

        // append to our screen
        prev.append(e.target.value)

    })
})



// operator buttons event listener
buttonOperator.forEach(function(button) {
    button.addEventListener('click', function(e) {
        button.value = e.target.value;

        // pushes the operator to the operator array
        operator.push(button.value)

        // append to our screen
        prev.append(e.target.value)
    })
})

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