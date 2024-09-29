require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

module.exports.protect = async (request, response, next) => {let token
if(request.headers.authorization && request.headers.authorization.startsWith("Bearer")){
  
    try{
        token=req.headers.authorization;
        console.log(token+'tok bearer');
        token = request.headers.authorization.split(" ")[1];
        console.log(token+'token obtenido');
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user =  User.findById(decoded.id).select("-password");
        next();
    }catch(err){
        console.log(err);
        response.status(401).json({message: "Not authorized"});
    }
    if (!token) {
        return response.status(401).json({ message: "Not authorized" });
    }
}
};
