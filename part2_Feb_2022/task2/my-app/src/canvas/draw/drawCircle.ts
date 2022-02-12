import degToRad from './degToRad';

function drawCircle(canv: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    xMid: number, yMid: number, radius: number, col: string) {

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(xMid, yMid, radius, 0, degToRad(360));
    ctx.stroke()
    ctx.fill();
}

export default drawCircle;
