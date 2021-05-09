function add2(param1: number, param2: number): number {
    return param1 + param2;
}

function addAll(...params: number[]): number {
    let sum = 0;
    console.log(params)
    params.forEach(element => {
        sum += element
    });
    return sum;
}

console.log(add2(1, 2));
console.log(addAll(1, 2, -1, 3, 4, -2));