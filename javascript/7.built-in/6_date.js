// 날짜형식 - Date 클래스
console.log(Date.now());
console.log(new Date());

let date = new Date(); // 현재 사용하는 시스템의 날짜를 객체 생성
console.log(date.getFullYear()); // 2024
console.log(date.getMonth() + 1); // 11
console.log(date.getDate()); // 29

let year = date.getFullYear().toString(); 
let month = date.getMonth() + 1; 
let day = date.getDate(); 
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// '2024년 11월 15일' => String.concat()
let display = year.concat("년 ", month, "월 ", day, "일");
console.log(display); // 2024년 11월 29일

// '2024년 11월 15일' => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
console.log(display); // 2024년 11월 29일 16시 56분 10초

// 날짜 출력 타입 지정
console.log(date.toLocaleString('ko-KR')); // 2024. 11. 29. 오후 4:56:10 (시스템 기반 언어) 
console.log(date.toLocaleString('en-US')); // 11/29/2024, 4:56:10 PM (뒤에는 대문자)

console.log(date.toLocaleDateString('ko-KR')); // 2024. 11. 29. (날짜만 출력)
console.log(date.toLocaleDateString('en-US')); // 11/29/2024
