import '../css/Avatar.css';

export default function AvatarImage({img}) {
    return (
        <img src={img} alt="Smith" className="avatar-img"/>
    );
}