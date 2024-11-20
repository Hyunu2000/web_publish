// 제어문 - 조건문 : switch(조건) ~ case
/**
    switch(숫자, 문자) {
        case 숫자, 문자리터럴 : 
            실행문;
            break; << 브레이크가 있어야만 빠져나갈 수 있다. 
                    default는 마지막 줄이기 때문에 브레이크가 필요하지 않다.
        case ~~~
        default :
            실행문;
    }
        코드의 효율성을 감안해서 코딩하도록 하자
        결과값이 참 혹은 거짓 두가지 밖에 없다면
        switch case는 부적합하다.
 */

// 0 : 월요일 1 : 화요일, 2 : 수요일
let useage = `[0]월요일, [1]화요일, [2]수요일`;
let day = 0;
let resultDay = undefined;
switch(day) {
    case 0:
        resultDay = '월요일'; break;
    case 1:
        resultDay = '화요일'; break;
    case 2:
        resultDay = '수요일'; break;
    default:
        console.log(`사용법 : ${useage}`);
}

if(!(resultDay === undefined)) {
    console.log(`선택한 요일은 [${resultDay}] 입니다.`); // 선택한 요일은 [월요일] 입니다.
}

console.log('------------');

// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요!
let number = 100;
// number = 101;
let result = undefined;
switch(number % 2) {
    case 0 :
        result = '🍎';
        break;
    case 1 :
        result = '🍏';
        break;
    default :
        result = '해당 과일 없음';
}
console.log(result); // 🍎

