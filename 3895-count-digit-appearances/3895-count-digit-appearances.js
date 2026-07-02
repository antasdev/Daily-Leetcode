/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count=0;
    for (let num of nums) {
        if (num===0) {
            if (digit===0) {
                count++;
            }
            continue;
        }
        while(num>0){
            let d=num%10;

            if (d===digit) {
                count++;
            }
            num=Math.floor(num/10);
        }
    }
    return count;
};