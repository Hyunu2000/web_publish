function a() {
    c(); // return address(복귀 주소)
    console.log(`-----> a function!!`);
}  
function b() {
    setTimeout(() => { console.log(`3초 후 setTimeout 함수 실행!!`)},3000);
    console.log(`-----> b function!!`);
}  
function c() {
    b(); 
    console.log(`-----> c function!!`);
}  

a();

/*
출력 순서
-----> b function!!
-----> c function!!
-----> a function!!
3초 후 setTimeout 함수 실행!!
*/