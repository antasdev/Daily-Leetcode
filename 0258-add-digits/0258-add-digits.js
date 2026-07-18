/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
 while (num>=10){
        let sum=0;
        let str=num.toString();

        for (let digit of str){
            sum+=Number(digit);
        }

        num=sum;
    }
    return num;
};