import drawCircle from './drawCircle';
import drawHline from './drawHline'

function drawBase(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
    height: number): void {
    const lineCol: string = "#303030";
    drawHline(canv, ctx, height, lineCol);
    drawCircle(canv, ctx, canv.width / 2, height, 10, "darkgray");
}

export default drawBase;
