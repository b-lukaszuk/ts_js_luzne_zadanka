import getVariance from "./variance";

// it calculates sample standard deviation
function getStDev(nums: number[]): number {
    return Math.sqrt(getVariance(nums));
}

export default getStDev;
