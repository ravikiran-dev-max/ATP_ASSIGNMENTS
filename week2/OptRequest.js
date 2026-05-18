// Demonstration of OTP generation and resend simulation

console.log("OTP ");

// Counter to track seconds
let count = 0;

// setTimeout(): simulate OTP message after 1 second
setTimeout(() => {
  console.log("OTP is 1818");
}, 1000);

// setInterval(): simulate countdown for resend
let intervalId = setInterval(() => {
  count = count + 1;
  console.log(count); // print current count

  // After 5 seconds, stop interval and show "Resend OTP"
  if (count === 5) {
    console.log("Resend OTP");
    clearInterval(intervalId); // stop the interval loop
  }
}, 1000);

console.log("OTP sent Successfully");
