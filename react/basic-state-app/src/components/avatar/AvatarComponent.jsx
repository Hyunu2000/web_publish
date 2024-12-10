export default function AvatarComponent(props) {
    return (
        <div className="container">
                <img className="images" src={props.img} />
                {props.new && <span className="new">NEW</span>}
                <p>{props.name}</p>
        </div>
    );
}