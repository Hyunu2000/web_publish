import express from 'express';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import path from 'path';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
// 업로드 파일 호출 경로 추가 - 이미지 호출
server.use('/upload_files', express.static(path.join("upload_files"))); // 저장 폴더 연결
            // 호출 주소 이름                           // 저장 폴더 이름 

/** 서버의 요청 처리를 위한 미들웨어 정의 */
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter);



server.listen(port, () => {
    console.log(`servser port ===>> ${port}`);
});