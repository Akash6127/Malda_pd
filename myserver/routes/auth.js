import express from 'express';
import { login,verify,update } from '../controller/authcontroller.js';
import AuthMiddleware from '../Middleware/AuthMiddleware.js';


const router = express.Router();

router.post('/login',login);
router.put('/update',update);
router.get('/verify',AuthMiddleware,verify);
export default router;