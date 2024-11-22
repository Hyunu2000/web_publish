// *객체 생성자 함수* 정의와 사용법 익히기
function Fruit(name, color, emoji) { // 생성자 함수명은 첫글자를 대문자로 시작한다.
    // field
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    // method
    // this.display = function () { console.log(this.emoji); }
    this.display = () => console.log(this.emoji);
}

// new => heap에 Fruit타입으로 벨류값이 저장되어 그 주소가 apple(생성한 객체)에 저장된다.
const apple = new Fruit('apple', 'red', '🍎'); 
const orange = new Fruit('orange', 'coral', '🍊');
console.log(apple);
/* Fruit {
    name: 'apple',
    color: 'red',
    emoji: '🍎',
    display: [Function (anonymous)]
} */

console.log(orange);
/* Fruit {
    name: 'orange',
    color: 'coral',
    emoji: '🍊',
    display: [Function (anonymous)]
} */


// // apple : property - name, color : method - display()
// const apple = {
//     name : 'apple',
//     color : 'red',
//     display : function () { console.log('🍎'); }
// }
// // orange : property - name, color : method - display()
// const orange = {
//     name : 'orange',
//     color : 'coral',
//     display : function () { console.log('🍊'); }
// }
// // lemon : property - name, color : method - display()
// const lemon = {
//     name : 'lemon',
//     color : 'yellow',
//     display : function () { console.log('🍋'); }
// }