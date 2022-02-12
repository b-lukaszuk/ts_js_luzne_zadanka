function drawCanvBck(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
    col: string) {
    ctx.fillStyle = col;
    ctx.fillRect(0, 0, canv.width, canv.height);
}

export default drawCanvBck;
