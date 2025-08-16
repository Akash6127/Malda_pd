import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const WorkshopSchema = new mongoose.Schema({
  
   location:{type:String,required:true},
    itemId:{type:String,required:true},
    serialNo:{type:String,required:true},
    hardwareName:{type:String,required:true},
    serviceType:{type:String,required:true},
    modelName:{type:String,required:true},
    IssuedBy:{type:String,required:true},
    present_status:{type:String,required:true},
    date:{type:Date,default:Date.now},
    EditedBy:{type:String,default:""},
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("workshop", WorkshopSchema);