/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let sCount = {};
    let targetCount = {};

    for (let ch of s) {
        sCount[ch]=(sCount[ch]||0)+1;
    }

    for (let ch of target) {
        targetCount[ch]=(targetCount[ch] || 0)+1;
    }

    let answer=1000;

    for (let ch in targetCount) {
        answer=Math.min(
            answer,
            Math.floor((sCount[ch]||0)/ targetCount[ch])
        );
    }
    return answer;
};