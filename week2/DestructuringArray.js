// Demonstration of JavaScript Destructuring (Unpacking)

// Array destructuring
let arr = [10, 20, 30];
let [a, b, c] = arr; // unpack values into variables
console.log("Array Destructuring : ", a, b, c); // 10 20 30

// Object destructuring
let emp = {
    eid: 100,
    ename: "ravi",
    company: "CTS",
    adress: {
        city: "HYD"
    }
};

// unpack properties directly into variables
let { eid, ename, adress: { city } } = emp;
console.log("Object Destructuring : ", eid, ename, city); // 100 ravi HYD
