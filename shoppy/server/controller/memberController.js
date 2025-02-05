import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 아이디 중복체크 : getIdCheck
 */
export const getIdCheck = async (req, res) => {
    // console.log('id--->>', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}
/**
 * 회원가입 : registerMember
 */
export const registerMember = async (req, res) => { // DB연동은 비동기
    // const formData = req.body;
    const result = await repository.registerMember(req.body);
    res.json(result);
    res.end();
}

/**
 * 로그인 : checkLogin
 */
export const checkLogin = async (req, res) => {
    let result = await repository.checkLogin(req.body);
    // keygen 사이트 : https://randomkeygen.com/
    if(result.result_rows === 1) {
        const token = jwt.sign({"userId" : req.body.id}, 'vw8EMl1ttb');
        result = {...result, "token" : token};
    } 
    res.json(result);
    res.end();
}
