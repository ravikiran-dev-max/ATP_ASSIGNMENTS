// Demonstration of Shallow Copy in JavaScript

// Original array
let fruits = ["Apple", "Banana"];

// New array (will hold shallow copy)
let newArray = [];

console.log("Performing Shallow Copy");

// Using spread operator (...) to copy elements
newArray = [...fruits]; // shallow copy of fruits array

// Display both arrays
console.log("Original fruits array:", fruits);   // ["Apple", "Banana"]
console.log("Copied array:", newArray);          // ["Apple", "Banana"]

// Modify the original array
fruits.push("Guava"); // add new element to original array

// Display arrays after modification
console.log("After pushing 'Guava' into fruits:");
console.log("Original fruits array:", fruits);   // ["Apple", "Banana", "Guava"]
console.log("Copied array (unchanged):", newArray); // ["Apple", "Banana"]
