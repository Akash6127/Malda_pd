import mongoose from 'mongoose'
import { Schema } from 'mongoose'
// import PoliceStation from './PsModel';

const ItemSchema = new mongoose.Schema({
    location:{type:Schema.Types.ObjectId, ref:"User"},
    itemId:{type:String,required:true},
    serialNo:{type:String,required:true},
    hardwareName:{type:String,required:true},
    serviceType:{type:String,required:true},
    modelName:{type:String,required:true},
    IssuedBy:{type:String,required:true},
    present_status:{type:String,required:true},
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },


});
const Item = mongoose.model("item",ItemSchema);
export default Item;