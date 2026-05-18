// Demonstration of Optional Chaining and Nullish Coalescing in JavaScript

const person = {
    pid: 100,
    name: "ravi"
};

// Accessing a property that doesn't exist
console.log(person.marks); // undefined

// Using optional chaining (?.) to safely access nested properties
// If 'marks' is undefined, it won't throw an error, just returns undefined
console.log(person.marks?.length); // undefined

// Using nullish coalescing (??) to provide a default value
// If 'marks?.length' is null or undefined, return the fallback string
console.log(person.marks?.length ?? "Marks property is not Available");
// Output: "Marks property is not Available"
