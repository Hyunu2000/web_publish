// text 배열을 입력 받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여
// 반환해 주세요.
const textFilter = (object) => {
    // return object.filter((text) => (text.length >= 3));
    return object.filter((text) => text.length >= 3);
}

function textFilter2(object) {
    return object.filter((text) => text.length >= 3);
}

let textArray = ['nodeJS', 'javascript', 're', 'ja'];
let result = textFilter(textArray);
console.log(result); // [ 'nodeJS', 'javascript' ]
console.log('-----------');

// 2. 숫자 배열을 입력 받아, 짝수, 홀수로 필터링하여 출력하는 함수를 생성해 주세요.
// 출력 되는 값들은 배열 객체에 담아 반환해 주세요.
const evenNumber = (array) => {
    return array.filter((number) => !(number % 2));
}
const oddNumber = (array) => {
    return array.filter((number) => number % 2)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenNumber(numbers)); // [ 2, 4, 6, 8 ]
console.log(oddNumber(numbers)); // [ 1, 3, 5, 7 ]
console.log('-----------');

// 3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를
// 조합하여 사번을 생성해 주세요.
// 사원의 아이디는 배열 객체로 입력 받고, 출력도 배열 형태로 출력해 주세요.
const createEmployeeNumber = (array) => {
    // return array.map((id) => { 
    //     let number = Math.trunc(Math.random() * 10000000);
    //     return id.concat('_', number);
    // }); {}이 있다면 반드시 return이 있어야함

    // 중복된 데이터 처리
    let array2 = new Set(array); // set으로 중복 데이터 처리
    // console.log(Array.from(array2)); 
    
    return Array.from(array2).map((id) => 
        id.concat('_', Math.trunc(Math.random() * 10000000)));
}

const employeeIds = ['hong', 'test', 'abcd', 'test1234', 'hong', 'test'];
const employeeNumbers = createEmployeeNumber(employeeIds);
console.log(employeeNumbers);
// [ 'hong_4132503', 'test_8181548', 'abcd_9462845', 'test1234_956279' ] 