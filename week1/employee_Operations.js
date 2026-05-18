// Program to perform operations on an array of employee objects

// Define an array of employee objects with eno, name, and marks
const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// Print the original employees array
console.log("The Original Object:", employees);
console.log("After Some Changes:");

// Insert a new employee at the 2nd position (index 1)
employees.splice(1, 0, {
  eno: 106,
  name: "Manoj",
  marks: [80, 85, 88],
});

// Remove the employee with name "Kiran"
for (let i = 0; i < employees.length; i++) {
  if (employees[i].name === "Kiran") {
    employees.splice(i, 1); // remove the object at index i
    break;                  // exit loop after removal
  }
}

// Change Sneha's last mark from 95 to 75 using pop & push
for (let i = 0; i < employees.length; i++) {
  if (employees[i].name === "Sneha") {
    let marks = employees[i].marks;
    marks.pop();    // remove last mark (95)
    marks.push(75); // add new mark (75)
    break;          // exit loop after update
  }
}

// Print the updated employees array
console.log(employees);
