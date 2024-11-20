// 한줄 주석
/* 여러줄 주석 */
/**
 * 변수명 선언 규칙
 * - 라틴어 (0~9, a~z, A~Z)
 * - 특수문자 ($, _ 사용가능)
 * - camel case : ex) camelCase
 * - snake case : ex) snake_case
 * 
 * 주의사항
 * - 숫자로 시작할 수 없다.
 * - 예약어(키워드) 사용이 불가하다.
 * - 특수문자 $, _ 만 사용이 가능하다.
 * - 이모지 사용이 불가하다.
 */

// camelCase
let myName = '강현우';
let myAge = 25;
console.log(myName); // 강현우
console.log(myAge); // 25

//snake_case
let audio_name = '삼성';
let audio_color = 'red';
console.log(audio_name); // 삼성
console.log(audio_color); // red

// 저의 이름은 강현우이고, 나이는 25살 입니다.
let output = '저의 이름은 ' + myName + '이고, 나이는 ' + myAge + '살 입니다.'
console.log(output); // 저의 이름은 강현우이고, 나이는 25살 입니다.

// 템플릿 리터럴 
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}살 입니다.`
console.log(output2); // 저의 이름은 강현우이고, 나이는 25살 입니다.
                      // output1과 출력 결과는 같지만 따옴표 때문에 번거롭지 않다!!

// 상수 선언 :: 변수, 상수는 프로그램의 상단에 위치
// 상수 선언시 모두 대문자, SNAKE_CASE로 선언하는 것이 좋다.
const AUDIO_DEVICE_STRAT = 1;
const AUDIO_DEVICE_CONTIN = 2;
const AUDIO_DEVICE_FINISH = 0;
