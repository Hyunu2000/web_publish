// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함!!
class Fruit {
    static MAX_SIZE = 100;

    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    
    static getMax_Size = () => this.MAX_SIZE;
    static makeFruit = () => {
        return new Fruit('orange', 'coral', '🍊');
    }
    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();
let orange = Fruit.makeFruit();
console.log(orange);
orange.display();

console.log(Fruit.getMax_Size());

// apple.makeFruit();   // static 메모리 공간에 별도로 저장된다.


console.log('-----------');
class Student {
    static schoolName = 'Dj School';
    static totalStudents = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Student.totalStudents++;
    }

    static getSchoolInfo() {
        return `${Student.schoolName}에는 ${Student.totalStudents}명의 학생이 있다.`
    }

}

const kang = new Student('강현우', '24');
const hyun = new Student('강우현', '30');
console.log(Student.getSchoolInfo());

