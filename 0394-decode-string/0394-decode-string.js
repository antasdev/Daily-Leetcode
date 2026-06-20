/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
   let stack=[];
    let currentStr="";
    let currentNum=0;
    for (let char of s) {
        if (!isNaN(char)) {
            currentNum=currentNum*10+Number(char);
        }
        else if (char==="[") {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr="";
            currentNum=0;
        }
        else if (char==="]") {
            let num=stack.pop();
            let prevStr=stack.pop();
            currentStr=prevStr+currentStr.repeat(num);
        }
        else {
            currentStr += char;
        }
    }
    return currentStr; 
};