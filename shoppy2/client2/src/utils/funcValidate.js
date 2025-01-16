/*******************************
    title : 로그인 폼 체크
*******************************/
// export const validateLogin = (refs) => {
//     let result = true;

//     if (refs.idRef.current.value === '') {
//         alert('아이디를 입력해주세요');
//         refs.idRef.current.focus();
//         result = false;
//     } else if (refs.pwdRef.current.value === '') {
//         alert('패스워드를 입력해주세요');
//         refs.pwdRef.current.focus();
//         result = false;
//     }
//     return result;
// }

export const vaildateLogin = ({idRef, pwdRef}) => {
    let result = true;

    if(idRef.current.value === '') {
        alert('아이디를 입력해주세요');
        idRef.current.focus();
        result = false;
    } else if(pwdRef.current.value === '') {
        alert('패스워드를 입력해주세요');
        pwdRef.current.focus();
        result = false;
    }
    return result;
}

/*******************************
    title : 회원가입 폼 체크
*******************************/
// validate
export const validateSignup = (refs, msgRefs) => {
    const refEntries = Object.entries(refs);
    const msgRefEntries = Object.entries(msgRefs);

    console.log(refEntries);
    console.log(msgRefEntries);

    for(let i = 0; i < refEntries.length; i++) {
        const item = refEntries[i];
        const msgItem = msgRefEntries[i];
        const name = item[0];
        const ref = item[1];
        const msgName = msgItem[0];
        const msgRef = msgItem[1];

        if(name !== 'emaildomainRef') {
            if(ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else {
            if(ref.current.value === 'default') {
                alert('이메일 주소를 선택해주세요');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}