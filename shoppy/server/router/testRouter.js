import express from 'express';
import * as controller from '../controller/testController.js';
// 함수가 많아질 수 있기 때문에 *로 정의 후 별칭 사용
// 별칭.호출함수이름   형식으로 함수 호출

const router = express.Router();

/** router 정보 매핑 */
router.get('/', controller.getTest); // /test로 넘어오기 떄문에 / << 단순 구분선 /test/
router.get('/product', controller.getProduct); // /test/product


export default router;
