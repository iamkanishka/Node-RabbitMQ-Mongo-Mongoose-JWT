const mongoose =  require('mongoose')
const schema =  mongoose.Schema;

/**
 * Simple Schema for the Product, For Storing Products
 * @param {name} String Name of the Particular Product 
 * @param {description} String Price of the Particular Product 
 * @param {price} String Price of the Particular Product 
 * Default Created_at variable to Stored Time Details
 */

const productSchema = new schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    created_at:{
        type:Date,
        default:Date.now()
    
    }
});

module.exports = Product= mongoose.model('product',productSchema);

