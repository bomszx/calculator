// dom elements
let prev = document.querySelector('#prevOp');
let cur = document.querySelector('#curOp');
let buttons = document.querySelectorAll('#button');
let buttonOperator = document.querySelectorAll('#button-operator');
let equalsBtn = document.querySelector('.equals')

//store input in an array, find out a way to iterate over said array and 'evaluate' each item

// variables
let values = [];
let input = document.querySelector('#prevOp')


// function to append the clicked button to our screen div
 buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // assigns the value to the btn
        button.value = e.target.value;
        values.push(button.value)

        // gives us a string form of the input value, now we need to use the operate func on this value
        prevOpValue = button.value;
        console.log(values);

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
        values.push(operator)
        console.log(values)

        // append to our screen
        prev.append(e.target.value)

    })
})

// trying to add the equals function to our equals button, equals function will try to evaluate the elements in the array

// equalsBtn event listener

equalsBtn.addEventListener('click', function(e) {
    console.log(e)
})

function equals() {
    // should we run the operate function here?

    // for loop to iterate over the value array
for(let i = 0; i < values.length; i++) {
    console.log(i)
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