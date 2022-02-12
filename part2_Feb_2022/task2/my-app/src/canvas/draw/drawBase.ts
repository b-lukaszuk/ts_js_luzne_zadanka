import drawCircle from './drawCircle';
import drawHline from './drawHline'

function drawBase(canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    const lineCol: string = "#303030";
    drawHline(canv, ctx, canv.height / 4, lineCol);
    drawCircle(canv, ctx, canv.width / 2, canv.height / 4, 10, "darkgray");

}

export default drawBase;
