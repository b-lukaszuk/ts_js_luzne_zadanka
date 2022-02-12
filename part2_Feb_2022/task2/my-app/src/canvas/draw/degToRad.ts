function degToRad(degrees: number): number {
    // 1 rad = 180st/pi = 57.296st
    let radians = degrees / (180 / Math.PI);
    return radians;
}

export default degToRad;
