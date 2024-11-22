const person = {
    name : '강현우',
    age : 24,
    job : '개발자'
}
const fruits = {
    name : '사과',
    emoji : '🍎'
}

// person객채를 CRUD로 관리하는 함수를 정의
// C(Create), R(Read), U(Update), D(Delete)
// setValue(), getValue(), updateValue(), deleteValue()

// 화살표(Arrow) 함수 표현식
// const 함수명 = (파라미터..) => { 실행문; }
//  function setValue(object, newKey, value) {
//      object[newKey] = value; 
//  }
const setValue = (object, newKey, value) => object[newKey] = value;

const getValue = (object, key) => object[key]; // return 생략 가능

const updateValue = (object, Key, newValue) => object[Key] = newValue;

const deleteValue = (object, key) => delete object[key];


setValue(person, 'address', '수원시'); // 새로운 키를 추가할때는 ''를 생략하지 않는다.
setValue(fruits, 'color', 'red');
console.log(person); // { name: '강현우', age: 24, job: '개발자', address: '수원시' }
console.log(fruits); // { name: '사과', emoji: '🍎', color: 'red' }
console.log('----------');

console.log(getValue(person,'name')); // 강현우
console.log(getValue(fruits,'color')); // red
console.log('----------');

updateValue(person, 'name', '강연우');
updateValue(fruits, 'color', 'Green');
console.log(person); // { name: '강연우', age: 24, job: '개발자', address: '수원시' }
console.log(fruits); // { name: '사과', emoji: '🍎', color: 'Green' }
console.log('----------');

deleteValue(person, 'age');
deleteValue(fruits, 'name');
console.log(person); // { name: '강연우', job: '개발자', address: '수원시' }
console.log(fruits); // { emoji: '🍎', color: 'Green' }

