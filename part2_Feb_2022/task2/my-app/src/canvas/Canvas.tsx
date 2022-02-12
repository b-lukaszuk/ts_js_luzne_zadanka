import React, { useEffect, useRef } from 'react';
import './Canvas.css';

interface Props {
    isColBlue: boolean,
}

const Canvas: React.FC<Props> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let isColBlue: boolean = props.isColBlue;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) { return undefined; }
        const context = canvas.getContext("2d");
        if (context === null) { return undefined; }
        context.rect(0, 0, 100, 100);
        context.fillStyle = isColBlue ? "blue" : "red";
        context.fill();
    }, [isColBlue])

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
