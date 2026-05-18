// Import product-related functions from product.js
import {
    getAllProducts,
    searchProducts,
    getProductsByCategory
} from './product.js';

// Import cart-related functions from cart.js
import {
    addToCart,
    getCartItems,
    getCartTotal,
    updateQuantity,
    removeFromCart
} from './cart.js';

// Import payment processing function from payment.js
import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');

// 1. Browse products
console.log('All Products:');
console.log(getAllProducts()); // Display all products available in the store

// 2. Search for products
console.log('\nSearching for "phone":');
console.log(searchProducts('phone')); // Search for products by keyword (e.g., "phone")

// 3. Add items to cart
console.log('\n=== Adding to Cart ===');
console.log(addToCart(1, 2));  // Add 2 Laptops (product ID 1) to cart
console.log(addToCart(3, 3));  // Add 3 Headphones (product ID 3) to cart
console.log(addToCart(1, 1));  // Add 1 more Laptop (updates quantity)

// 4. View cart
console.log('\n=== Current Cart ===');
console.log(getCartItems());    // Display all items currently in cart
console.log('Cart Total:', getCartTotal()); // Display total price of cart

// 5. Update quantity
console.log('\n=== Updating Quantities ===');
console.log(updateQuantity(1, 2));  // Update Laptop quantity to 2

// 6. Remove item
console.log('\n=== Removing Item ===');
console.log(removeFromCart(3));  // Remove Headphones (product ID 3) from cart

// 7. View updated cart
console.log('\n=== Updated Cart ===');
console.log(getCartItems());     // Display updated cart items
console.log('Cart Total:', getCartTotal()); // Display updated total price

// 8. Checkout with coupon
console.log('\n=== Checkout ===');
const order = processPayment('upi', 'WELCOME10'); // Checkout using UPI with coupon code
console.log(order); // Display final order summary
