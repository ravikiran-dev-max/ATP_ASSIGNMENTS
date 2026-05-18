// Program to calculate the sum of all elements in an array
// Define an array of marks
let marks = [90, 78, 65, 98];

// Initialize sum to 0
let sum = 0;

// Loop through the array and add each element to sum
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];  // Add current element to sum
}

// Print the final sum
console.log("The sum of Marks =", sum); // Output: 331
