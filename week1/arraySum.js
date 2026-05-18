// Function that returns the sum of all elements in an array
const arraySum = function(marks) {
    // Initialize sum to 0
    let sum = 0;

    // Loop through the array and add each element to sum
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i]; // performing addition
    }

    // Return the final sum
    return sum;
}
// Define an array of marks
let marks = [30, 40, 50, 60];

// Call the function and print the result
console.log("The sum of Marks =", arraySum(marks)); // Output: 180
