let num1 = document.getElementById("number");
let num2 = document.getElementById("number");

add = (num1,num2) => {
    return num1 + num2;
};

subtract = (num1,num2) => {
    return num1 - num2;
};

multiply = (num1,num2) => {
    return num1 * num2;
};

divide = (num1,num2) => {
    return num1 / num2;
};

operation = (operator, num1, num2) => {
    const operator = document.getElementById("operator");

    if (operator === "add") {
        return add(num1, num2);
    } else if (operator === "subtract") {
        return subtract(num1, num2);
    } else if (operator === "multiply") {
        return multiply(num1, num2);
    } else if (operator === "divide") {
        return divide(num1, num2);
    }
};