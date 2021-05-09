function addNumbers(num: number): number{
    const intstr = num.toString().split('');

    let sum = 0;
    
    intstr.forEach(i => sum += parseInt(i) )
    
    return sum;
}

console.log(addNumbers(12));
console.log(addNumbers(213));