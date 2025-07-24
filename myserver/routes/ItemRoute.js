import express from 'express'
import AuthMiddleware from '../Middleware/AuthMiddleware.js'
import {AddItems,GetItems,GetPsItems,GetItemsbyid,UpdateItem,DeleteItem} from '../controller/ItemsController.js'

const router = express.Router();

router.post("/additem",AuthMiddleware,AddItems);
router.get("/getitem",AuthMiddleware,GetItems);
router.get("/getitm/:id",AuthMiddleware,GetItemsbyid);
router.put("/updateitem/:id", AuthMiddleware, UpdateItem);
router.delete("/deleteitem/:id", AuthMiddleware, DeleteItem);
router.get("/getpsitem",AuthMiddleware,GetPsItems)



export default router;