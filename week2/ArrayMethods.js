// Demonstration of JavaScript Array Methods

// Sample array
let array = [10, 25, 5, 1, 6, 40, 100, 63, 72, 81];

// filter(): select elements based on condition
let p = array.filter((element) => element > 40 && element < 80);
console.log(p); // [63, 72]

// map(): used for modification
let maf = array.map(element => element + 10);
console.log(maf); // adds 10 to each element

// map() with conditional modification
let mod = array.map(element => {
  if (element < 50) {
    return element + 10;
  } else {
    return element - 20;
  }
});
console.log(mod);

// reduce(): find smallest element
const small = array.reduce((Accumulator, element) => {
  if (Accumulator < element) {
    return Accumulator;
  } else {
    return element;
  }
});
console.log("The Small Element is : ", small);

// reduce(): find largest element
const Big = array.reduce((Accumulator, element) => {
  if (Accumulator < element) {
    return element;
  } else {
    return Accumulator;
  }
});
console.log("The Big Element is : ", Big);

// find(): locate a specific element
const findele = array.find(element => element === 25);
console.log(findele); // 25

// findIndex(): locate index of element
const findInd = array.findIndex(element => element === 25);
console.log(findInd); // index of 25

// sort(): sort numbers ascending
let data = [9, 89, 7, 6];
let newArray = data.sort((a, b) => a - b);
console.log(newArray); // [6,7,9,89]
console.log(data);     // sorted array

// More examples with temperatures
const temperatures = [32, 34, 45, 28, 88];

// filter temperatures above 40
const fil = temperatures.filter((element) => element > 40);
console.log("Temperature Above 40 : ", fil);

// map: convert Celsius to Fahrenheit
const degreToFahreheit = temperatures.map((element) => element * 1.8 + 32);
console.log("Fahrenheit : ", degreToFahreheit);

// reduce: calculate average temperature
const re = temperatures.reduce((acc, element) => acc + element);
console.log("The Average is : ", re / temperatures.length);

// Array of Objects Example
const students = [
  { sno: 101, name: "Ravi", marks: [78, 82, 91] },
  { sno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { sno: 103, name: "Sneha", marks: [88, 92, 95] },
  { sno: 104, name: "Kiran", marks: [55, 60, 58] },
  { sno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// reduce(): incorrect usage here, needs aggregation of marks
// Example: sum of all marks of all students
const totalMarks = students.reduce((Acc, student) => {
  return Acc + student.marks.reduce((sum, m) => sum + m, 0);
}, 0);
console.log("The Sum of Marks : ", totalMarks);

// filter(): select students with average marks > 50
let filtemethod = students.filter(student => {
  let avg = student.marks.reduce((sum, m) => sum + m, 0) / student.marks.length;
  return avg > 50;
});
console.log(filtemethod);
