/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords=0;
    for(let sentence of sentences ){
     const wordsCount=sentence.split(" ").length
     maxWords=Math.max(wordsCount,maxWords)
    }
    return maxWords
};