function addTwoNumbers(num: number): number{
    const intstr = num.toString().split('');
    
    return parseInt(intstr[0]) + parseInt(intstr[1]);
}

console.log(addTwoNumbers(12));
console.log(addTwoNumbers(21));