import './Avatar.css';

// props = {
//     "img": 이미지 경로
//     "name": 이름
//     "age": 나이
// }
    // 구조 분해 할당 파라미터 인자 순서는 상관이 없다! ex) (age, img, name)
export default function Avatar({img, name, age}) {
    return (
        <div className="avatar-container">
            <img src= {img} className="avatar"/>
            <div>{name}, {age}</div>
        </div>
    );
}
