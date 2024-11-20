// Call by value
let a = 100;
let b = '홍길동';
let c = a;

console.log(a); // 100
console.log(b); // 홍길동
console.log(c); // 100
console.log(a === c); // true (데이터 타입, 값 모두 체크)

console.log('------------');

// Call by reference
let aa = [1, 2, 3];
let bb = '홍길동';
let cc = aa;

console.log(aa); // [ 1, 2, 3 ]
console.log(bb); // 홍길동
console.log(cc); // [ 1, 2, 3 ]
console.log(aa === cc); // true
console.log(typeof aa); // object
console.log(typeof cc); // object
