import React, { useRef } from 'react';
import './Canvas.css';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
