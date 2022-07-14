const mongoose =  require('mongoose')
const schema =  mongoose.Schema;

/**
 * Simple Schema for the User, For Storing user Details
 * @param {name} String Name of the user
 * @param {email} String Email of the user
 * @param {password} String Password of the user 
 * Default Created_at variable to Stored Time Details
 */
const userSchema = new schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    created_at:{
        type:Date,
        default:Date.now()
    
    }
});

module.exports = user= mongoose.model('user',userSchema);

