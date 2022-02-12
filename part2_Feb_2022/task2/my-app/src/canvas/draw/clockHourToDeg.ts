function clockHourToDeg(hour: number): number {
    // 360 --- 12
    // x   --- hour
    return hour * 360 / 12;
}

export default clockHourToDeg;
