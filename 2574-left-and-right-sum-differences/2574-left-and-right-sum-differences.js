/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalsum=0;
    for(let num of nums){
        totalsum+=num
    }
    let leftsum=0;
    let result=[];
    for(let i=0;i<nums.length;i++){
        let rightsum=totalsum-leftsum-nums[i];
        result.push(Math.abs(leftsum-rightsum));
        leftsum+=nums[i]
    }
    return result
};