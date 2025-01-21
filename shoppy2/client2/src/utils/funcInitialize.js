import React, { useRef } from 'react';

/***********************************
 *  Signup 컴포넌트 초기화 작업
 **********************************/
export function initSignup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
        const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];
        const placeholdersKor = ['아이디 입력(6~20자)', '12자 이내의 비밀번호를 입력해주세요', '비밀번호 확인을 입력해주세요',
                                    '이름을 입력해주세요', '휴대폰 번호를 입력해주세요', '이메일 주소를 입력해주세요'];
        
        /** 배열.reduce(콜백함수, 리턴데이터 타입정의) */
        const labels = names.reduce((acc, name, idx) => {
            acc[name] = namesKor[idx];
            return acc; // {id:'아이디'}
        }, {});
    
        const placeholders = names.reduce((acc, name, idx) => {
            acc[name] = placeholdersKor[idx];
            return acc; // {'아이디 입력(6~20자)'}
        }, {});
    
        const initFormData = names.reduce((acc, name) => {
            acc[name] = "";
            return acc;
        }, {});

        return {names, placeholders, labels, initFormData};
}

export function useInitSignupRefs(names) { // 커스터머 훅
    const refs = useRef(
        names.reduce((acc, name) => {
            acc[name.concat('Ref')] = React.createRef(); // useRef(null) Hook 바로 호출 X   
            return acc;
            }, {})
        );
        refs.current.emaildomainRef = useRef(React.createRef());
    
        const msgRefs = useRef(
            names.reduce((acc, name) => {
                acc[name.concat('MsgRef')] = React.createRef();
                return acc;
            }, {})
        );

        return {refs, msgRefs};

}