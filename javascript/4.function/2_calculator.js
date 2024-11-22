// 계산기 기능 구현
function calculator(a, b, op) {
    a = parseInt(a);
    b = parseInt(b);
    switch(op) {
        case '+' : console.log(`sum = ${a + b}`);
        break;
        case '-' : console.log(`sum = ${a - b}`);
        break;
        case '*' : console.log(`sum = ${a * b}`);
        break;
        case '/' : console.log(`sum = ${a / b}`);
        break;
        case '%' : console.log(`sum = ${a % b}`);
        break;
        default : console.log('처리할 수 없는 연산자 입니다.');
    }
}

calculator(1, 2, '+'); // sum = 3
calculator(10, 2, '-'); // sum = 8
calculator(10, 2, '*'); // sum = 20
calculator(10, 2, '/'); // sum = 5
calculator(10, 2, '%'); // sum = 0