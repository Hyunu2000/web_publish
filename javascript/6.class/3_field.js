// class의 field는 생성자 함수에서 정의하는 값
// field에 접근 제어(Access control)를 정의 : private(#), public
class Fruit {
    //constructor
    #name; // 인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김
    constructor(name, color, emoji) {
        //fields
        this.#name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => console.log(`${this.#name}, ${this.color}, ${this.emoji}`)
}
const apple = new Fruit('apple', 'green', '🍏');
apple.display(); // apple, green, 🍏
console.log(apple.name); // undefined (name이 private field로 선언되었기 때문에)
console.log(apple.color); // green
console.log(apple.emoji); // 🍏

console.log('----------');
// 사번(#), 사원명, 부서명
// info() 메서드 호출시 모든 정보 출력
class Employee {
    #empno // private
    constructor(empno, ename, dept) {
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }
    
    info = () => console.log(`${this.ename}, ${this.dept}`);  
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);  
}

const kang = new Employee('1204', '강현우', '개발1팀');
kang.info(); // 강현우, 개발1팀 (일반 정보 사원명, 부서명만 출력) 
kang.infoAll(); // 1204, 강현우, 개발1팀 (모든 정보)