// String 클래스의 메소드 정리
let name = '홍길동';
let sname = new String('홍길동'); 
console.log(typeof name, typeof sname); // string object
console.log(name === sname.valueOf()); // true

let text = 'Hello JavaScript~~!!!';
console.log(text.charAt(0)); // H
console.log(text.charAt(3)); // I
console.log(text[0]); // H
console.log('Welcome~'.concat(text)); // Welcome~Hello JavaScript~~!!!
console.log(text.indexOf('a')); // 7
console.log(text.toUpperCase()); // HELLO JAVASCRIPT~~!!!
console.log(text.toLowerCase()); // hello javascript~~!!!

// 문자열 추출
console.log(text.substring(0, 2)); // He (end 자릿수 전까지 추출)
console.log(text.substring(4, 8)); // o Ja (end 자릿수 전까지 추출)
console.log(text.slice(0, 2)); // He (end 자릿수 전까지 추출 (자주씀))
console.log(text.slice(4)); // o JavaScript~~!!! (end 자릿수 전까지 추출)
console.log(text.slice(-3)); // !!! (end 자릿수 전까지 추출)

// 문자열 공백 삭제
text = '        JavaScript!        ';
console.log(text.trim()); // JavaScript!
text = '        Java    Script!        ';
console.log(text.trim()); // Java    Script!

// 구분자를 이용하여 문자열 추출
const fruit = '🍎, 🍊, 🍏, 🍋'; // 문자열
const fruitArray = fruit.split(','); // 배열 (자주씀)
console.log(fruit); // 🍎, 🍊, 🍏, 🍋
console.log(fruitArray); // [ '🍎', ' 🍊', ' 🍏', ' 🍋' ]

