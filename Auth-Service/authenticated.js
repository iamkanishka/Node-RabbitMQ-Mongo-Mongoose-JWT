const jwt = require('jsonwebtoken');

/**
 * Function to verify the token Provided from the user 
 * @param {products} String from the req headers
 */
const isAuthenticated = async(req,res,next)=>{
const token = req.headers['authorization'].split(" ")[1];
    //Bearer <token>.split("")[1];
    jwt.verify(token,"secret",(err,user)=>{
   if(err) {
    return res.json({message:err})
   }
   else {
     req.user =user;
     next()
   }
    })
}

module.exports=isAuthenticated