/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let score = 0;

    while (n>0){
        score+=n%10;
        n=Math.floor(n/10);
    }
    return score;
};