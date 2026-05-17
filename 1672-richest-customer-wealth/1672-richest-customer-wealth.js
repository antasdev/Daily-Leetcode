/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum=0
    let max=-Infinity
    for(let num of accounts){
        for(let n of num){
          sum+=n
        }
       let val=sum
       sum=0;
      if(val>max){
        max=val
      }
    }
    return max
};