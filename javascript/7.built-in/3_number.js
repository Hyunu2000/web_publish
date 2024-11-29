// Number 클래스들의 메소드
// Number객체.valueof()
let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b); // number object
console.log(a === b.valueOf()); // true

// Number객체.toLocalString() 10000 => 10,000
// 3자리씩 끊어서 쉼표로 구분 
let num = 123000;
let num2 = new Number(324324234);
console.log(num.toLocaleString()); // 123,000 3자리씩 끊어서 많이씀
console.log(num2.toLocaleString()); // 324,324,234

// MAX_VALUE, MIN_VALUE... => Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
let num3 = 123.45;
console.log(num3.toFixed()); // 123 (정수로 반올림)






