// 학생(Student) 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의
class Student {
    #name; 
    #age; 
    #address;
    constructor(name, age, address, nickName) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nickName = nickName;
    }

    // !!!set/get 함수 형식은 private 정의된 필드값에 한해서 생성한다.!!!
    get name() { return this.#name; };
    get age() { return this.#age; };
    get address() { return this.#address; };
    // get nickName() { return this.nickName; };

    set name(name) { this.#name = name };
    set age(age) { this.#age = age };
    set address(address) { this.#address = address };
    // set nickName(nickName) { this.nickName = nickName };

    // getName = () => this.#name;
    // getAge = () => this.#age;
    // getAddress = () => this.#address;
    // getNickname = () => this.nickName;

    // setName = (name) => this.#name = name;
    // setAge = (age) => this.#age = age;
    // setAddress = (address) => this.#address = address;
    // setNickname = (nickName) => this.nickName = nickName;


    info = () => console.log(`${this.nickName}`);
    infoAll = () => console.log(`${this.#name}, ${this.#age}, ${this.#address}, ${this.nickName}`);
}
const hyun = new Student('강현우', '24', '수원시', '한우');

// console.log(hyun.getName());
// console.log(hyun.getAge());
// console.log(hyun.getAddress());
// console.log(hyun.getNickname());
// console.log(`${hyun.getName()}\n${hyun.getAge()}\n${hyun.getAddress()}\n${hyun.getNickname()}`); // \n enter키와 동일한 줄바꿈
console.log(`${hyun.name}`); // 강현우 // get name() { return this.#name; };
hyun.name = '강우현';
console.log('----------');

hyun.info(); // 한우
hyun.infoAll(); // 강우현, 24, 수원시, 한우
console.log('----------');

// hyun.setName('강우현');
// hyun.setAddress('서울시');
// hyun.setAge('25');
// hyun.setNickname('누누');
hyun.infoAll();
