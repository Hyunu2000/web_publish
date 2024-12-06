/* 함수들만 있기 때문에 default 입력 X 
함수명 또한 컴포넌트가 아니므로 소문자로 시작 */

/**
 * 내용 : 비동기식 네트워크 연동 실행 함수
 * @param {*} url 
 * @returns 
 */
export async function fetchJSON(url) {
    const data = await fetch(url);
    const jsonData = await data.json();

    return jsonData;
}