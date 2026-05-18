// Demonstration of Object Manipulation in JavaScript

// Create an object
let person = {
    name: "Ravi",
    age: 20
};

// Add a new property
person.city = "Hyderabad";

// Update an existing property
person.name = "Kiran"; // name updated here

console.log("Updated Person:", person);

// Delete a property
delete person.age; // deletes the 'age' property
console.log("Age Deleted : Here");
console.log("After Deletion:", person);

// Callback function example
// A callback is a function passed as an argument to another function
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // execute the callback function
}

// Define a callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Pass the callback function to another function
greet("Ravi", sayGoodbye);
