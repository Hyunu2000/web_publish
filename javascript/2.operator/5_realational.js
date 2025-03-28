// 비교 연산자 : >, <, >=, >=.!=, ==, ===
// 실행결과 : boolean
// 제어문 if, while 문에서 사룔
/**
 * if(조건식 : 3 > 2) {
 *    // true
 * }  else {
 *    //false
 * }
 */
console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 3); // true
console.log(3 <= 3); // true
console.log(3 == '2'); // false 3 == 2
console.log(3 == 'A'); // false 3 == 67
console.log(3 === '2'); // false number == string
console.log(3 === 'A'); // false number == string

console.log('------------');

let obj1 = {
    name : '강현우'
};
let obj2 = {
    name : '강우현'
};
let obj3 = obj1;

console.log(obj1); // { name: '강현우' }
console.log(obj2); // { name: '강우현' }

console.log(`obj1 : ${obj1}`); // obj1 : [object Object]
console.log(`obj2 : ${obj2}`); // obj2 : [object Object]
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // 힙 메모리의 주소값이 틀리기 때문에 false를 반환한다.
console.log(typeof obj1 === typeof obj2); // true

console.log('-------------');

console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // 동일한 주소값이기 때문에 true를 반환한다.
console.log(typeof obj1 === typeof obj3); // true

console.log('-------------');

console.log(obj1.name == obj2.name); // false
// .으로 heap memory에 저장된 데이터 값을 가져와서 비교

/**
 * = 값을 할당
 * == 할당된 값을 비교
 * === 할당된 값과 데이터 타입까지 비교
 */

