let operand1 = '';
let operand2 = '';
let currentOperation = null;
let shouldReset = false;

const display = document.getElementById('display');
const numberButton = document.querySelectorAll('#number');
const clearButton = document.querySelector('#clear');
const operatorButton = document.querySelectorAll('#operator');
const currentOperator = document.querySelector('#operator');
const equalButton = document.querySelector('#equal');

numberButton.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorButton.forEach((button) => button.addEventListener('click', () => appendOperator(button.textContent)));
equalButton.addEventListener('click', evaluate);


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
    secondOperand;

}

operatorButton.forEach((button) => button.addEventListener('click',function handleClick(event) {
    event.target.classList.add('pressedButton');
}));

let secondOperand = operatorButton.forEach((button) => button.addEventListener('click',function handleClick(event) {
    resetScreen();
    display.textContent = `0`;
    /*document.getElementById('number').onclick = function() {
    alert("button was clicked");
    }
    */
}));


let appendNumber = (num) => {
    if (display.textContent === '0' || shouldReset) {
        resetScreen();
    }
    display.textContent += num;
};

function evaluate() {
    operand2 = display.textContent;
    console.log(operand2);
    console.log('=');
    
    let operator = currentOperation.toString();
    console.log(`${operand1}${operator}${operand2}=`);
    if(currentOperation === null){
        alert('error');
    } 
    operate(operator,operand1,operand2);
    console.log(operate(operator,operand1,operand2));
    
    
}

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

