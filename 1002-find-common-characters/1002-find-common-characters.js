/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
let result = [];
    words = [...words];
    for (let char of words[0]) {
        let found = true;
        for (let i=1;i<words.length;i++) {
            if (!words[i].includes(char)) {
                found=false;
                break;
            }
        }
        if (found){
            result.push(char);
            for (let i=0;i <words.length;i++) {
                words[i]=words[i].replace(char, "");
            }
        }
    }
    return result;
};