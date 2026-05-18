// Demonstration of JavaScript Promise

console.log("Friend is calling in 5 sec");

let future = true;

// Create a Promise object
const promiseObj = new Promise((Fullfill, Reject) => {
  // NOTE: setTimeout should wrap the async operation, not be passed as a second argument
  setTimeout(() => {
    if (future) {
      Fullfill("Promise Is Fulfilled");
    } else {
      Reject("Promise is Rejected");
    }
  }, 5000); // 5 seconds delay
});

// Handle promise resolution and rejection
promiseObj
  .then((message) => console.log("Message in Then : ", message))   // success handler
  .catch((errormessage) => console.log("Message in Catch : ", errormessage)); // error handler
