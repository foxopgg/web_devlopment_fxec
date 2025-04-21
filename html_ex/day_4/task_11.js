function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}
console.log("Calc 5 * 3:", calculator(5, 3, '*'));
