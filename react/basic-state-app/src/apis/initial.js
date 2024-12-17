/**
 * Form 초기화 이름 생성
 */
export const initFormNames = (initArray) => {
    const init = initArray.reduce((acc, key) => {
        acc[key] = '';
        return acc;
    }, {});

    return init;
}