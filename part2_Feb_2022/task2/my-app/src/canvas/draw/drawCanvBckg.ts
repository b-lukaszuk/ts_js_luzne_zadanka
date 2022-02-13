function drawCanvBckg(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
    col: string): void {

    ctx.fillStyle = col;
    ctx.fillRect(0, 0, canv.width, canv.height);
}

export default drawCanvBckg;
