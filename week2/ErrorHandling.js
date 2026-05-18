// Demonstration of Error Handling / Exception Handling in JavaScript

console.log("First");

try {
    // Attempt to use a variable that is not defined
    console.log(a); // 'a' is not declared, will throw ReferenceError
} 
catch (err) {
    // Catch block handles the error gracefully
    console.log("Error caught:", err.message);
}

console.log("Second");
console.log("Third");
