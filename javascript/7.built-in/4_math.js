// Math 클래스 - 정의된 모든 변수, 상수, 함수 값은 static 선언
// Math.변수, Math.상수, Math.함수명
let num1 = 123.856;

console.log(num1); // 123.856
console.log(`Math.abs(num1) = ${Math.abs(num1)}`);  // 123.856 절대값
console.log(`Math.floor(num1) = ${Math.floor(num1)}`);  // 123 소수점 절삭
console.log(`Math.trunc(num1) = ${Math.trunc(num1)}`);  // 123 소수점 절삭
console.log(`Math.round(num1) = ${Math.round(num1)}`);  // 124 반올림
console.log(`Math.max(1, 2, 3, 4, 5) = ${Math.max(1, 2, 3, 4, 5)}`);  // Math.max(1, 2, 3, 4, 5) = 5 (최대값)
console.log(`Math.min(1, 2, 3, 4, 5) = ${Math.min(1, 2, 3, 4, 5)}`);  // Math.min(1, 2, 3, 4, 5) = 1 (최소값)

// 자릿수별 절삭
let num2 = 12322.385;
console.log(Number(num2.toPrecision(5))); // 12322

// 0 ~ 1 사이의 숫자를 랜덤하게 반환
console.log(`Math.random() = ${Math.random()}`); // Math.random() = 0.39363506177700347 출력때마다 랜덤한 숫자

// 1 ~ 100 사이의 숫자를 랜덤하게 출력
let rnumber = Math.floor(Math.random()*100 + 1);
console.log(rnumber); // 81 출력때마다 랜덤한 숫자



