import React, { useState, useRef } from 'react';
import { validate } from '../../apis/validate.js';
import './cgv.css';
import './commons.css';

export default function CgvLoginForm() {
    // const idRef = useRef(null);
    // const passwordRef = useRef(null);
    
    const refs = { // 오브젝트 리터럴로 넘기기
        idRef: useRef(null), // refs.idRef
        passwordRef: useRef(null)
    };

    const [errorMsg, setErrorMsg] = useState({ "id": '', "password": '' });
    const initFormData = { 'id': '', 'pwd': '' }
    const [formData, setFormData] = useState(initFormData);

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'id') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' })
                : setErrorMsg({ ...errorMsg, ['id']: '' });
        } else if (name === 'pwd') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['pwd']: '패스워드를 입력해주세요' })
                : setErrorMsg({ ...errorMsg, ['pwd']: '' });
        }
    }


    // const validate = () => {
    //     let result = true;

    //     if(idRef.current.value === '') {
    //         // alert('아이디를 입력해주세요')
    //         setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' });
    //         idRef.current.focus();
    //         result = false;
    //     } else if(passwordRef.current.value === '') {
    //         // alert('패스워드를 입력해주세요')
    //         setErrorMsg({ ...errorMsg, ['pwd']: '패스워드를 입력해주세요' });
    //         passwordRef.current.focus();
    //         result = false;
    //     }

    //     return result;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
                        // 'idRef':idRef, 
                        // 'passwordRef':passwordRef,
                        'refs': refs,
                        'errorMsg':errorMsg,
                        'setErrorMsg':setErrorMsg};
        if (validate(param)) {
            console.log(formData);
        }
    }

    return (
        <div>
            <div className="center-layout login-form">
                <h1 className="center-title">로그인</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <i className="fa-regular fa-user"></i>
                                <input type="text"
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                            </div>
                            <p id="error-msg-id" style={{ 'color': 'red' }}>{errorMsg.id}</p>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password"
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.passwordRef}
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                            </div>
                            <p id="error-msg-pwd" style={{ 'color': 'red' }}>{errorMsg.pwd}</p>
                        </li>
                        <li>
                            <button type="submit" className="btn-main-color">로그인</button>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" name="status" />
                                <label for="">아이디 저장</label>
                            </div>
                            <div>
                                <a href="#">아이디 찾기</a>
                                <span>&gt;</span>
                                <a href="#">비밀번호 찾기</a>
                                <span>&gt;</span>
                            </div>
                        </li>
                        <li>
                            <button className="login-form-naver">N 네이버 로그인</button>
                        </li>
                    </ul>
                    <div>
                        <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
}

