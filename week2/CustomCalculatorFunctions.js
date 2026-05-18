// Demonstration of Basic Arithmetic Functions in JavaScript

// Addition function
let addition = function(num1, num2) {
    return num1 + num2;
};

// Subtraction function
let substraction = function(num1, num2) {
    return num1 - num2;
};

// Multiplication function
let Multiplication = function(num1, num2) {
    return num1 * num2;
};

// Division function
let Division = function(num1, num2) {
    return num1 / num2;
};

// Percentile function (calculate percentage of a value)
let percentile = function(percent, value) {
    return (percent / 100) * value;
};

// Test the functions with sample inputs
console.log("Addition (100 + 200):", addition(100, 200));
console.log("Subtraction (200 - 100):", substraction(200, 100));
console.log("Multiplication (100 * 200):", Multiplication(100, 200));
console.log("Division (200 / 100):", Division(200, 100));
console.log("20% of 456789:", percentile(20, 456789));
