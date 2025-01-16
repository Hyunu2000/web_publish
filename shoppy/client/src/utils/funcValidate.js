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

export const validateLogin = ({ idRef, pwdRef }) => {
    let result = true;

    if (idRef.current.value === '') {
        alert('아이디를 입력해주세요');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
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
    const refEntries = Object.entries(refs); // {idRef : xxxx, ...}
    const msgRefEntries = Object.entries(msgRefs);

    console.log(refEntries); // [[idRef, {xxxx},], [pwdRef, {xxxx}]]
    console.log(msgRefEntries);
    // refsEntries와 msgRefEntries 내의 같은 인덱스에서 서로 연관된 데이터를 다루기 때문에 연관 데이터의 순서도 똑같이 지켜져야 한다.
    // 지켜지지 않는다면 예시로 id 입력 필드가 입력되지 않았지만 pwd 입력 필드의 글자색이 변경되는 경우가 생길 수 있다.

    // refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
    for(let i = 0; i < refEntries.length; i++) {
        const item = refEntries[i];
        const msgItem = msgRefEntries[i];
        const name = item[0];
        const ref = item[1]; // 데이터 입력폼 객체 주소
        const msgName = msgItem[0];
        const msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소

        if(name !== 'emaildomainRef') { 
            if(ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else {  // default
            if(ref.current.value === 'default') {
                alert('이메일 주소를 선택해주세요');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}