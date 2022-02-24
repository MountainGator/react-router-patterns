import DogList from './dog-list';
import DogOverview from './dog-overview';
import { v4 as uuid } from 'uuid';

const Dogs = ({list}) => {
    return (
        <div className='container'>
            <DogList list={list} />
            {list.map(n => <DogOverview key={uuid()} info={n} />)}
        </div>
    )
}

export default Dogs;