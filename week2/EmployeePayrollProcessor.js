// Salary Processing Module Example

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter(): employees from IT department
let fil = employees.filter(emp => emp.department === "IT");
console.log("Employees From IT Department : ", fil);

// 2. map(): add netSalary = salary + 10% bonus
// Instead of mutating salary directly, return a new object with netSalary
let withBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log("Employees With 10% Bonus : ", withBonus);

// 3. reduce(): calculate total salary payout (without bonus)
let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total Salary Payout : ", totalSalary);

// 4. find(): employee with salary 30000
let findemp = employees.find(emp => emp.salary === 30000);
console.log("Employee With Salary 30000 : ", findemp);

// 5. findIndex(): index of employee "Neha"
let findindexposition = employees.findIndex(emp => emp.name === "Neha");
console.log("Index Position Of Employee Neha : ", findindexposition);
