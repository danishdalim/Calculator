let operand1 = '';
let operand2 = '';
let currentOperation = null;
let shouldReset = false;

const display = document.getElementById('display');
const numberButton = document.querySelectorAll('#number');
const clearButton = document.querySelector('#clear');

numberButton.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));

let clearScreen = () => {
    display.textContent = '0';
}

clearButton.addEventListener('click', clearScreen);

let resetScreen = () => {
    display.textContent = '';
    shouldReset = false;
}

let appendNumber = (num) => {
    if (display.textContent === '0' || shouldReset) {
        resetScreen();
    }
    display.textContent += num;
};

let add = (num1,num2) => {
    return num1 + num2;
};

let subtract = (num1,num2) => {
    return num1 - num2;
};

let multiply = (num1,num2) => {
    return num1 * num2;
};

let divide = (num1,num2) => {
    return num1 / num2;
};

let operate = (operator,num1,num2) => {
    if (operator === '+') {
        add(num1,num2);
    } else if (operator === '-') {
        subtract(num1,num2);
    } else if (operator === '*') {
        multiply(num1,num2);
    } else if (operator === '/') {
        divide(num1,num2);
    } else {
        alert('Invalid Operator');
    }
}





