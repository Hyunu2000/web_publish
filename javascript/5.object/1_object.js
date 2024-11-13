// object는 다양한 타입의 데이터들을 저장하는 방식
// object literal : { property(key):value, property:value... }
// 학생 관리 프로그램 : 홍길동(name, age, address, gender), 홍길순, 강현우, 김철수...
// 학생 성적 관리 프로그램 : 강현우(name, kor, eng, math), ...
const obj = {   // obj의 주소 값은 재할당이 불가하다!!
    name : '강현우', 
    age : 24
}

// 1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);
console.log(obj.age, typeof obj.age);
console.log('----------');

// 2. name을 '우현강'으로 변경
obj.name = '우현강'; // property의 value값은 변경이 가능하다.
console.log(obj.name);
console.log('----------');

// 3. age를 삭제
delete obj.age; // property의 value값은 삭제가 가능하다.
console.log(obj);
console.log('----------');

