/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   let result=[];

   function flat(arr,d){
    for(let num of arr){
        if(Array.isArray(num)&&d>0){
        flat(num,d-1)
        }else{
            result.push(num)
        }
    }
   }
   flat(arr,n)
   return result
};