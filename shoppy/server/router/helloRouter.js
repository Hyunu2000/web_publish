import express from 'express';
import * as controller from '../controller/helloController.js'

const router = express.Router();

router.get('/', controller.getHello);
router.get('/test', controller.getHelloTest);


export default router; // 별도로 export 지정할 것