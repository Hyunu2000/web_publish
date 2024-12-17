/**
 * CgvLoginForm 유효성 체크 함수
 * @returns 
 */
// 컴포넌트가 아니기에 default는 작성X // props 사용불가 함수이기 때문에
export const validate = (param) => {
    let result = true;

    if (param.refs.idRef.current.value === '') {
        // alert('아이디를 입력해주세요')
        param.setErrorMsg({ ...param.errorMsg, ['id']: '아이디를 입력해주세요' });
        param.refs.idRef.current.focus();
        result = false;
    } else if (param.refs.passwordRef.current.value === '') {
        // alert('패스워드를 입력해주세요')
        param.setErrorMsg({ ...param.errorMsg, ['pwd']: '패스워드를 입력해주세요' });
        param.refs.passwordRef.current.focus();
        result = false;
    }

    return result;
}


/**
 * Login2 컴포넌트 유효성 체크 함수
 */
export const validateLogin2 = (param) => {
    let result = true;
    if (param.idRef.current.value === '') {
        // alert('아이디를 입력해주세요')
        param.setErrorMsg({ ...param.errorMsg, ['id']: '아이디를 입력해주세요' });
        param.idRef.current.focus();
        result = false;
    } else if (param.passwordRef.current.value === '') {
        // alert('비밀번호를 입력해주세요')
        param.setErrorMsg({ ...param.errorMsg, ['password']: '비밀번호를 입력해주세요' });
        param.passwordRef.current.focus();
        result = false;
    }

    return result;
}


/**
 * UserInfo 컴포넌트의 유효성 체크 함수
 */
export const validateForm = (refs) => {
    let result = true;
    if (refs.nameRef.current.value === '') {
        alert('이름을 입력해주세요')
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.addressRef.current.value === '') {
        alert('주소를 입력해주세요')
        refs.addressRef.current.focus();
        result = false;
    } else if (refs.ageRef.current.value === '') {
        alert('나이를 입력해주세요')
        refs.ageRef.current.focus();
        result = false;
    }

    return result;
}


/**
 * Signup2Form 유효성 체크 함수
 */
export function validateFormSignup2(refs) {
    /** !!! 배열.map() or 배열.forEach() 함수는 배열객체를 순회하는 것이
     * 목적이므로 if 체크 후 focus가 적용되지 않음!!!
    */
    const refEntries = Object.entries(refs);
    console.log(refEntries);
    const msgs = {
        'idRef': '아이디', 'passRef': '패스워드', 'nameRef':'이름', 'phoneRef':'전화번호',
        'emailRef': '이메일'

    };

    for (const item of refEntries) {
        const name = item[0];
        const ref = item[1];
        // console.log(ref);
        
        if (ref.current.value === '') {
            alert(`${msgs[name]}를 입력해주세요`);
            ref.current.focus();
            return false;
        }
    }
    return true;

    // let checkResult = true;

    // if (refs.idRef.current.value === '') {
    //     alert('아이디를 입력하세요.');
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // } else if (refs.passRef.current.value === '') {
    //     alert('패스워드를 입력하세요.');
    //     refs.passRef.current.focus();
    //     checkResult = false;
    // } else if (refs.nameRef.current.value === '') {
    //     alert('이름을 입력하세요.');
    //     refs.nameRef.current.focus();
    //     checkResult = false;
    // } else if (refs.phone1Ref.current.value === '') {
    //     alert('전화번호 첫번째 부분을 입력하세요.');
    //     refs.phone1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone2Ref.current.value === '') {
    //     alert('전화번호 두번째 부분을 입력하세요.');
    //     refs.phone2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone3Ref.current.value === '') {
    //     alert('전화번호 세번째 부분을 입력하세요.');
    //     refs.phone3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.addressRef.current.value === '') {
    //     alert('주소를 입력하세요.');
    //     refs.addressRef.current.focus();
    //     checkResult = false;
    // } else if (refs.birth1Ref.current.value === '') {
    //     alert('생년월일(년)을 입력하세요.');
    //     refs.birth1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth2Ref.current.value === '') {
    //     alert('생년월일(월)을 입력하세요.');
    //     refs.birth2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth3Ref.current.value === '') {
    //     alert('생년월일(일)을 입력하세요.');
    //     refs.birth3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.jobRef.current.value === 'default') {
    //     alert('직업을 선택하세요.');
    //     refs.jobRef.current.focus();
    //     checkResult = false;
    // } else if (!refs.genderRef[0].current.checked && !refs.genderRef[1].current.checked) {
    //     alert('성별을 선택하세요.');
    //     refs.genderRef[0].current.focus();
    //     checkResult = false;
    // } else if (refs.emailRef.current.value === '') {
    //     alert('이메일을 입력하세요.');
    //     refs.emailRef.current.focus();
    //     checkResult = false;
    // } else if (refs.introRef.current.value === '') {
    //     alert('자기소개를 입력하세요.');
    //     refs.introRef.current.focus();
    //     checkResult = false;
    // }

    // return checkResult;
}