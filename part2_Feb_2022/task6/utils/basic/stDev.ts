import getVariance from "./variance";

// it is sample standard deviation
function getStDev(nums: number[]): number {
    return Math.sqrt(getVariance(nums));
}

export default getStDev;
