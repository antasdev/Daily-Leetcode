/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies=Math.max(...candies);

    const result=[];
    for (let candy of candies) {
        result.push(candy+extraCandies>=maxCandies);
    }
    return result;
};