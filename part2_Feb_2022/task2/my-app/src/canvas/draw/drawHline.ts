function drawHline(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
    height: number, col: string): void {

    ctx.beginPath();
    ctx.strokeStyle = col;
    ctx.lineWidth = 1;
    ctx.moveTo(0, height);
    ctx.lineTo(canv.width, height);
    ctx.stroke();
}

export default drawHline;
