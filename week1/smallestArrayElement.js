// Program to find the smallest element in an array

// Define an array of marks
let marks = [90, 78, 65, 98];

// Initialize 'smallest' with the first element of the array
let smallest = marks[0];

// Loop through the array to compare each element
for (let i = 0; i < marks.length; i++) {
    // If the current element is smaller than 'smallest'
    if (smallest > marks[i]) {
        // Update 'smallest' with the current element
        smallest = marks[i];  
    }
}

// Print the smallest element
console.log(smallest); // Output: 65
