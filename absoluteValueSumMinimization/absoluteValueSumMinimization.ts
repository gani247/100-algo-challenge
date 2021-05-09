function absoluteValueSumMinimization(arr: number[]) {
    const res = [];

    arr.forEach(num => {
        const sum = arr.reduce((accum, next) => {
            return accum + Math.abs (next - num)
        }, 0);
        res.push(sum)
    })
    console.log(...res)
    const lowest = Math.min(...res);
    console.log(lowest);
    return arr[res.indexOf(lowest)]
}
console.log(absoluteValueSumMinimization([2,4,7]));
console.log(absoluteValueSumMinimization([2,4,5,7,8]));
console.log(absoluteValueSumMinimization([1,2,4,3,3,5,3]));