// String 클래스의 메소드 정리
let name = '홍길동';
let sname = new String('홍길동');
console.log(typeof name, typeof sname);
console.log(name === sname.valueOf());

let text = 'Hello JavaScript~~!!!';
console.log(text.charAt(0));
console.log(text.charAt(3));
console.log(text[0]);
console.log('Welcome~'.concat(text));
console.log(text.indexOf('a'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 문자열 추출
console.log(text.substring(0, 2)); // end 자릿수 전까지 추출
console.log(text.substring(4, 8)); // end 자릿수 전까지 추출
console.log(text.slice(0, 2)); // end 자릿수 전까지 추출 (자주씀)
console.log(text.slice(4)); // end 자릿수 전까지 추출
console.log(text.slice(-3)); // end 자릿수 전까지 추출

// 문자열 공백 삭제
text = '        JavaScript!        ';
console.log(text.trim());
text = '        Java    Script!        ';
console.log(text.trim());

// 구분자를 이용하여 문자열 추출
const fruit = '🍎, 🍊, 🍏, 🍋'; // 문자열
const fruitArray = fruit.split(','); // 배열 (자주씀)
console.log(fruit);
console.log(fruitArray);

