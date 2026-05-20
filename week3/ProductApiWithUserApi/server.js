// Create HTTP Server using Express
import exp from 'express';
const app = exp();

// Import Routers (User API and Product API)
import { userapp } from "./Apis/usersapi.js";
import { productApp } from './Apis/productsApi.js';

// Use body parser middleware to handle JSON request bodies
app.use(exp.json());

// Mount routers with base paths
app.use('/user-api', userapp);       // All user-related routes start with /user-api
app.use('/product-api', productApp); // All product-related routes start with /product-api

// Set a port number for the server
const port = 3002;

// Assign port number to HTTP Server and start listening
app.listen(port, () => console.log(`Server listening on port ${port}...`));

// Test Data (optional) can be defined inside individual API files
