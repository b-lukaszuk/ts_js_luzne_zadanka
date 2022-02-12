import React, { useEffect, useRef } from 'react';
import drawBase from './draw/drawBase';
import drawCanvBck from './draw/drawCanvBcg';
import './Canvas.css';
import setCanvasDefaults from './draw/setCanvasDefaults';
import drawPendulum from './draw/drawPendulum';

interface Props {
    curHour: number,
}

const Canvas: React.FC<Props> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let curHour: number = props.curHour;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) { return undefined; }
        setCanvasDefaults(canvas);
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) { return undefined; }
        drawCanvBck(canvas, ctx, "lightgray");
        drawBase(canvas, ctx, canvas.height / 4);
        drawPendulum(canvas, ctx, canvas.height / 4, 200, curHour);
    }, [curHour])

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
