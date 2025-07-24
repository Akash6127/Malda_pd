import Item from '../models/Item_model.js'
import User from '../models/User.js'


const AddItems = async(req,res)=>{
    try{
        const {item_id,serial_no,hardware_name,serviceType,model_name,date,issuedBy,status}=req.body;
        const newItem = await Item({
            location:req.user._id,
            itemId:item_id,
            serialNo:serial_no,
            hardwareName:hardware_name,
            serviceType:serviceType,
            modelName:model_name,
            IssuedBy:issuedBy,
            present_status:status,
            createdAt:date
        });
       
        await newItem.save();
    
        const user = await User.findById({_id:req.user._id});
        user.Items.push(newItem._id);
        await user.save();
        const details = await User.findOne({_id:req.user._id})
        console.log(details.name);
        // const itemlocation = await Item.findById({_id:newItem._id}).populate("location");
        // console.log(itemlocation.user.name);
        return res.status(200).json({success: true,data: newItem});

    }catch(error){
        return res.status(500).json({success: false,error:"server error"})

    }
}
const GetItemsbyid = async (req, res) => {
  try {
    const id = req.params.id;  // Extract the actual ID string
    console.log("id: ", id);

    const item = await Item.findById(id).populate("location"); // optional: populate if needed

    if (!item) {
      return res.status(404).json({ success: false, error: "Item not found" });
    }

    return res.status(200).json({ success: true, data: item });

  } catch (error) {
    console.error("Error fetching item:", error.message);
    return res.status(500).json({ success: false, error: "Server main error hai" });
  }
};
const UpdateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const {
      item_id,
      serial_no,
      hardware_name,
      serviceType,
      model_name,
      date,
      issuedBy,
      status,
      EditedBy
    } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      {
        itemId: item_id,
        serialNo: serial_no,
        hardwareName: hardware_name,
        serviceType,
        modelName: model_name,
        IssuedBy: issuedBy,
        present_status: status,
        createdAt: date,
        EditedBy:EditedBy
      },
      { new: true } // returns the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ success: false, error: "Item not found" });
    }

    res.status(200).json({ success: true, data: updatedItem });

  } catch (error) {
    console.error("Error updating item:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
};


const DeleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    const item = await Item.findByIdAndDelete(itemId);

    if (!item) {
      return res.status(404).json({ success: false, error: "Item not found" });
    }

    // Optional: Remove item reference from the user's Items array
    await User.findByIdAndUpdate(item.location, {
      $pull: { Items: item._id }
    });

    return res.status(200).json({ success: true, message: "Item deleted successfully" });

  } catch (error) {
    console.error("Delete error:", error.message);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};



const GetItems = async(req,res)=>{
    try{
        const items = await Item.find({}).populate("location")
        console.log(items);
        // const location = await User.findById({_id:location})
        // console.log(location.name);

       
        if(!items){
            return res.status(405).json({success:false,error:"No items found"})
        }
        return res.status(200).json({success:true,data:items})
    }catch(error){
        return res.status(500).json({success:false,error:"server error"})
    }
}
const GetPsItems = async(req,res)=>{
try{
    const psitems = await Item.find({location:req.user._id});
    console.log(psitems);
    if(!psitems){
        return res.status(405).json({success:false,error:"No items found"})
    }
    return res.status(200).json({success:true,data:psitems})

}catch(error){
    return res.status(500).json({success:false,error:"cannot fetch data"})
}
}
export {AddItems,GetItems,GetPsItems,GetItemsbyid,UpdateItem,DeleteItem}