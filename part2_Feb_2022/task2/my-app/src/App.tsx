import React, { useEffect, useState } from 'react';
import './App.css';
import Canvas from './canvas/Canvas';

const App: React.FC = () => {
    const [curHour, setCurHour]: [number, Function] = useState(3);
    const [moveCW, setMoveCW]: [boolean, Function] = useState(true);

    const addOrSubtr = (num: number, shouldAdd: boolean): number => {
        return shouldAdd ? num + 1 : num - 1;
    }

    // get next hour of analogue clock pointed by the pendulum
    const getNextHour = (curHour: number): number => {
        if (curHour === 9) { setMoveCW(false) }
        if (curHour === 3) { setMoveCW(true) }
        return addOrSubtr(curHour, moveCW);
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurHour(getNextHour(curHour));
            console.log("hour:", curHour);
        }, 5000);
        return () => { clearInterval(timerId) };
    })

    return (
        <div className="App">
            <Canvas curHour={curHour} />
        </div>
    );
}

export default App;
