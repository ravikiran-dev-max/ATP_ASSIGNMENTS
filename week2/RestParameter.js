// Function using Rest parameters to accept any number of arguments
let Rest = function(...para) {
  // reduce(): accumulate sum of all arguments
  let red = para.reduce((acc, ele) => acc + ele);
  return red;
};

// Test the function with multiple arguments
console.log(Rest(10, 20, 20, 40, 50)); // Output: 140
