function allLongestStrings(strs: string[]): string[] {
    let longestStrings = [];
    let longestStrLength = 0;
    // find longest string length
    // push longest strings to longestStrings array

    strs.forEach(str => {
        longestStrLength = longestStrLength > str.length ? longestStrLength : str.length
    })
    
    strs.forEach(str => {
        if(str.length === longestStrLength) {
            longestStrings.push(str);
        }
    })

    return longestStrings;
}

console.log(allLongestStrings(["abc", "asdfsd"]))