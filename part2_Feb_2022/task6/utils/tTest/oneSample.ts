import getAvg from "../basic/average";
import getStDev from "../basic/stDev";

function getTStat(nums: number[], mu: number = 0): number {
    let numerator: number = getAvg(nums) - mu;
    let denominator: number = getStDev(nums) / Math.sqrt(nums.length);
    return numerator / denominator;
}

export { getTStat };
