import * as repository from '../repository/memberRepository.js';

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
