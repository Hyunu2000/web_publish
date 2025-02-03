import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js'
import cors from 'cors';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

/** 서버의 요청 처리를 위한 미들웨어 정의 */
server.use('/', mainRouter);
server.use('/hello', helloRouter);
server.use('/employee', employeeRouter);



/** / => Hello~ NodeJS~ */
// server.use('/', (req, res) => {
//     res.send('Hello~ NodeJS~'); // 객체나 문자열로 만들어 한 번에 보내야 함
//     // res.send('Hello2~ NodeJS~'); send()함수는 한 번만 전송 가능!
//     res.end();
// });

// /** /hello => Welcome to Hello~ */
// server.use('/hello', (req, res) => {
//     res.send('Welcome to Hello~');
//     res.end();
// })


server.listen(port, () => {
    console.log(`servser port ===>> ${port}`);
});