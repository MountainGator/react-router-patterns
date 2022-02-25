import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Color from './color';
import Colors from './colors.js';
import { v4 as uuid } from 'uuid';
import Home from './home';

const ColorList = () => {    
    let myUuid = () => ( uuid() );
    const [formData, setFormData] = useState({backgroundColor: '#ffffff'});
    const [colorPicker, setColorPicker] = 
        useState(JSON.parse(localStorage.getItem('colors')) || 
        [
        {backgroundColor: 'red'}, 
        {backgroundColor: 'green'}, 
        {backgroundColor: 'blue'}
        ]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData.backgroundColor);
    }

    const addColor = (color) => {
        setColorPicker([...colorPicker, {backgroundColor: color}]);
    }

    const pathPicker = (c) => {
        let route = c.backgroundColor.slice(0,1) == '#' ? `/${c.backgroundColor.slice(1)}` : `/${c.backgroundColor}`;
        return route;
    }

    useEffect (() => (
        localStorage.setItem('colors', JSON.stringify(colorPicker))
    ), [colorPicker]);

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home colorPicker={colorPicker} pathPicker={pathPicker} />} />

                <Route 
                    key={myUuid()} 
                    path="/colors" 
                    element={
                        <Colors 
                        formData={formData} 
                        setFormData={setFormData} 
                        handleSubmit={handleSubmit} 
                        />
                    } 
                />

                {
                colorPicker.map(c => 
                    <Route 
                        key={myUuid()} 
                        path={pathPicker(c)}
                        element={<Color info={c} />} 
                    />)
                }

                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default ColorList;