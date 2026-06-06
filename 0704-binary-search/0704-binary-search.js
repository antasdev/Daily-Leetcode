/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function helper(left,right){
        if (left>right) return -1;
        let mid = Math.floor((left + right)/2);
        if (nums[mid]===target) return mid;
        if (target<nums[mid]){
            return helper(left,mid - 1);
        }
        return helper(mid + 1,right);
    }
    return helper(0, nums.length - 1);
};