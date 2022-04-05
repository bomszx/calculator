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