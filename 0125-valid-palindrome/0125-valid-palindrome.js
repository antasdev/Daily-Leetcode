/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let sentence=s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reverse=sentence.split("").reverse().join("");
     return sentence===reverse;
};