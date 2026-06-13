/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const letters=new Set(sentence);
    return letters.size==26
};