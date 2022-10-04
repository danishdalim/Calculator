let operand1 = '';
let operand2 = '';
let currentOperation = null;
let shouldReset = false;

const display = document.getElementById('display');
const numberButton = document.querySelectorAll('#number');

numberButton.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
    );

let appendNumber = (number) => {
    display.textContent += number;
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

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));






