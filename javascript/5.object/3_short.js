// 변수를 객체의 value로 사용하는 경우, property 생략 가능
let name = '강현우'; 
let age = '24';
const person = {
    name, age
}
console.log(person.name);
console.log(person.age);
console.log('----------');

let x = 0; let y = 0;

const obj = { x, y };

let fname = 'apple';
let emoji = '🍎';
let color = 'Red';

const fruits = { fname, emoji, color };

console.log(obj);
console.log(fruits);

console.log('----------');

// 사원들의 정보를 입력받아, 객체로 반환하는 함수를 정의
// 사원정보 - 사번(empno), 이름(ename), 나이(age)
function createObj(empno, ename, age) {
    return {empno, ename, age};
}
console.log(createObj('1204', '강현우', 24));
console.log(createObj('0818', '강덕한', 28));
let emp1 = createObj('1204', '강현우', 24); // {empno : '1204', ename : '강현우', age : 24} 
let emp2 = createObj('0818', '강덕한', 28); // {empno : '0818', ename : '강덕한', age : 28} 
/*
[
    {empno : '1204', ename : '강현우', age : 24},
    {empno : '0818', ename : '강덕한', age : 28}
]
*/