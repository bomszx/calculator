// dom elements
let prev = document.querySelector('#prevOp');
let buttons = document.querySelectorAll('#button');
let buttonOperator = document.querySelectorAll('#button-operator');

//store input in an array, find out a way to iterate over said array and 'evaluate' each item

// variables
let value = [];
let input = document.querySelector('#prevOp')

// function to append the clicked button to our screen div
 buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // assigns the value to the btn
        button.value = e.target.value;
        value.push(button.value)

        // gives us a string form of the input value, now we need to use the operate func on this value
        prevOpValue = button.value;
        console.log(value);

        // append to our screen
        prev.append(prevOpValue)
    })
})

// operator buttons event listener
buttonOperator.forEach(function(button) {
    button.addEventListener('click', function(e) {
        button.value = e.target.value;

        // pushes the operator to the operator array
        operator = button.value;
        value.push(operator)
        console.log(value)

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