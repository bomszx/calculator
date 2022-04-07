
//user inputs a number

// dom elements
let prev = document.querySelector('#prevOp');
let buttons = document.querySelectorAll('#button')

// function to append the clicked button to our screen div

 buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        button.value = e.target.value;
        console.log(button.value)
        prev.append(e.target.value)
    })
})

// buttons.forEach(button => button.addEventListener('click', function(e) {
//     console.log(e.target)
// }))

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