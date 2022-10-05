let operand1 = '';
let operand2 = '';
let currentOperation = null;
let shouldReset = false;

const display = document.getElementById('display');
const numberButton = document.querySelectorAll('#number');
const clearButton = document.querySelector('#clear');
const operatorButton = document.querySelectorAll('#operator');

numberButton.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorButton.forEach((button) => button.addEventListener('click', () => appendOperator(button.textContent)));

let resetScreen = () => {
    display.textContent = '';
    shouldReset = false;
}

let appendOperator = (operator) => {
    if (display.textContent === '0' || shouldReset) {
        alert('Please insert number')
    } else {
        operand1 = display.textContent;
        //display.textContent += operator;
        console.log(operand1)
        currentOperation = operator;
        console.log(currentOperation)
    }
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

/*
let toggledButton = () => {
    document.getElementById("operator").classList.add('pressedButton');
}
*/

let clearScreen = () => {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    currentOperation = null;
    shouldReset = false;
}

clearButton.addEventListener('click', clearScreen);

