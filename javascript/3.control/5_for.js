// 제어문 - 반복문 : for
// for : 정확한 반복 횟수를 알고 있을 때 <--> Array
// for((1)초기값(선언문) ; (2)조건식 ; (4)증감식) {
//     (3)실행문;
// } for 반복문은 자주 사용되기 때문에 정확하게 이해하도록 하자.

// 1. 초기값을 선언한다. --> 초기값 변수는 for 블록에서만 실행
// 2. 선언한 변수는 조건식을 통해 비교한다. --> boolean 타입의 결과
// 3. (2)번의 결과가 true이면 실행문을 실행한다.
// 4. 실행문이 종료되면, 증감식을 실행한다.
// (2) ~ (4)번까지 반복해서 작업을 실행한다.
// 5. 조건식이 false가 되면 for 루프 블록을 빠져나온다. 

// 숫자 1부터 5까지 반복해서 출력해주세요.
for(let i=1 ; i <= 10 ; i++) {
    console.log(i); // numberList.length = 3
}

// 숫자 배열을 출력해주세요.
let numberList = [1, 2, 3];
// 배열의 마직막 인덱스 주소는 배열 크기보다 하나 작다.
// 배열의 크기 구하는 형식 : 배열 객체.length
console.log(`numberList.length = ${numberList.length}`)
for(let i=0; i <= numberList.length-1 ; i++) {
    console.log(numberList[i]); // 1    
}                               // 2
                                // 3
console.log('-------------');

// 과일 리스트 출력
let fruitList = ['apple', 'orange', 'lemon'];
let emojiList = ['🍎','🍊','🍋'];

let length = fruitList.length-1;

for(let i=0; i <= length; i++) {
    // lemon만 출력
    let fruit = fruitList[i];
    let emoji = emojiList[i];
    if(fruit === 'lemon') {
        console.log(emoji); // 🍋
    }
}

// while : 종료하는 시점을 정확하게 알고 있을 때 <--> true, false 값을 통해 체크
