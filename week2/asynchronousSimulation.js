// Demonstration of Asynchronous Execution using setTimeout

console.log("Exam Started");

// After 2 seconds, simulate exam submission
setTimeout(() => {
  console.log("Exam submitted Successfully");
}, 2000);

// After 3 seconds, simulate evaluation process
setTimeout(() => {
  console.log("Evaluating Answer");
}, 3000);

// After 5 seconds, simulate result announcement
setTimeout(() => {
  console.log("Result : Passed");
}, 5000);

console.log("Exam "); // This runs immediately (non-blocking)
