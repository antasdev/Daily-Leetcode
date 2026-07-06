/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result=nums.join("")
    let ans=[]
    
    for(let i=0;i<result.length;i++){
     ans.push(Number(result[i]))
    }
   return  ans
};