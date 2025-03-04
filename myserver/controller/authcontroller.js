import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const login =  async(req, res) => {
    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return  res.status(404).json({ success: false, error: "User not Found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return  res.status(404).json({ success: false, error: "wrong password" });
        }
        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.jwt || "Akash@2002",
            { expiresIn: "10d" }
        );
        res.json({
            success: true,
            token,
            user: { _id: user._id, name: user.name, role: user.role },
        });
        
      
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

const verify = (req,res)=>{
    return res.status(200).json({success:true,user:req.user})
}
const update =async(req,res)=>{
    
    try{
        const {email,prevPassword,newPassword} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({success:false,error:"user not found"})
        }
        const isMatch = await bcrypt.compare(prevPassword, user.password);
        if(!isMatch){
            return res.status(404).json({success:false,error:"Wrong Password"});
        }else{
            const hashedPassword = await bcrypt.hash(newPassword,10)
            await User.updateOne({ email}, { password: hashedPassword });
            return res.status(200).json({success:true})
        }
     

    }catch(error){
        res.status(500).json({success: false, error:"server error"})
    }

}
   

export { login ,verify,update};