// Demonstration of JavaScript Promise with async handling

console.log("First");

// Flag to simulate future outcome
let futur = true;

// Create a Promise object
let promobj = new Promise((full, rejected) => {
  // Simulate async operation with setTimeout (10 seconds delay)
  setTimeout(() => {
    if (futur === true) {
      // Resolve the promise if futur is true
      full("Here is the money");
    } else {
      // Reject the promise if futur is false
      rejected("Sorry!, I don't have Money");
    }
  }, 10000);
});

// Handle promise resolution and rejection
promobj
  .then(message => console.log("Tomorrow : ", message))   // success handler
  .catch(err => console.log("Tomorrow : ", err));         // error handler

console.log("Second");
console.log("Third");
