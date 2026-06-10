/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
     function buildString(str) {
        const stack = [];

        for (let char of str) {
            if (char==="#") {
                stack.pop();
            }else{
                stack.push(char);
            }
        }
        return stack.join("");
    }
    return buildString(s)===buildString(t);
};