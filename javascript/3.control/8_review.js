// 구구단 3단 ~ 5단까지 출력
let start = 3;
let finish = 6;
for(let row = 1; row < 10; row++) {
    let outPut = '';
    for(let col = start; col < finish; col++) {
        outPut += `${col} * ${row} = ${row * col}\t`;
    }
    console.log(outPut);
}
console.log('--------------------');
/**
 *  *
 *  **
 *  *** 별찍기
 */
for(let i = 1; i <= 5; i++) {
    let star = '';
    for(let j = 1; j <= i; j++) {
        star += '*';
    }
    console.log(star);
}
console.log('--------------------');
// 사과 이모지를 이용하여 출력
/**
 * 🍏
 * 🍏🍏
 * 🍎🍎🍎
 * 🍏🍏🍏🍏
 * 🍏🍏🍏🍏🍏
 */
for(let row = 1; row <= 5; row++) {
    let outPut = '';
    for(let col = 1; col <= row; col++) {
        if(row === 3) {
            outPut += `🍎\t`;
        } else {
            outPut += `🍏\t`;
        }
    }
    console.log(outPut);
}
