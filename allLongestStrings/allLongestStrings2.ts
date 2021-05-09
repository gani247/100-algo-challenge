function allLongestStrings2(strs: string[]): string[] {
    let longestStrings = [];
    let longestStrLength = 0;
    // find longest string length
    // push longest strings to longestStrings array

    strs.forEach(str => {
        if ( longestStrLength < str.length ) {
            longestStrLength = str.length;
            longestStrings = []
            longestStrings.push(str);
        }else if ( longestStrLength === str.length ) {
            longestStrings.push(str);
        } 
    })

    console.log('longestStrLength:', longestStrLength)
    
    return longestStrings;
}

console.log(allLongestStrings2(["abc", "asdfsd"]))