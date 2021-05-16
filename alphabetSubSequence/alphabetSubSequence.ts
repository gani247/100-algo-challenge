function alphabetSubSequence(seq: string): boolean {
    
    let seqArr: string[] = seq.split('');
    let seqValArr: number[] = [];

    seqArr.forEach(c => seqValArr.push(c.charCodeAt(0)));

    if(new Set(seqValArr).size != seqValArr.length)
        return false;
    
    for( let i =0; i< seqValArr.length-1; i++){
        if(seqValArr[i] < seqValArr[i-1]) // compare current char with prev char 
            return false
    }
    

    return true;
}

console.log(alphabetSubSequence('abz'))