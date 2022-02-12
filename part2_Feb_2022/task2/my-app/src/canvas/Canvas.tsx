import React, { useEffect, useRef } from 'react';
import './Canvas.css';

interface Props {
    isColBlue: boolean,
}

const Canvas: React.FC<Props> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let isColBlue: boolean = props.isColBlue;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) { return undefined; }
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) { return undefined; }
        ctx.rect(0, 0, 100, 100);
        ctx.fillStyle = isColBlue ? "blue" : "red";
        ctx.fill();
    }, [isColBlue])

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
