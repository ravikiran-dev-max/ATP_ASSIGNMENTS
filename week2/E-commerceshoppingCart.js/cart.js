// Importing helper functions from product.js
import { getProductById, checkStock } from './product.js';

// Array to store cart items (each item has productId and quantity)
let cartItems = [];

// Add a product to the cart or update quantity
export function addToCart(productId, quantity) {
    // 1. Get product details by ID
    const product = getProductById(productId);
    if (!product) {
        return { success: false, message: "Product not found" }; // Product doesn't exist
    }

    // 2. Check stock availability for requested quantity
    if (!checkStock(productId, quantity)) {
        return { success: false, message: "Insufficient Stock" }; // Not enough stock
    }

    // 3. Check if product already exists in cart
    const existingItem = cartItems.find((prod) => prod.id === productId);
    if (existingItem) {
        // If product exists, check if new total quantity is available
        if (!checkStock(productId, existingItem.quantity + quantity)) {
            return { success: false, message: "Stock is not available for the new quantity" };
        }
        existingItem.quantity += quantity; // Update quantity
    } else {
        // If product not in cart, add new item
        cartItems.push({ id: productId, quantity: quantity });
    }

    // 4. Return success message
    return { success: true, message: "Product added to cart" };
}

// Remove product from cart
export function removeFromCart(productId) {
    let indexOfProduct = cartItems.findIndex((prod) => prod.id === productId);
    if (indexOfProduct === -1) {
        return { success: false, message: "Product not in cart" }; // Product not found in cart
    }
    cartItems.splice(indexOfProduct, 1); // Remove item from cart
    return { success: true, message: "Product removed" };
}

// Update quantity of product in cart
export function updateQuantity(productId, newQuantity) {
    const product = cartItems.find(prod => prod.id === productId);
    if (!product) {
        return { success: false, message: "Product not in cart" }; // Product not found
    }
    if (!checkStock(productId, newQuantity)) {
        return { success: false, message: "Insufficient stock" }; // Stock unavailable
    }
    product.quantity = newQuantity; // Update quantity
    return { success: true, message: "Quantity updated" };
}

// Get all cart items with product details
export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.id);
        return {
            id: item.id,
            name: product.name,       // Product name
            price: product.price,     // Unit price
            quantity: item.quantity,  // Quantity in cart
            total: product.price * item.quantity // Total price for this item
        };
    });
}

// Calculate total price of all cart items
export function getCartTotal() {
    let total = cartItems.reduce(
        (total, prod) => total + prod.quantity * getProductById(prod.id).price, 
        0
    );
    return total;
}

// Clear all items from the cart
export function clearCart() {
    cartItems = []; // Reset cart to empty
}
