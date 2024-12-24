// iterable(이터러블) object = Iteration Protocol : 순회를 위한 규칙, 조약
// for...of, ...(Spread:전개구문), 구조분해할당(destructing object)
// String, Array, Map, Set ...

// "Hello~ JavaScript~!!!!"
const text = new String("Hello~ JavaScript~!!!!");
for(let element of text) {
    console.log(`element = ${element}`);    
}
/*
element = H
element = e
element = l
element = l
element = o
element = ~
element =
element = J
element = a
element = v
element = a
element = S
element = c
element = r
element = i
element = p
element = t
element = ~
element = !
element = !
element = !
element = !
*/

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for(let number of numbers) {
    console.log(`number = ${number}`);
}
/*
number = 1
number = 2
number = 3
number = 4
number = 5
*/

// number 클래스 생성 및 실행
const numberClass = new Number(12345);
// for( n of numberClass) console.log(n);
// TypeError: numberClass is not iterable