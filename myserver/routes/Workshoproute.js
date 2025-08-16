import express from 'express'
import AuthMiddleware from '../Middleware/AuthMiddleware.js'
import { AddWorkshopItem } from '../controller/Workshopcontroller.js';

const router = express.Router();

router.get("/getting",AuthMiddleware, AddWorkshopItem);

//  AuthMiddleware,


export default router;