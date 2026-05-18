// Importing helper function from product.js
import { getProductById } from './product.js';

// Available coupons with rules
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 }, // 10% off, min cart ₹1000
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },        // Flat ₹500 off, min cart ₹5000
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' } // 20% off electronics only
};

// Validate if coupon can be applied
export function validateCoupon(couponCode, cartTotal, cartItems) {
    let coupon = coupons[couponCode];
    if (!coupon) {
        // Coupon code not found
        return { valid: false, message: "Coupon not valid" };
    }

    // Check minimum cart amount requirement
    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: `Minimum cart total of ${coupon.minAmount} required` };
    }

    // Check category restriction if coupon applies only to certain category
    if (coupon.category) {
        const hasCategory = cartItems.some(item => getProductById(item.id).category === coupon.category);
        if (!hasCategory) {
            return { valid: false, message: `Coupon valid only for ${coupon.category} products` };
        }
    }

    // Coupon is valid
    return { valid: true, message: "Coupon is valid" };
}

// Calculate discount for a given coupon
export function calculateDiscount(couponCode, cartItems) {
    let coupon = coupons[couponCode];

    // Calculate total of eligible products (respect category restriction if any)
    let applicableTotal = cartItems.reduce((total, item) => {
        const product = getProductById(item.id);
        if (coupon.category && product.category !== coupon.category) {
            // Skip products not in the required category
            return total;
        }
        return total + product.price * item.quantity;
    }, 0);

    // Apply discount based on type
    if (coupon.type === "percentage") {
        return (applicableTotal * coupon.value) / 100; // Percentage discount
    } else {
        return coupon.value; // Flat discount
    }
}

// Apply coupon and return final totals
export function applyDiscount(cartTotal, cartItems, couponCode) {
    const validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        // Coupon invalid → return original totals
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        };
    }

    // Coupon valid → calculate discount
    const discount = calculateDiscount(couponCode, cartItems);

    return {
        originalTotal: cartTotal,          // Cart total before discount
        discount,                          // Discount amount
        finalTotal: cartTotal - discount,  // Final total after discount
        message: `Coupon "${couponCode}" applied successfully`
    };
}
