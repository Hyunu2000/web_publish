import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup, handleDuplicateIdCheck, handlePasswordCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {
    const { names, placeholders, labels, initFormData } = initSignup();
    const { refs, msgRefs } = useInitSignupRefs(names); // names를 먼저 받아야 하기 때문에 코드 순서 주의
    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');

    // change
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setFormData({ ...formData, [name]: value });
        
    };

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateSignup(refs, msgRefs)) {
            if(idCheckResult === 'default') {
                alert('중복 확인을 진행해주세요.');
                return false;
            } else {
                console.log('submit ---->>', formData);
            }
        }
    };

    return (
        <div className="content">
            <h1 className="center-title">SIGNUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name) => (
                            <li>
                                <label><b>{labels[name]}</b></label>
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를(을) 입력해주세요</span>
                                <div>
                                    {name === 'emailname' ? (
                                        <>
                                            <input
                                                type="text"
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            <span>@</span>
                                            <select
                                                name="emaildomain"
                                                ref={refs.current['emaildomainRef']}
                                                onChange={handleChangeForm}>
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input
                                                type={(name === 'pwd' || name === 'cpwd') ? 'password' : 'text'}
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                onBlur={
                                                    (name === 'cpwd') ? () => {
                                                        handlePasswordCheck(
                                                            refs.current['pwdRef'],
                                                            refs.current['cpwdRef'],
                                                            refs.current['nameRef'],
                                                            msgRefs.current['pwdMsgRef'],
                                                            msgRefs.current['cpwdMsgRef']
                                                        )
                                                    } : null
                                                }
                                                placeholder={placeholders[name]}
                                            />
                                            {name === 'id' &&
                                                <>
                                                    <button type="button"
                                                        onClick={() => {
                                                            handleDuplicateIdCheck(
                                                                                    refs.current['idRef'],
                                                                                    refs.current['pwdRef'],
                                                                                    msgRefs.current['idMsgRef'],
                                                                                    setIdCheckResult
                                                            )
                                                        }}
                                                        >중복확인</button>
                                                    <input type="text" 
                                                            value={idCheckResult}
                                                            />
                                                </>
                                            }
                                        </>
                                    )
                                    }
                                </div>
                            </li>
                        ))
                    } {/** end of map */}


                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

