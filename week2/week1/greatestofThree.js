// Program to find the greatest number among three given numbers

// Assign values to variables
let firstNum = 10;
let secondNum = 30;
let thirdNum = 5;

// Check if firstNum is greater than both secondNum and thirdNum
if (firstNum > secondNum && firstNum > thirdNum) {
    console.log("firstNum is Greater:", firstNum);
}
// Check if secondNum is greater than both firstNum and thirdNum
else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log("secondNum is Greater:", secondNum);
}
// If neither firstNum nor secondNum is greatest, then thirdNum must be the greatest
else {
    console.log("thirdNum is Greater:", thirdNum);
}
