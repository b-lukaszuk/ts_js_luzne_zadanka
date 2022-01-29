function getSum(nums: number[]): number {
    return nums.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
}

export default getSum;
