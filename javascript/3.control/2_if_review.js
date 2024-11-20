// 임의의 과일을 선택받아...
// 좋아하는 과일 : apple, orange, lemon
// 이외의 과일 선택시 '좋아하는 과일 없음'
let fruit = 'orange';
let choice = undefined; // 중간 결과값 저장 변수
if(fruit === 'apple') choice = '🍎';
else if(fruit === 'orange') choice = '🍊';
else if(fruit === 'lemon') choice = '🍋'; 
else choice = `${fruit} 없어요`;

console.log(`결과 : ${choice}`); // 결과 : 🍊