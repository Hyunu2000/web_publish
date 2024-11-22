// 콜백 함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 함수 안에서 다른 함수가 호출되는 것
const job = (a, callback) => {
    callback(a);
}

const job2 = (a, b, callback) => {
    callback(a, b);
}

const print = (a) => console.log(a);
const printSum = (a, b) => {
    console.log(a + b); // 3
}
job(100, print);
console.log('----------');
job2(100, 200, printSum);

// setTimeout 함수 호출
console.clear();
setTimeout((second) => console.log(`setTimeout ${second}초 후 실행!!`), 1000, 1); // ...), ms, 파라미터1, 파라미터2);
// second 라는 매개변수로 1이 전달되고 
// 이 코드는 1초 후에 "setTimeout 1초 후 실행!!"을 출력