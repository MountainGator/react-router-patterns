import { useNavigate } from 'react-router-dom';
import {v4 as uuid } from 'uuid';


const DogDetails = ({ name, age, src, facts }) => {
    const navigate = useNavigate();

    return (
        <div className='details'>
            <img src={src} alt={name} />
            <h2>{name}</h2>
            <h3>Age: {age}</h3>
            <ul>
                {facts.map(f => <li key={uuid()}>{f}</li>)}
            </ul>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default DogDetails;