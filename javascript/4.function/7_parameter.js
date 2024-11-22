/*  함수의 값을 전달하는 인자
    parameter, argument, 매개변수
*/
console.clear();
function add(a, b) {
    return a + b;
}
function add2(...numbers) { // Spread operator(전개 구문)
    return numbers;         // 스프레드 연산자는 함수의 매개변수에서                             
}                           // "나머지 인자"를 배열 형태로 수집하는 역할
function add3(a, b, ...datas) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(datas); // [ 3, 4, 5, 6, 7 ]
}

// 함수 호출
let sum = add(100, 20000); 
let sum2 = add2(1, 10, 100, 1000, 10000, 1000000, 10000000);
console.log(`sum = ${sum}`); // sum = 20100
console.log(`${sum2}`); // 1,10,100,1000,10000,1000000,10000000
add3(1, 2, 3, 4, 5, 6, 7);

