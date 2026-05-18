// Create Mini Express App (Separate Route for Products)
import exp from 'express';
export const productApp = exp.Router();

// Test Data (in-memory array to store products)
let products = [];

// REST API - Representation State Transfer

// Route to handle GET request of Client (http://localhost:3002/product-api/products)
// Fetch all products
productApp.get('/products', (req, res) => {
  res.json({ message: "All products", products });
});

// Route to handle POST request of Client
// Create a new product
productApp.post('/products', (req, res) => {
  const newProduct = req.body;       // Get new product data from request body
  products.push(newProduct);         // Add new product to array
  res.json({ message: "Product created", product: newProduct });
});

// Route to handle PUT request of Client
// Update an existing product by productId
productApp.put('/products/:id', (req, res) => {
  let modifiedProduct = req.body;    // Get modified product from client
  let id = Number(req.params.id);    // Get productId from URL parameter

  // Find index of existing product in array
  let index = products.findIndex(prod => prod.productId === id);

  if (index === -1) {
    return res.json({ message: "Product not found" });
  }

  // Update product at found index
  products.splice(index, 1, modifiedProduct);

  // Send response
  res.json({ message: "Product updated", product: modifiedProduct });
});

// Route to handle DELETE request of Client
// Delete product by productId
productApp.delete('/products/:id', (req, res) => {
  let id = Number(req.params.id);    // Get productId from URL parameter

  // Find index of product
  let index = products.findIndex(prod => prod.productId === id);

  if (index === -1) {
    return res.json({ message: "Product not found" });
  }

  // Delete product by index
  products.splice(index, 1);

  // Send response
  res.json({ message: "Product removed" });
});

// Route to handle GET request of Client by brand
// Filter products by brand name
productApp.get('/products/brand/:brand', (req, res) => {
  let filterBrands = products.filter(prod => prod.Brand === req.params.brand);

  if (filterBrands.length === 0) {
    return res.json({ message: "No products found for this brand" });
  }

  // Send response with filtered products
  res.json({ message: "Products by brand", products: filterBrands });
});
