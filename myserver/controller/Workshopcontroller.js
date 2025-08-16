import WorkshopItem from '../models/Workshop.js';
import User from '../models/User.js';

const AddWorkshopItem = async (req, res) => {
  try{
    const WorkshopData = await WorkshopItem.find();
    return res.status(200).json({success: true, message: "Workshop item fetched successfully",data: WorkshopData});

  }catch (error) {
    console.error("Error getting workshop item:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
export { AddWorkshopItem };
