import mongoose  from "mongoose";
import { Schema } from "mongoose";

const psSchema = new mongoose.Schema({
    userID:{type: Schema.Types.ObjectId, ref:'User', required:true},
    psName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    email:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const PoliceStation =  mongoose.model("ps", psSchema);
export default PoliceStation;