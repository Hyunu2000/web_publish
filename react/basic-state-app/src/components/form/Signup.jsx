import React, { useState, useRef } from 'react';
import { validateSignup } from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import './commons.css';
import './cgv.css';

export default function Signup() {
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null)
    };

    // 폼데이터 저장소
    const init = {
        'id': '',
        'pwd': '',
        'cpwd': '',
        'name': '',
        'phone': '',
        'emailName': '',
        'emailDomain': ''
    };
    const initErrors = {
        'id': '',
        'pwd': '',
        'cpwd': '',
        'name': '',
        'phone': '',
        'emailName': '',
        'emailDomain': ''
    };

    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(initErrors);

    // 폼의 입력이 변경되는 경우 호출하는 함수
    const handleChangeSignup = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        errorCheckSignup(name, value, errors, setErrors);
        // if(name === 'id') {
        //     (value === '') ? setErrors({...errors,['id']:'아이디를 입력해주세요'})
        //     : setErrors({...errors,['id']:''})
        // }
    }
    // 폼의 입력이 종료된 후 Submit 함수

    const handleSubmitSignup = (event) => {
        event.preventDefault();
        if (validateSignup(refs, errors, setErrors)) {
            console.log(formData);
        }
    }

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmitSignup}>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span id="error-msg-id">{errors.id}</span>
                            <div>
                                <input type="text" name="id" id="id"
                                    placeholder="아이디 입력(6~20자)"
                                    value={formData.id}
                                    ref={refs.idRef}
                                    onChange={handleChangeSignup} />
                                <button type="button" onclick="idCheck(event)" id="id-check">중복확인</button>
                                <input type="hidden" id="idCheckResult" value="default" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span id="error-msg-pwd">{errors.pwd}</span>
                            <div>
                                <input type="password" name="pwd" id="pwd"
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                    value={formData.pwd}
                                    ref={refs.pwdRef}
                                    onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span id="error-msg-cpwd">{errors.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" id="cpwd"
                                    onblur="passwordCheck()"
                                    placeholder="비밀번호 재입력"
                                    value={formData.cpwd}
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <span id="error-msg-name">{errors.name}</span>
                            <div>
                                <input type="text" name="name" id="name"
                                    placeholder="이름을 입력해주세요"
                                    value={formData.name}
                                    ref={refs.nameRef}
                                    onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <span id="error-msg-phone">{errors.phone}</span>
                            <div>
                                <input type="text" name="phone" id="phone"
                                    placeholder="휴대폰 번호 입력('-' 포함)"
                                    value={formData.phone}
                                    ref={refs.phoneRef}
                                    onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <span id="error-msg-emailname">{errors.emailName}</span>
                            <div>
                                <input type="text" name="emailName" id="emailName"
                                    placeholder="이메일 주소"
                                    value={formData.emailName}
                                    ref={refs.emailNameRef}
                                    onChange={handleChangeSignup} />
                                <span>@</span>
                                <select name="emailDomain" id="emailDomain"
                                    value={formData.emailDomain}
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeSignup}>
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button type="submit">가입하기</button>
                            <button type="reset">가입취소</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>

    );
}

