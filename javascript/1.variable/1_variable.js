/**
 *  변수 형식 : var, let, const
 *  형식 : (var, let, const) 변수명 = 데이터값;
 */

// name 이라는 변수를 선언하고 홍길동 이름으로 초기화한다.
// age 변수를 선언하고, 20으로 초기화
let name = '홍길동';
let age = 20;
const address = '서울시';

// name을 현우로 바꾼다.
name = '현우';
age = '서울시';
age = '30';

//  const로 선언된 변수는 재할당이 불가능하다. 
//  즉, 변수에 값을 한 번 할당한 후에는 그 값을 변경할 수 없다.
/**
 * EX)
 *  const a = 10;
 *  a = 20;  // TypeError: Assignment to constant variable.
 */


// let age = '40';  <<< 문법적으로 불가하다. let으로 변수를 재선언할 수 없다.

console.log(name); // 현우
console.log(age); // 30
console.log(typeof'age'); //string
