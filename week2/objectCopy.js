// Demonstration of Shallow vs Deep Copy in JavaScript

// Example 1: Shallow copy with primitives
let originalObj = { a: 10 };
let copyObj = { ...originalObj }; // shallow copy using spread operator

// Modify original
originalObj.a = 123;

console.log("Original Object:", originalObj); // { a: 123 }
console.log("Copied Object:", copyObj);       // { a: 10 }

// Example 2: Shallow copy with nested objects
let Per = {
  name: "ravi",
  adress: {
    city: "HyD",
    pin: 5678
  }
};

// Shallow copy
let copyPerson = { ...Per };

// Modify nested property in original
Per.adress.city = "rangaReddy";

console.log("Original Person:", Per);
// { name: "ravi", adress: { city: "rangaReddy", pin: 5678 } }

console.log("Copied Person (affected due to shallow copy):", copyPerson);
// { name: "ravi", adress: { city: "rangaReddy", pin: 5678 } }

// Example 3: Deep copy
let deepCopy = structuredClone(Per);

console.log("Deep Copy (independent object):", deepCopy);
// { name: "ravi", adress: { city: "rangaReddy", pin: 5678 } }
