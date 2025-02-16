// 클래스 간의 상속관계
// E 동물원에서 동물관리 프로그램을 생성
// 흰색 사자, 회색 사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스
// Lion 클래스 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal
// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display, sleep, eat
class Animal { // 자식마다 부모가 하나씩 생성 자식이 삭제되면 부모도 삭제
    constructor(name, color, emoji, taste) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    display = () => console.log(`${this.name}, ${this.emoji}`);
    sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    eat = () => console.log(`${this.name} 가(이) 먹는다.`);
}
//** Lion class */
class Lion extends Animal { // Lion 클래스는 Animal 클래스의 자식이다!
    constructor(name, color, emoji, taste) {
        super(name, color, emoji, taste); // super는 항상 맨위에 위치해야 한다.
    }
}

// Tiger 클래스 속성 : name, color, emoji, taste(식성), age
// 메소드 : display(이모지), sleep, eat
//** Tiger class */
class Tiger extends Animal {
    constructor(name, color, emoji, taste, age) {
        super(name, color, emoji, taste);
        this.age = age;
    }
    getAge = () => console.log(this.age);
}

// Dog 클래스 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat
//** Dog class */
class Dog extends Animal {
    constructor(name, color, emoji, taste, type) {
        super(name, color, emoji, taste);
        this.type = type;
    }
    getType = () => console.log(this.type);
}

/**
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, #동물의 객체(Lion, Tiger, Dog)
 * 메소드 : setter/getter
 */
class EverZoo {
    static LION = 1;
    static Tiger = 2;
    static Dog = 3;
    #type;
    #animal;
    constructor(type, animal) {
        this.#type = type;
        this.#animal = animal;
    }
    get type() { return this.#type };
    get animal() { return this.#animal };

    set type(type) { this.#type = type; }
    set animal(animal) { this.#animal = animal; }

}


// 클래스 생성 및 호출
const tom = new Lion('tom', 'white', '🦁', 'meat');
const smith = new Tiger('smith', 'gray', '🐯', 'meat', 3);
const judy = new Dog('judy', 'white', '🐶', 'meat', '푸들');

tom.display(); tom.sleep(); tom.eat();
/*  tom, 🦁
    tom 가(이) 잔다.
    tom 가(이) 먹는다. */
smith.display(); smith.sleep(); smith.eat(); smith.getAge();
/*  smith, 🐯
    smith 가(이) 잔다.
    smith 가(이) 먹는다.
    3 */
judy.display(); judy.sleep(); judy.eat(); judy.getType();
/*  judy, 🐶
    judy 가(이) 잔다.
    judy 가(이) 먹는다.
    푸들 */
const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);
/*  1 Lion {
    display: [Function: display],
    sleep: [Function: sleep],
    eat: [Function: eat],
    name: 'tom',
    color: 'white',
    emoji: '🦁',
    taste: 'meat'
} */
