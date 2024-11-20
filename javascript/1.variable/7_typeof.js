// typeof operand, typeof(operand, operand..)
let name = '홍길동';
let age = 20;
let a = 100;
a = 0.1;
a = '가나다';
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = true;

console.log(typeof 100); // number
console.log(typeof '자바스크립트'); // string
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof a); // boolean
console.log(typeof a === typeof age); // false
console.log(typeof (a) === typeof (age)); // false

