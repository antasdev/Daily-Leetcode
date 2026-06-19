/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
   let increase=true;
   let decrease=true;
   for(let i=1;i<nums.length;i++){
    if(nums[i]>nums[i-1]){
        decrease=false
    }
    if(nums[i]<nums[i-1]){
        increase=false
    }
   }
   return increase|| decrease
};