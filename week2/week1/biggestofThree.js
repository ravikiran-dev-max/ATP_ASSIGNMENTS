// Function that returns the biggest number among three inputs
let getBigNumber = function(num1, num2, num3) {
  
  // Check if num1 is greater than both num2 and num3
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  // Check if num2 is greater than both num1 and num3
  else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  // If neither num1 nor num2 is greatest, then num3 must be the greatest
  else {
    return num3;
  }
}

// Calling the function with sample values
console.log(getBigNumber(56, 78, 90)); // Output: 90
