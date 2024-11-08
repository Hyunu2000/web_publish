// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요!

// 1. 숫자 입력받기
let number = 100;
// number = 101;
let result = undefined;

// 2. 숫자 체크 (짝수인지, 홀수인지) 결과에 따라 값 입력
// 1 = true 0 = false
if(number % 2) result = '🍏';
else result = '🍎';

// 3. 값 출력
console.log(result);

// 삼항연산자 : () ? : ;
let choice = undefined;
(!(number % 2))? (choice = '🍎') : (choice = '🍏'); 
console.log(choice);

// 삼항연산자
let emoji = (!(number % 2))? '🍎' : '🍏'; 
console.log(emoji);

