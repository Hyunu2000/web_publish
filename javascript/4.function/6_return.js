// 함수의 실행결과 반환 키워드 :: return
function add(a, b) {
    // a = parseInt(a);
    // console.log(parseInt(a) + parseInt(b));
    return (parseInt(a) + parseInt(b)); 
}
let result = add(1, 2); 
console.log(`result = ${result}`);

/*  이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
    반환하는 함수를 정의해주세요.
*/
function createObject(name, age) {
    let obj = {
        name : name, // obj.name
        age : age
    };
    return obj; // obj의 주소값 반환
}

let resultObj = createObject('강현우', 24);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

console.log('-----------');


// 두 수를 입력 받아 곱한 값을 반환하는 함수를 작성해주세요.
// 두 수는 0보다 커야함

function multi(a, b) {
    let result = 0;
    if(a > 0 && b > 0) {
        result = a * b;
    } else {
        result = 'a와 b는 0보다 커야 합니다.';
    }
    return result; // 지역변수를
}
let result2 = multi(10, 2); // 전역변수로
console.log(result2);

// {    전역변수 (Global variable)
//     let a = undefined;
//     let obj = null;
//     const START_COUNT = 0;

//     function aa {
//         기능을 구현하는 작업진행
//         변수 선언시 반드시 초기화
//         지역, 로컬(Local variable)
//         let result = 0;
//     }
// }