import express from 'express';
import AuthMiddleware from '../Middleware/AuthMiddleware.js';
import { addPoliceStation, getPoliceStation,editPoliceStation,updatePoliceStation,deletePoliceStation } from '../controller/PsController.js';

const router = express.Router();

router.post('/add', AuthMiddleware, addPoliceStation);
router.get('/', AuthMiddleware, getPoliceStation);
router.get('/:id',AuthMiddleware,editPoliceStation)
router.put('/:id',AuthMiddleware,updatePoliceStation)
router.delete('/:id',AuthMiddleware,deletePoliceStation)

export default router;