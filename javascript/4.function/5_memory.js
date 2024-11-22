// function의 데이터타입 --> object
function add(a, b) {
    console.log(a + b); // [Function: add]
}

//  console.log(add) 실제로는 잘 사용하지 않는 방식이다
console.log(add); // [Function: add]
let sum = add; // call by reference
console.log(sum);
add(1, 3); // 4
sum(1, 2); // 3
