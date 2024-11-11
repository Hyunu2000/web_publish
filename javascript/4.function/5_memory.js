// function의 데이터타입 ?? object
function add(a, b) {
    console.log(a + b);
}
// 실제로는 사용하지 않는 방식이다..
console.log(add);
let sum = add;
console.log(sum);
add(1, 3);
sum(1, 2);
console.log('----------');