const jwt = require('jsonwebtoken')
const User = require('../modal/user.modal')
const authMiddleWare = async (req,res,next) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({message:"unauthorized token"})
        
    }
    const jwtToken  = token.replace("Bearer","").trim()
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        console.log('verfied token',isVerified)
        const userData = await User.findOne({email:isVerified.email}).select({password:0})
        console.log("user data found", userData)
        if(!userData){
            return res.status(404).json({message:"user data not found"})
            
        }
        req.user = userData;
        req.token= token;
        req.userId = userData._id;

        next();
    } catch (error) {
        console.log(error,'jwt verification error')
        return res.status(401).json({message:"unauthorized token"})

    }
}

module.exports = authMiddleWare