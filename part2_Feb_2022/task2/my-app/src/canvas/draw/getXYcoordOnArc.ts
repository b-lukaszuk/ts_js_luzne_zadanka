import degToRad from "./degToRad";

// https://math.stackexchange.com/questions/260096/find-the-coordinates-of-a-point-on-a-circle
// returns [Int, Int], XY coordinates on an Arc
function getXYcoordOnArc(angleDeg: number, radius: number,
    xMid: number, yMid: number): number[] {

    let newX = radius * Math.sin(degToRad(angleDeg));
    let newY = radius * Math.cos(degToRad(angleDeg))
    // in the link above the middle of coord system is in the point (0, 0)
    // here (canvas) the point (0, 0) is top left corner,
    // so we need to make some adjustments
    newX = newX + xMid;
    newY = yMid - newY;
    return [newX, newY];
}

export default getXYcoordOnArc;
