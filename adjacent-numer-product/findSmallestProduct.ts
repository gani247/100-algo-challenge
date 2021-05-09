function findSmallestProduct(arr: number[]): number {
    let smallestProduct = arr[0] * arr[1];
    for (let i = 0; i < arr.length -1 ; i++) {
        const product = arr[i] * arr[i+1];

        smallestProduct = smallestProduct > product ? product : smallestProduct;  
    }
    return smallestProduct;
}

console.log(findSmallestProduct([1,2,-4,5,-1,9]))