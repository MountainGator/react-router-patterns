import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import Dogs from './dogs';
import DogDetails from './dog-details';
import {v4 as uuid } from 'uuid';

function App({defaultProps}) {
  const { dogs } = defaultProps;
  // const { name } = useParams();

  // useEffect(() => {

  // })

  let myUuid = () => uuid();

  return (
    <BrowserRouter>
      <Routes>
        <Route key={myUuid} path="/" element={<Dogs list={dogs} />} />
        {dogs.map(n => 
          <Route key={myUuid} path={`/${n.name}`}
            element={
              <DogDetails
                key={myUuid}
                name={n.name} 
                age={n.age}
                src={n.src}
                facts={n.facts}
              />}
          />)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
