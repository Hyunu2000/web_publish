// object : Array(배열 : []), JSON({}) ..
let apple = null;
apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};

console.log(apple); // { name: 'apple', color: 'red', display: '🍎' }
console.log(apple.name); // apple
console.log(apple.color); // red
console.log(apple.display); // 🍎

console.log('----------');

let grape = {
    name: 'grape',
    color: 'violet',
    display: '🍇'
};

console.log(grape); // { name: 'grape', color: 'violet', display: '🍇' }
console.log(grape.name); // grape
console.log(grape.color); // violet
console.log(grape.display); // 🍇

// 1~5까지 출력
let numberList = [1, 2, 3, 4, 5];
console.log(numberList); // [ 1, 2, 3, 4, 5 ]
console.log(numberList[0]); // 1
console.log(numberList[4]); // 5