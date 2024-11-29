// 구조 분해 할당(destructure)
let numbers = [1, 2, 3, 4, 5]; 
let aa = numbers;
let [a, b, ...nlist] = numbers;
/*
    let a = numbers[0];
*/
console.log(aa); // [ 1, 2, 3, 4, 5 ]
console.log(a); // 1
console.log(b); // 2
console.log(nlist); // [ 3, 4, 5 ]

let hong = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남구"
}
let {name, age, address} = hong;
/*
    구조분해 할당으로 정의되는 변수는
    객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의 되어야함
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;
 */

// hong이라는 사람의 정보를 각각의 변수로 정의
console.log(name); // 홍길동
console.log(age); // 20
console.log(address); // 서울시 강남구
console.log('----------');

// 함수의 반환값을 받아 구조 분해 할당(destructure) 방식으로 정의
function createEmoji() {
    return {
        fname: "apple",
        color: "red",
        emoji: "🍎"
    };
}

let {color, emoji, fname, price=1000} = createEmoji();
// let price = 1000;
console.log(fname, color, emoji, price); // apple red 🍎 1000

let flist = ['🍎', '🍊', '🍋'];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon); // 🍎 🍊 🍋