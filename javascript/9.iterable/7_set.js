// Set 클래스
// 다양한 데이터 (원시데이터(primitive), 객체참조)
// 데이터 추가 : add(value)

let mySet = new Set();
mySet.add(10);
mySet.add("홍길동");
mySet.add({age: 20});
mySet.add([1, 2, 3]);
console.log(mySet); // Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3 ] }

// 데이터 순회
for(let value of mySet) {
    console.log(`value => ${value}`);
}
/*
value => 10
value => 홍길동
value => [object Object]
value => 1,2,3
*/

mySet.forEach((value) => {
    console.log(value); // [ 1, 2, 3 ]
});
/*
10
홍길동
{ age: 20 }
[ 1, 2, 3 ]
*/

// 데이터 확인
console.log(mySet.has(10)); // true
console.log(mySet.has(100)); // false

// 데이터 삭제
if(mySet.has(10)) {
    mySet.delete(10);
    console.log(`삭제 완료!`);
}
else console.log(`데이터가 존재하지 않음`);

console.log(mySet); // Set(3) { '홍길동', { age: 20 }, [ 1, 2, 3 ] }

// 전체 삭제
mySet.clear();
console.log(mySet); // Set(0) {}

