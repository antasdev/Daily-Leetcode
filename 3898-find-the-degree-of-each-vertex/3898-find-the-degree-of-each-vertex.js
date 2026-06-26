/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const n = matrix.length;
    let ans=[]
     for (let i = 0; i < n; i++) {
         ans[i] = 0;
        for (let j = 0; j < n; j++) {
            ans[i] += matrix[i][j];
        }
    }
    return ans;
};