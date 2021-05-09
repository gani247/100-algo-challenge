function almostIncreasingSequence(numbers: number[]) {
    let count = 0;
    let prev = -Infinity;

    for (let i=0; i<numbers.length; i++) {
        if(count == 2 ) return false
        if (numbers[i] > prev) {
            prev = numbers[i];
        } else {
            //prev = numbers[i];
            count++;
        }
    }

    return count < 2;
}

console.log(almostIncreasingSequence([1,2,3,2,1]))
console.log(almostIncreasingSequence([1,2,3,2]))
console.log(almostIncreasingSequence([3, 5, 67, 98, 3, 56]))
console.log(almostIncreasingSequence([4, 3, 5, 67, 98, 3]));