import express from 'express';
import * as controller from '../controller/memberController.js';

const router = express.Router();

router
    .post('/signup', controller.registerMember) // () 붙이지 않음
    .post('/idcheck', controller.getIdCheck)
    .post('/login', controller.checkLogin)

export default router;