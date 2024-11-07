// 사칙연산 : +, -, *, /, %, **
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5); // 모듈러 연산, 나머지 연산자
console.log(3 ** 5);

console.log('-----------');

// % (모듈러 연산자)
let a = 101;
console.log(a % 2); // a가 짝수라면 0, 홀수라면 1반환

console.log('-----------');

// + (접합 연산자)
// 문자로 시작하면 뒤에 나오는 +는 접합 연산자로 실행됨
console.log(10 + 20);
console.log('sum : ' + 10 + 20);
console.log('sum : ' + (10 + 20));
console.log(`sum : ${10 + 20}`); // 템플릿 리터럴 사용으로 혼동이 적어짐