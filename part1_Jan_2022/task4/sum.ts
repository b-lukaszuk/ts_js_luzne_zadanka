function getSum(nums: number[]): number {
    return nums.reduce((acc, curVal) => {
        return acc + curVal;
    })
}

export default getSum;
