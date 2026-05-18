# 🛒 E-Commerce Store (JavaScript Project)

This project simulates a **modular e-commerce store** using JavaScript.  
It demonstrates how to manage products, shopping carts, discounts, and payments in a clean, structured way.

---

## 📂 File Structure

- `product.js` → Product database and utility functions
- `cart.js` → Shopping cart operations (add, remove, update, view, total)
- `discount.js` → Coupon validation and discount calculation
- `payment.js` → Payment processing and order summary
- `app.js` → Main runner that ties everything together

---

## 🚀 Concepts Covered

### 1. Product Management (`product.js`)
- **getProductById(id)** → fetch product details by ID.
- **getAllProducts()** → return all products.
- **getProductsByCategory(category)** → filter products by category.
- **searchProducts(name)** → search product by name (case-insensitive).
- **checkStock(id, qty)** → check if stock is sufficient.
- **reduceStock(id, qty)** → reduce stock after purchase.

### 2. Cart Management (`cart.js`)
- **addToCart(id, qty)** → add product or update quantity.
- **removeFromCart(id)** → remove product from cart.
- **updateQuantity(id, qty)** → update product quantity in cart.
- **getCartItems()** → return cart items with details and totals.
- **getCartTotal()** → calculate grand total.
- **clearCart()** → empty the cart.

### 3. Discounts (`discount.js`)
- **validateCoupon(code, total, items)** → check if coupon is valid.
- **calculateDiscount(code, items)** → calculate discount amount.
- **applyDiscount(total, items, code)** → apply coupon and return final totals.

### 4. Payment (`payment.js`)
- **processPayment(method, couponCode)** → process payment, apply discounts, reduce stock, clear cart, and return order summary.
- **validatePaymentMethod(method)** → ensure payment method is valid (`card`, `upi`, `cod`).
- **generateOrderId()** → generate unique order ID.

### 5. Application Runner (`app.js`)
- Demonstrates:
  - Browsing products
  - Searching products
  - Adding/removing/updating cart items
  - Viewing cart and totals
  - Applying coupons
  - Processing payment and generating order summary

---
### Sample OutPut

=== E-Commerce Store ===

All Products:
[ { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' }, ... ]

Searching for "phone":
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' }

=== Adding to Cart ===
{ success: true, message: 'Product added to cart' }
{ success: true, message: 'Product added to cart' }
{ success: true, message: 'Product added to cart' }

=== Current Cart ===
[
  { id: 1, name: 'Laptop', price: 50000, quantity: 3, total: 150000 },
  { id: 3, name: 'Headphones', price: 2000, quantity: 3, total: 6000 }
]
Cart Total: 156000

=== Updating Quantities ===
{ success: true, message: 'Quantity updated' }

=== Removing Item ===
{ success: true, message: 'Product removed' }

=== Updated Cart ===
[
  { id: 1, name: 'Laptop', price: 50000, quantity: 2, total: 100000 }
]
Cart Total: 100000

=== Checkout ===
{
  orderId: 'ORD1715935200000',
  items: [ { id: 1, name: 'Laptop', price: 50000, quantity: 2, total: 100000 } ],
  subtotal: 100000,
  discount: 10000,
  total: 90000,
  paymentMethod: 'upi',
  status: 'success',
  message: 'Payment successful'
}
---

## 📝 Usage

Run the app with Node.js:

```bash
node app.js
