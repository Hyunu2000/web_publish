// 단항 연산자 : ++, --, !, !!
let a = 10;
console.log(++a); // 11
console.log(a++); // 11 출력 후 1증가
console.log(a); //12

console.log('-----------')

let b = 10;
console.log(--b); // 9
console.log(b--); // 9 출력 후 1감소
console.log(++b); // 9
console.log(b++); // 9
console.log(b); // 10

let flag = true;
console.log(flag);
console.log(!flag);
console.log(!!flag); // !(!flag)
