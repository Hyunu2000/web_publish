// 1 ~ 6까지 출력
// 3인 경우 for문 빠져나오기 
for(let i = 1;i <= 6; i++) {
    if(i === 3) {
        // break;
        i = 10; // 자연스럽게 빠져나가기 위해 조건식을 false로 만든다. 
                // (하지만 break를 일반적으로 사용한다.)
    } else {
        console.log(`i = ${i}`);
    }
}
// i = 1
// i = 2
