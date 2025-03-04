import PoliceStation from "../models/PsModel.js";
import User from "../models/User.js"
import bcrypt from 'bcrypt'

const getPoliceStation = async (req,res) => {
    try {
        const policeStations = await PoliceStation.find();
     
         res.status(200).json({ success: true,  policeStations });
    } catch (error) {
        console.log(error.message);
         res.status(500).json({ success: false, error: "Server error" });
    }
}
const addPoliceStation = async (req, res) => {
    
    try {
        const { psName, description,email,password } = req.body;

        if (!psName || !description) {
            return res.status(400).json({ success: false, error: "psName and description are required" });
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(404).json({success:false,error:"police station is already added."})
        }
        const existingPs = await PoliceStation.findOne({ psName });
        if (existingPs) {
            return res.status(404).json({ success: false, error: "Police station name already exists." });
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User({
            name:psName,
            email:email,
            password:hashedPassword,
            role:description,
            username: psName.toLowerCase().replace(/\s+/g, "_"),
        })
       const savedUser = await newUser.save();
        const newPoliceStation = new PoliceStation({
            userID:savedUser._id,
            psName:psName,
            description:description,
            email:email
            
        });
        await newPoliceStation.save();
       
        return res.json({ success: true, data: newPoliceStation });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Server error" });
    }
}

const editPoliceStation = async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id)
        const policeStation = await PoliceStation.findById({_id:id});
        if (!policeStation) {
            return res.status(404).json({ success: false, error: "Police station not found" });
        }
        console.log(policeStation);
        res.status(200).json({ success: true, data: policeStation });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Server error" });
    }
}
const updatePoliceStation = async(req,res)=>{
    try {
        const id = req.params.id;
        const { psName, description } = req.body;
        console.log(id)
        const newpoliceStation = await PoliceStation.findByIdAndUpdate({_id:id},{
            psName:psName,
            description:description
        });
     
        await newpoliceStation.save();
       
        return res.json({ success: true, data: newpoliceStation });
     
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Server error" });
    }
}
const deletePoliceStation = async(req,res)=>{
    try {
        const id = req.params.id;
        
        const newpoliceStation = await PoliceStation.findByIdAndDelete({_id:id});
        return res.json({ success: true, data: newpoliceStation });
     
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: "Server error" });
    }
}

export { addPoliceStation, getPoliceStation ,editPoliceStation,updatePoliceStation,deletePoliceStation};