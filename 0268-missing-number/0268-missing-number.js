/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n=nums.length;

    const expSum=(n*(n+1))/2;
    let actSum=0;
    for(let num of nums){
        actSum+=num
    }
    return expSum-actSum
};