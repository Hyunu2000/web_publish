// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업 
console.clear();
// 함수호출
hoist1(); // 호출 가능!!
// hoist2(); // error

function hoist1() {
    console.log("호이스팅 1");
}

const hoist2 = () => {
    console.log("호이스팅 2");
}

hoist2(); // arrow 함수는 반드시 선언 후 함수 호출!!
