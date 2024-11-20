// // 구구단 2단을 출력
/*
    2 * 1 = 2
    ...
    2 * 9 = 18
*/
for(let i = 1; i < 10; i++) {
    console.log(`2 * ${i} = ${i * 2}`);
}

console.log('-----------');

// 2단 ~ 9단 출력
for(let i = 1; i <= 9; i++) {
    let rows = '';
    for(let j = 2; j <= 9; j++) {
        rows += `${j} * ${i} = ${j * i}\t`; //2 * 1 = 2   3 * 1 = 3   ...
    }
    console.log(rows); // 중간결과를 저장하는 변수를 지정하고 
}                      // 출력을 해야 행과 열을 표현할 수 있다.
console.log('---------------------');

// 별찍기
for(let i = 1; i <= 5; i++) {
    let star = '';
    // 현재 줄의 번호(i)만큼 '*'를 추가하는 반복문
    for(let j = 1; j <= i; j++) {
        star += '⭐';
    }
    console.log(star);
}
/*
        ⭐
        ⭐⭐
        ⭐⭐⭐
        ⭐⭐⭐⭐
        ⭐⭐⭐⭐⭐
*/

console.log('---------------------');

// 반대로 별찍기
for(let i = 5; i >= 1; i--) {
    let revStar = '';
    for(let j = i; j >= 1; j--) {
        revStar += '⭐';
    }
    console.log(revStar);
}
/*
        ⭐⭐⭐⭐⭐
        ⭐⭐⭐⭐
        ⭐⭐⭐
        ⭐⭐
        ⭐
*/
