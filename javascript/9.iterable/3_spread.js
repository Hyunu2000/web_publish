// ...(Spread Operator, 전개구문)
// 모든 Iterable object에서 사용 가능
// function 함수명(...param)
// [ ...iterable ]
// { ...iterable }

// 1. function 함수명(...param)
function add(...numbers) { // ...numbers[파라미터..] <-- 배열
    let sum = 0;
    for(number of numbers) sum += parseInt(number); // 배열에 string 타입으로 넘어올 때를 감안
    return sum;
}

let sum = add(1, 2, 3, 4, 5, '6');
console.log(`sum = ${sum}`); // sum = 21

// 2. [ ...iterable ]
let fruit1 = ['🍏', '🍋'];
let fruit2 = ['🍓', '🍊', '🍉'];

// fruit1과 fruit2 사이에 '🍍' 추가
let fruit3 = fruit1.concat('🍍', fruit2);
let fruit4 = [...fruit1, '🍍', ...fruit2]; // fruit1, 2의 모든 요소를 가져옴 **...XXX 자주사용함**

console.log(`fruit3 = ${fruit3}`); // fruit3 = 🍏,🍋,🍍,🍓,🍊,🍉
console.log(`fruit4 = ${fruit4}`); // fruit4 = 🍏,🍋,🍍,🍓,🍊,🍉

// 3. { ...iterable }
const hong = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남구"
};

const hongUpdate = {
    ...hong,
    job: "개발자"
}

console.log(hongUpdate); 
// { name: '홍길동', age: 20, address: '서울시 강남구', job: '개발자' } 