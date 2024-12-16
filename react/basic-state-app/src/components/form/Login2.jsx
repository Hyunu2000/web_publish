import React, { useState, useRef } from 'react';
import { validateLogin2 } from '../../apis/validate.js';

export default function Login2() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = { "id": '', "password": '' };
    const [errorMsg, setErrorMsg] = useState({ "id": '', "password": '' });
    const [form, setForm] = useState(initForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        if (name === 'id') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' })
                : setErrorMsg({ ...errorMsg, ['id']: '' })
        } else if (name === 'password') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['password']: '패스워드를 입력해주세요' })
                : setErrorMsg({ ...errorMsg, ['password']: '' })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
            'idRef': idRef,
            'passwordRef': passwordRef,
            'errorMsg': errorMsg,
            'setErrorMsg': setErrorMsg
        };

        if (validateLogin2(param)) console.log(form);
    }


    return (
        <div>
            <h1>Login</h1>
            <form name='login-form' onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text"
                        name='id'
                        value={form.id}
                        ref={idRef}
                        onChange={handleChange} />
                    <span style={{ 'color': 'red' }}>{errorMsg.id}</span>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password"
                        name='password'
                        value={form.password}
                        ref={passwordRef}
                        onChange={handleChange} />
                    <span style={{ 'color': 'red' }}>{errorMsg.password}</span>
                </div>
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
}

