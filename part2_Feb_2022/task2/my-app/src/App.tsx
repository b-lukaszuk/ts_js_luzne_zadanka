import React, { useEffect, useState } from 'react';
import './App.css';
import Canvas from './canvas/Canvas';

const App: React.FC = () => {
    const [isColBlue, setIsColBlue]: [boolean, Function] = useState(true);

    useEffect(() => {
        let timerId = setInterval(() => {
            setIsColBlue(!isColBlue);
        }, 2000);
        return () => { clearInterval(timerId) };
    })

    return (
        <div className="App">
            <Canvas isColBlue={isColBlue} />
        </div>
    );
}

export default App;
