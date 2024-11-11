// 중첩 for문 : 이차원 형태의 저장소 데이터 출력

/*         열1     열2     열3
    행1  1(1, 1) 2(1, 2) 3(1, 3)
    행2  4(2, 1) 5(2, 2) 6(2, 3)
    
    for() { // 행 row 
        for() { // 열 column
        }
    }
*/
let countNum = 1; // 숫자를 카운트할 변수 선언 for문 밖에서 선언해야 한다.
for(let i = 1; i < 3 ; i++) { // 행 증가 반복문
    let rows = '';
    for(let j=1 ; j < 4; j++){ // 열 증가 반복문
        rows += `${countNum++}\t`; // countNum 값을 1씩 증가 \t는 tab만큼 공간을 주겠다는 의미
    }             // += 2 <== 2씩 증가
    console.log(rows);
}
// console.clear(); // 콘솔창 정리

console.log('-----------');

// 구구단 2단을 출력
/*
    2 * 1 = 2
    ...
    2 * 9 = 18
*/
for(let i = 1; i < 10; i++) {
    console.log(`3 * ${i} = ${i * 3}`);
}