/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left=0
    let right=x;
    let ans=0
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let square=mid*mid;
        if(square===x){
           return mid;
        }
        if(square<x){
            ans=mid
         left=mid+1
        }
        if(square>x){
            right=mid-1
        }
    }
    return ans
};