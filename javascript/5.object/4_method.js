/*  객체 내에 정의된 함수를 메소드라고 한다. 메소드는 객체의 속성처럼 객체에 포함되어 있으며, 
    객체와 관련된 작업을 수행하는 기능을 한다.
*/
const apple = {
    name : '사과',
    color : 'Red',
    emoji : '🍎',
    display : function () { console.log('🍎'); }, // 메소드
    getName : function () { console.log(this.name); }, 
    getColor : function () { console.log(this.color); },
    getEmoji : function () { console.log(this.emoji); }
}
console.log(apple);
/*{
    name: '사과',
    color: 'Red',
    emoji: '🍎',
    display: [Function: display],
    getName: [Function: getName],
    getColor: [Function: getColor],
    getEmoji: [Function: getEmoji]
} */

apple.getName(); // 사과
apple.getColor(); // red
apple.getEmoji(); // 🍎

