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
equalButton.addEventListener('click',() => evaluate(operatorButton.forEach((button) => button.classList.remove('pressedButton'))));

document.addEventListener('keydown', (event) => {
  // Check if the key pressed was a number
  if (event.key >= '0' && event.key <= '9') {
    appendNumber(event.key);
  }
  // Check if the key pressed was an operator
  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    appendOperator(event.key);
  }
});

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

operatorButton.forEach((button) => {
    button.addEventListener('click',() => {
        //Remove the 'pressedButton' class from all operators buttons
        operatorButton.forEach((button) =>
        button.classList.remove('pressedButton'));
        //Add the 'pressedButton' to class to the clicked button
        button.classList.add('pressedButton');

});
});

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
    // Check if the number being appended is a decimal point
  if (num === '.') {
    // Check if the number being displayed already has a decimal point
    if (display.textContent.includes('.')) {
        alert('Only one decimal point is allowed');
      return;
    }
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
    let result;
    if (operator === '+') {
        result = add(num1,num2);
    } else if (operator === '-') {
        result = subtract(num1,num2);
    } else if (operator === '*') {
        result = multiply(num1,num2);
    } else if (operator === '/') {
            if (num2 === 0) {
                alert('Division by zero is not allowed');
                return;
                            }
        result = divide(num1,num2);
    } else {
        alert('Invalid Operator');
    }
    display.textContent = result;
    return result;
}

/*
let toggledButton = () => {
    document.getElementById("operator").classList.add('pressedButton');
}
*/
function evaluate() {
    operand2 = display.textContent;
    console.log(operand2);
    console.log('=');
    
    operator = currentOperation.toString();
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    console.log(`${operand1}${operator}${operand2}=`);
    if(currentOperation === null){
        alert('error');
    } 
    operate(operator,operand1,operand2);
    console.log(operate(operator,operand1,operand2));


    console.log(typeof operator);
    console.log(typeof operand1);
    console.log(typeof operand2);
    

    
}

let clearScreen = () => {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    currentOperation = null;
    shouldReset = false;
}

clearButton.addEventListener('click', clearScreen);

