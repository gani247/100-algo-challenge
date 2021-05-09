function absoluteValueSumMinimization1(a: number[]) {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 -1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValueSumMinimization1([1,2,4]));