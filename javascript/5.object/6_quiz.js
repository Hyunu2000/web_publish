// 객체 생성자 함수 - 객체 모델링(반려동물, 동물병원)
// dog, cat, rabbit ...의 개체 생성자 함수를 정의하고, 호출해 보세요.
// 속성(Attribute, property) : name, color
// 메소드(Method) : display('🐶'), eat('🐶 먹는다.'), sleep('🐶 자요~')
function Animal(emoji, color) {
    // field
    this.emoji = emoji;
    this.color = color;
    // method
    this.display = () => console.log(this.emoji)
    this.eat = () => console.log(`${this.emoji} 먹는다.`)
    this.sleep = () => console.log(`${this.emoji} 자요~~`)
}
const dog = new Animal('🐶','brown');
const cat = new Animal('🐱', 'yellow');
const rabbit = new Animal('🐰', 'gray', );

dog.display(); // 🐶 
dog.eat(); // 🐶 먹는다.
dog.sleep(); // 🐶 자요~~

cat.display(); // 🐱
cat.eat(); // 🐱 먹는다.
cat.sleep(); // 🐱 자요~~

rabbit.display(); // 🐰
rabbit.eat(); // 🐰 먹는다.
rabbit.sleep(); // 🐰 자요~~

