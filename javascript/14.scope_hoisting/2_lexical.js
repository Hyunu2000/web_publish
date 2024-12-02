/* 
    lexical(렉시컬) - 실행 컨텍스트 안에 포함된 개념으로 스코프 별로 메모리를 
    효율성 있게 관리하는 영역, 변수선언, 실행코드, 외부호출 코드
*/
// 콜스택(Call Stack) - 호출되는 코드(함수)를 순차적으로 실행
// 변수 선언시 let, const를 활용하여 정확한 스코프 범위 설정 중요!!!
{
    let a = 10;
    console.log(`a --> ${a}`); // a --> 10
    // console.log(`aa --> ${aa}`); // let 선언시 not defined error var로 선언시 undefined 반환
    {
        let b = 20;
        let aa = 100;
        // var aa = 100; var는 전역으로 선언됨 
        console.log(`b --> ${b}`); // b --> 20
        console.log(`aa --> ${aa}`); // aa --> 100
        {
            let c = 30;
            console.log(`c --> ${c}`); // c --> 30
            console.log(`a --> ${a}`); // a --> 10
            console.log(`b --> ${b}`); // b --> 20
        } // level3
    } // level2
} // level1

// 실행 컨텍스트
// variable environment
// lexical
// 레코드 정보, 외부 참조, 전역 스코프
// scope chaining