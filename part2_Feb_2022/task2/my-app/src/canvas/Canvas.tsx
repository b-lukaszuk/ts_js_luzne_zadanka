import React, { useEffect, useRef } from 'react';
import './Canvas.css';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let colBlue: boolean = true;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) { return undefined; }
        const context = canvas.getContext("2d");
        if (context === null) { return undefined; }
        context.rect(0, 0, 100, 100);
        context.fillStyle = colBlue ? "blue" : "red";
        context.fill();
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
