// Product database (simulated)
export const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Get product by ID
export function getProductById(productId) {
    // Find product by matching ID
    let product = products.find((prod) => prod.id === productId);
    return product; // Returns product object or undefined if not found
}

// Return all products
export function getAllProducts() {
    return products; // Returns entire product list
}

// Filter products by category
export function getProductsByCategory(category) {
    // Filter products where category matches
    let filteredByCategory = products.filter((product) => product.category === category);
    return filteredByCategory; // Return array of filtered products
}

// Search product by name (case-insensitive)
export function searchProducts(productName) {
    // Convert both product name and search term to lowercase for case-insensitive match
    let searchedProduct = products.find(
        (prod) => prod.name.toLowerCase() === productName.toLowerCase()
    );
    if (!searchedProduct) {
        return "Product not found"; // Return message if not found
    }
    return searchedProduct; // Return product object if found
}

// Check if stock is sufficient
export function checkStock(productId, quantity) {
    // Find product index by ID
    let indexOfProduct = products.findIndex((prod) => prod.id === productId);
    // Check if product exists and has enough stock
    if (indexOfProduct !== -1 && products[indexOfProduct].stock >= quantity) {
        return true; // Enough stock available
    }
    return false; // Insufficient stock
}

// Reduce stock after purchase
export function reduceStock(productId, quantity) {
    // Find product index by ID
    let indexOfProduct = products.findIndex((prod) => prod.id === productId);
    // If product exists and has enough stock, reduce stock
    if (indexOfProduct !== -1 && products[indexOfProduct].stock >= quantity) {
        products[indexOfProduct].stock -= quantity;
    }
}
