function alphabeticShift(alphabetSeq: string): string {
    const alphabetSeqArr = alphabetSeq.split('')
    
    let shiftedSeq = ""
    const alphaMap = {'a':'b', 'b':'c', 'c':'d',
    'd': 'e', 'e':'f', 'f':'g', 'g':'h', 'h':'i', 'i':'j', 'j':'k', 'k':'l', 'l':'m',
    'm':'n', 'n':'o', 'o':'p', 'p':'q', 'q':'r','r':'s','s':'t', 't':'u','u':'v','v':'w',
    'w':'x','x':'y','y':'z'}

    alphabetSeqArr.forEach(a => {
        
        let letter = 'a';
        if(a != 'z') letter = alphaMap[a]
        shiftedSeq = shiftedSeq.concat(letter)
    });

    return shiftedSeq;
}
let alphabetSeq = "crazy"
console.log(alphabeticShift(alphabetSeq))
alphabetSeq = "alphabet"
console.log(alphabeticShift(alphabetSeq))
alphabetSeq = "javascript"
console.log(alphabeticShift(alphabetSeq))