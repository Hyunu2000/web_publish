/**
 * KOBIS 박스오피스 정보 호출 함수
 */
export async function kobisBoxOffice(type, searchDt) {
    const key = `fee1a09134df077267d06fa7f63aae37`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

    const kobis = await fetch(url);
    const jsonData = await kobis.json();

    return jsonData;
}