// Import the default export from module1.js
// In module1.js we exported an object { data, name }
import a from './ModuleExport.js';

// Log the imported object
console.log(a); // { data: [1,2,3], name: "raju" }

// Access individual properties if needed
console.log("Data array:", a.data);   // [1,2,3]
console.log("Name string:", a.name); // "raju"
