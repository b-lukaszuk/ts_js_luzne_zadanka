import getSum from "./sum";

function getAvg(nums: number[]): number {
    return getSum(nums) / nums.length;
}

export default getAvg;
