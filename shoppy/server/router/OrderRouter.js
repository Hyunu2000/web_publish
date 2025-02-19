import express from 'express';
import * as controller from '../controller/OrderController.js';

const router = express.Router();

router.post('/all', controller.getOrderList)


export default router;