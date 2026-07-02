/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let set=new Set(allowed);
    let count=0;

    for (let word of words){
        let valid=true;

        for (let char of word){
            if (!set.has(char)){
                valid=false;
                break;
            }
        }

        if (valid){
            count++;
        }
    }
    return count;
};