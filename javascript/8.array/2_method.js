// Array 빌트인 객체의 메소드 익히기 => MDN 사이트 참조
let array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); // 1 (array1.0 <-- 사용불가)
console.log(array1['0']); // 1  
console.log(`array1.length = ${array1.length}`); // array1.length = 5

let fruits = ['🍏', '🍋'];
console.log(fruits); // [ '🍏', '🍋' ]
fruits[fruits.length] = '🍎';
console.log(fruits); // [ '🍏', '🍋', '🍎' ] 빨간사과 추가

fruits.push('🍊'); // 배열의 마지막에 하나 또는 여러 개의 데이터 추가
console.log(fruits); // [ '🍏', '🍋', '🍎', '🍊' ]

// 1. 배열 요소 추가 : push( ietm1...itemN )
fruits.push('🍍', '🍇', '🍓'); // 이 방식으로 사용 권장
console.log(fruits);
/*
[
  '🍏', '🍋',
  '🍎', '🍊',
  '🍍', '🍇',
  '🍓'
]
*/

// let a = ['🍍', '🍇', '🍓']; // [ '🍏', '🍋', '🍎', '🍊', [ '🍍', '🍇', '🍓' ] ]
// fruits.push(a);                  // 0      1     2     3              4
// console.log(fruits);

// 2. fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명)
// 배열의 key값은 인덱스 주소
let keyList = Object.keys(fruits);
console.log(keyList[2]); // 2

// 3. 배열 요소 삭제
// 3-1 배열 객체의 마지막 요소 삭제 - pop()
console.log(fruits); // ['🍏', '🍋','🍎', '🍊','🍍', '🍇','🍓']
let deleteItem = fruits.pop(); // 삭제된 마지막 요소 저장
console.log(`deleteItem = ${deleteItem}`); // deleteItem = 🍓
console.log(fruits); // [ '🍏', '🍋', '🍎', '🍊', '🍍', '🍇' ]
console.log('----------');
// 3-2 배열 객체의 처음 요소 삭제 - shift()
console.log(fruits.shift()); // 🍏
console.log(fruits);

// 3-3 배열 특정요소 삭제 - splice()
console.log(fruits); // [ '🍋', '🍎', '🍊', '🍍', '🍇' ]
fruits.splice(0, 1, '🍓'); // 레몬을 딸기로 교체
console.log(fruits); // [ '🍓', '🍎', '🍊', '🍍', '🍇' ]
fruits.splice(1, 3); // 1 ~ 3 번지 요소를 삭제
console.log(fruits); // [ '🍓', '🍇' ]
fruits.splice(0, 0, '🍉'); // 0번지 주소에 수박 추가
console.log(fruits); // [ '🍉', '🍓', '🍇' ]


/* 3-4 배열 객체의 특정 요소 추출 
    - slice(index1(begin), index3(end)) --> index 1번지에서 2번지 삭제 (end 미포함)
    원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성
*/
// 1, 2 인덱스 요소 추출 (얕은 복사:shallow copy) 원본 배열에 영향을 주지 않는다.
let sfruits1 = fruits.slice(1, 3); // [ '🍋', '🍎', '🍊', '🍍', '🍇' ]
console.log(sfruits1); // [ '🍎', '🍊' ]

// 3-5 배열 합치기 : concat(배열)
let numberList1 = [1, 2, 3];
let numberList2 = [4, 5, 6];
console.log(numberList1.concat(numberList2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numberList2.concat(numberList1)); // [ 4, 5, 6, 1, 2, 3 ]

// 3-6 배열의 순서 바꾸기 : reverse() => 순서를 거꾸로 출력
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse()); // [ 6, 5, 4, 3, 2, 1 ]

// 3-7 배열의 중첩 해제 : flat()
// [1, 2, 3, [5, 6]] => [1, 2, 3, 5, 6]
let fnumbers = [1, 2, 3, [5, 6]];
console.log(fnumbers);
console.log(fnumbers.flat()); // [ 1, 2, 3, 5, 6 ] 1 level 중첩 해제
let fnumbers1 = [1, 2, 3, [5, 6, [7, 8]]];
console.log(fnumbers1.flat(2)); // [ 1, 2, 3, 5, 6, 7, 8 ] 2 level 중첩 해제
// 외부에서 데이터를 받아올 때 요소가 중첩 된다면 사용. 배열 객체가 중첩을 
// 해제하면서 여러개 생겨나기 때문에 메모리 효율성이 떨어짐. 함수를 따로 만들어 
// 중첩을 해제하는 것이 좋다.

// 3-8 배열의 문자 요소를 하나의 string 문자열로 반환 : join() 
let textList = ['a', 'b', 'c'];
console.log(textList);
console.log(textList.join()); // a,b,c (문자열 a,b,c 로 반환)
console.log(textList.join().split(',')); // [ 'a', 'b', 'c' ] 문자 데이터를 배열로 반환
console.log(textList.join().split(',').join()); // a,b,c









