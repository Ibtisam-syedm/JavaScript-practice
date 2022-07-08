function getMaxSubSum(arr){
    let tempSum = 0, maxSum = 0;
    for(let value of arr){
        tempSum += value;
        maxSum = Math.max(maxSum,tempSum);
        if (tempSum < 0) tempSum = 0;
    }
    return maxSum;
}
