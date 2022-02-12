import React, { useEffect, useState } from 'react';
import './App.css';
import Canvas from './canvas/Canvas';

const App: React.FC = () => {
    const [angle, setAngle]: [number, Function] = useState(0);

    // useEffect(() => {
    //     let timerId = setInterval(() => {
    //         setIsColBlue(!isColBlue);
    //     }, 2000);
    //     return () => { clearInterval(timerId) };
    // })

    return (
        <div className="App">
            <Canvas angle={angle} />
        </div>
    );
}

export default App;
