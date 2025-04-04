/*
    Primitive 데이터 타입
    - 정수형(Integer) : 100, 1, ...
    - 실수형(Float, Double) : 0.123, 234.2 ...
    - 문자형(Character) : '', ""
    - 불린형(Boolean) : true, false
        ex) let flag = true;  // flag = 1

    Reference 데이터 타입
    - 객체형(Object) : 배열([]), JSON({}) ...
 */

// 정수형 변수
let number = 100;
number = 100.234;
console.log(number); // 100.234

// 실수형 변수
let fnumber = 10.234;
fnumber = 200;
console.log(fnumber); // 200

// 불린 타입
let flag = true; // !(not)
flag = !true;

let flagTest = !flag;

// 객체형 변수
let nameList = ['강현우', '강우현', '우현강'];
console.log(nameList); // [ '강현우', '강우현', '우현강' ]

// Primitive, Reference 데이터 타입 초기화
let address = undefined; //primitive
let addressList = null;  //reference

// 데이터 타입 비교 : typeof
let x = 10;
let xx = 10;
let y = '10';
let obj = {name:'강현우'};
console.log(x, typeof x); // 10 number
console.log(y, typeof y); // 10 string
console.log(x == y);  // true (값만 비교한 결과)
console.log(x === y); // false (데이터 타입을 비교한 결과)
console.log(xx, typeof xx); // 10 number
console.log(x === xx); // true
console.log(obj, typeof obj); // { name: '강현우' } object
console.log(y === obj); // false