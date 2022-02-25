import ColorSwatch from './color-swatch';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const Home = ({colorPicker, pathPicker }) => {
    return (
        <>   
            <div className='top'>
                <h1 className='title'>Welcome to the Color Factory!</h1>
                <Link  to="colors">Add a color</Link>
            </div>

            {colorPicker.map(c => 
                <Link 
                key={uuid()} 
                to={pathPicker(c)}
                >
                    <ColorSwatch style={c} info={c.backgroundColor} />
                </Link>)
            }
        </> 
    );
}

export default Home;