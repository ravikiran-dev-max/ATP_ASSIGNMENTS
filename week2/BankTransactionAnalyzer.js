const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// filter(): get all credit transactions
let filcredit = transactions.filter((cred) => cred.type === "credit");

// map(): extract all amounts
let maptransac = transactions.map((txn) => txn.amount);

// reduce(): calculate total amount
// You need to sum txn.amount, not the whole object
let finalAmount = transactions.reduce((acc, txn) => acc + txn.amount, 0);

// find(): get the first debit transaction
let firstDebt = transactions.find((txn) => txn.type === "debit");

// findIndex(): get index of transaction with amount 10000
let findIndexing = transactions.findIndex((txn) => txn.amount === 10000);

console.log("ALL Credit Transactions : ", filcredit);
console.log("ALL Transaction Amounts : ", maptransac);
console.log("Final Amount : ", finalAmount);
console.log("The First Debit Transaction : ", firstDebt);
console.log("The Index Position of 10000 is : ", findIndexing);
