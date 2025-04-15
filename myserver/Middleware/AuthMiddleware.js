import jwt from "jsonwebtoken";
import User from "../models/User.js";
const verifyUser = async (req, res, next)=>{
    try{
        if(!req.headers.authorization){
            return res.status(405).json({success:false,message:"token is not found"})
        }
        const token = req.headers.authorization.split(' ')[1];
      
        const decoded = jwt.verify(token, process.env.jwt || "Akash@2002")
        const user = await User.findById({_id: decoded._id});
        
    
        if(!token){
            return res.status(404).json({success:false,error:"Token not found"})
        }
        if(!decoded){
            return res.status(404).json({success:false,error:"Token not decoded"})
        }
        if(!user){
            return res.status(404).json({success:false,error:"User not found"});
        }else{
            req.user = user;
            next();
            
        }
        
        

       
       

      
        
    }catch(error){
        console.log("middleware errror.");
        return res.status(500).json({success:false,error:"server side error"});
    }
}

export default verifyUser;