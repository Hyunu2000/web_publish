import Avatar from './Avatar.jsx';

export default function AvatarList({list}) {
    return (
        <ul className='list-style'>
            {list.map(item => <li><Avatar img={item.img} name={item.name}/></li>)}
        </ul>        
    );
}