import React, { useEffect, useState } from 'react';
import './App.css';
import Canvas from './canvas/Canvas';

const App: React.FC = () => {
    const [curHour, setCurHour]: [number, Function] = useState(3);
    const [moveCW, setMoveCW]: [boolean, Function] = useState(true);

    const addOrSubtr = (num: number, shouldAdd: boolean): number => {
        return shouldAdd ? num + 0.25 : num - 0.25;
    }

    // get next hour of analogue clock pointed by the pendulum
    const getNextHour = (curHour: number): number => {
        // interesting, rendering is kind of delayed by one frame
        // i.e. when App.tsx hour = 8, then Canvas.tsx hour = 9
        // not sure why
        if (curHour >= 8.75) { setMoveCW(false) }
        if (curHour <= 3.25) { setMoveCW(true) }
        return addOrSubtr(curHour, moveCW);
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurHour(getNextHour(curHour));
        }, 100);
        return () => { clearInterval(timerId) };
    })

    return (
        <div className="App">
            <Canvas curHour={curHour} />
        </div>
    );
}

export default App;
