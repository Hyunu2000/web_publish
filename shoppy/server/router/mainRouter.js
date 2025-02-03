import express from 'express';
import * as controller from '../controller/mainController.js';

const router = express.Router();

router.get('/', controller.getMain);

export default router; // 별도로 export 지정할 것