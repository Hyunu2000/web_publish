// 기본(원시) 데이터타입(Primitive DataType) - number, string, boolean
// 기본 데이터타입을 클래스로 정의한 것을 wrapper 클래스라 함

/** Number class */
let a = "123";
if(typeof a === "string") a = parseInt(a);
if(a === 123) console.log(a); // 123

if(Number("123") === 123)console.log(`a => ${a}`); // a => 123

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(maxValue); // 1.7976931348623157e+308
console.log(minValue); // 5e-324

let x = 100;
let y = new Number(100); 
console.log(typeof x); // number
console.log(typeof y); // object
console.log(x === y); // false (x는 콜스택의 넘버타입 y는 힙메모리의 주소를 가진 오브젝트타입)
console.log(x === y.valueOf()); // true

/** String class + template literal(``) */
let str = "hello~";
let str2 = new String("hello~");
console.log(typeof str); // string
console.log(typeof str2); // object
console.log(str === str2); // false
console.log(str === str2.valueOf()); // true

/** Boolean class */
let flag = true;
let flag2 = new Boolean(true);
console.log(typeof flag); // boolean
console.log(typeof flag2); // object
console.log(flag === flag2.valueOf()); // true