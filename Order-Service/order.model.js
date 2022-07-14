const mongoose = require('mongoose')
const schema = mongoose.Schema;

/**
 * Simple Schema for the Order, For Storing user's Order 
 * @param {products} Array of the Selected IDs
 * @param {user} String who creates the  order
 * @param {total_price} Number Total Price pf thr Order Products 
 * Default Created_at variable to Stored Time Details
 */
const orderSchema = new schema({
    products: [{
        product_id: String
    }],
    user: {
        type: String
    },
    total_price: {
        type: Number
    },

    created_at: {
        type: Date,
        default: Date.now()

    }
});

module.exports = order = mongoose.model('order', orderSchema);