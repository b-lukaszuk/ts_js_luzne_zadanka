function getSum(nums: number[]): number {
    return nums.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
}

export default getSum;
