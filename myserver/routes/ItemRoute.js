import express from 'express'
import AuthMiddleware from '../Middleware/AuthMiddleware.js'
import {AddItems,GetItems,GetPsItems} from '../controller/ItemsController.js'

const router = express.Router();

router.post("/additem",AuthMiddleware,AddItems);
router.get("/getitem",AuthMiddleware,GetItems);
router.get("/getpsitem",AuthMiddleware,GetPsItems)



export default router;