import './Avatar.css';
import AvatarComponent from './AvatarComponent.jsx';
import { useState, useEffect } from "react";

export default function AppAvatar() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/avatar.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData))
            .catch(error => console.log(error))
    }, []);
    return (
        <ul>
            {list && list.map((item) =>
                <li>
                    <AvatarComponent
                        img={item.img}
                        name={item.name}
                        new={item.new}/>
                </li>
            )}
        </ul>
    );
}