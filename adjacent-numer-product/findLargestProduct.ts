function findLargestProduct(arr: number[]): number {
    let largestProduct = arr[0] * arr[1];
    for (let i = 0; i < arr.length -1 ; i++) {
        const product = arr[i] * arr[i+1];

        largestProduct = largestProduct > product ? largestProduct : product;  
    }
    return largestProduct;
}

console.log(findLargestProduct([1,2,-4,5,-1,9]))