// Map 클래스 생성
const fList = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
console.log(fList); // Map(2) { 1 => 'one', 2 => 'two' }
console.log(fList.get(1)); // one
console.log(fList.get(2)); // two

// 사이즈 확인
console.log(`size ==> ${fList.size}`); // size ==> 2

// 데이터 추가
fList.set(3, 'three');
// fList.set([[4, 'four'], [5, 'five']]); // set은 key, vauvale

console.log(fList); // Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// 데이터 확인
if(fList.has(3)) console.log(fList.get(3)); // three

// 모든 키값 출력
console.log(fList.keys()); // [Map Iterator] { 1, 2, 3 }

// 모든 value 출력
console.log(fList.values()); // [Map Iterator] { 'one', 'two', 'three' }

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);
// [Map Entries] { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }

// console.log(iteratorObj.next());
// { value: [ 1, 'one' ], done: false }
console.log(iteratorObj.next().value);
// [ 1, 'one' ]

// 순회 : forEach value가 먼저 출력된다. 받을 수 있는 인자는 value, key, map 3개 뿐
fList.forEach((element) => console.log(element));
fList.forEach((value, key, map) => 
    console.log(value, key, map)); 
/*
one 1 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
two 2 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
three 3 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
*/

// 순회 : for...of
// [key, value]
for(let element of fList) console.log(element);

// key만 출력
for(let key of fList.keys()) console.log(`key => ${key}`); // key => 1

// value만 출력
for(let value of fList.values()) console.log(`value => ${value}`); // value => one

// entries
for(let entry of fList.entries()) console.log(`entry => ${entry}`); // entry => 1,one

// for(let entry of fList.entries()) console.log(`entry => ${entry.value()}`); // 사용불가

// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList); // Map(2) { 2 => 'two', 3 => 'three' }

// 전체 삭제
fList.clear();
console.log(fList); // Map(0) {}