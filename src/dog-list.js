import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const DogList = ({list}) => {
    return (
        <nav className='navbar'>
            {list.map((n) => <NavLink key={uuid()} to={`/${n.name}`}>{n.name}</NavLink>)}
        </nav>
    )
}

export default DogList;