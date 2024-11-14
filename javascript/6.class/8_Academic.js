// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모클래스 (name, age, address)
class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) { // 자식의 클래스 생성자 함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name() { return this.#name; }
    get age() { return this.#age; }
    get address() { return this.#address; }
}
class Student extends Member {
    #sno; // 학번
    constructor(sno, name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }
    get sno() { return this.#sno; }
}
/** Professor class */
class Professor extends Member {
    #subject; // 강의과목
    constructor(name, age, address, subject) {
        super(name, age, address)
        this.#subject = subject;
    }
    get subject() { return this.#subject; }
}
/** Parent class */
class Parent extends Member {
    #cname; // 자녀명
    constructor(name, age, address, cname) {
        super(name, age, address)
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
}
/** Employee class */
class Employee extends Member {
    #department; // 소속부서
    constructor(name, age, address, department) {
        super(name, age, address)
        this.#department = department;
    }
    get department() { return this.#department; }
}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type = document.querySelector("input[type=radio]:checked");
    let sno = document.querySelector("#sno");
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");
    let cname = '';
    let department = '';

    // type에 따라서 각각의 클래스 생성
    let member = null;
    switch(type.value) {
        case '1': member = new Student(sno.value, name.value, age.value, address.value); break;
        case '2': member = new Professor(name, age, address, subject); break;
        case '3': member = new Parent(name, age, address, cname); break;
        case '4': member = new Employee(name, age, address, department); break;
        default : 
    }

    console.log(member);

}// end of SignupCheck


// display
const display = (type) => {

    if(type === '1') {
        document.querySelector("#student").Style.display = 'block';
        document.querySelector("#professor").style.display = 'none';
        document.querySelector("#parent").style.display = 'none';
        document.querySelector("#employee").style.display = 'none';
    } else if(type === '2') {
        document.querySelector("#professor").style.display = 'block';
        document.querySelector("#student").Style.display = 'none';
        document.querySelector("#parent").style.display = 'none';
        document.querySelector("#employee").style.display = 'none';
    } else if(type === '3') {
        document.querySelector("#parent").style.display = 'block';
        document.querySelector("#professor").style.display = 'none';
        document.querySelector("#student").Style.display = 'none';
        document.querySelector("#employee").style.display = 'none';
    } else if(type === '4') {
        document.querySelector("#employee").style.display = 'block';
        document.querySelector("#professor").style.display = 'none';
        document.querySelector("#student").Style.display = 'none';
        document.querySelector("#parent").style.display = 'none';
    }
}       








/*
const kang = new Student('1204', '강현우', '24', '수원시 권선구'); // 학생
const smith = new Professor('smith', '40', '서울시 서초구', 'javaScript')//교수
const kangP = new Parent('강강강', '50', '수원시 권선구', '강현우'); // 학부모
const lee = new Employee('이철수', '30', '부산시 해운대구', '개발1팀'); // 직원

console.log('*** 학생 정보 ***');
console.log(`학번: ${kang.sno}\n이름: ${kang.name}\n나이: ${kang.age}\n주소: ${kang.address}`);

console.log('*** 교수 정보 ***');
console.log(`이름: ${smith.name}\n나이: ${smith.age}\n주소: ${smith.address}\n강의과목: ${smith.subject}`);

console.log('*** 학부모 정보 ***');
console.log(`이름: ${kangP.name}\n나이: ${kangP.age}\n주소: ${kangP.address}\n자녀명: ${kangP.cname}`);

console.log('*** 직원 정보 ***');
console.log(`이름: ${lee.name}\n나이: ${lee.age}\n주소: ${lee.address}\n소속부서: ${lee.department}`);
*/
