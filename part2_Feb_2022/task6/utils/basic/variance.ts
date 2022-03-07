import getAvg from "./average";
import getSum from "./sum";

// length - 1, because we are calculating sample variance
function getVariance(nums: number[]): number {
    let mean: number = getAvg(nums);
    let devsSquared: number[] = nums.map(n => (n - mean) ** 2);
    return getSum(devsSquared) / (nums.length - 1);
}

export default getVariance;
