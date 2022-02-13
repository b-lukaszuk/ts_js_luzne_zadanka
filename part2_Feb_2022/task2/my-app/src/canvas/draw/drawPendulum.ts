import clockHourToDeg from "./clockHourToDeg";
import drawCircle from "./drawCircle";
import getXYcoordOnArc from "./getXYcoordOnArc";

function drawPendulum(canv: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    startHeight: number,
    lenght: number,
    hourInAnalogueClock: number): void {

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.moveTo(canv.width / 2, startHeight);
    let [xEnd, yEnd] = getXYcoordOnArc(clockHourToDeg(hourInAnalogueClock),
        lenght, canv.width / 2, startHeight);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    drawCircle(ctx, xEnd, yEnd, 15, "yellow");
}

export default drawPendulum;
