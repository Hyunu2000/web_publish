// Iterable object - 순회가 가능한 객체들을 말함, String, Array, Map, Set...
// for...of, ...:Spread operator(전개 구문), Destructing Object(구조 분해 할당)
// Map: (key, value) - set, get, has, keys, values, entries, clear ...
// Set: (value) - add, get, has, delete, keys, values, clear ...
// ***** MDN 사이트를 활용해 깊이 있게 이해하기 *****

// 1, Spread Operator
function display(...params) {
    for(number of params) console.log(number);
}
display(1, 2);
display(1, 2, 3, 4);
console.log('----------');

const hong = {
    name: "홍길동",
    age: 20
};

const hongUpdate = {
    ...hong,
    address: "서울시 강남구"
};
console.log(hongUpdate);
console.log('----------');

// 2. Destructing Object(구조 분해 할당)
const getObject = () => {
    return {name: "공유", age: 30}; // {} --> { name, age }
}
const { name, age } = getObject();
console.log(name, age);
console.log('----------');

const getObject2 = () => {
    return [ 1, 2, 3 ];
}
const [n1, n2, n3]  = getObject2();
console.log(n1, n2, n3);
console.log('----------');

// 3. 인스턴스객체.forEach(콜백함수);
const numbers = [1, 2, 3];
numbers.forEach((element) => console.log(element)); // 인덱스가 필요하면 , 후에 i (element, i)
console.log('----------');

const myMap = new Map();
myMap.set('name', '홍길동');
myMap.set('age', '20');
myMap.forEach((value, key) => console.log(key, value));
// value, key 순서 주의 출력할때는 순서가 상관 없다
console.log('----------');

const mySet = new Set();
mySet.add("홍길동");
mySet.add("홍길동");
mySet.add("서현진");
console.log(mySet);
mySet.forEach((value, key) => console.log(key, value));
// set은 별도의 키를 저장하지 않는다. value 값만 존재
console.log('----------');
