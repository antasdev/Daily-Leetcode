/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
      piles.sort((a,b)=>a-b);
    let coins = 0;
    let index = piles.length-2;
    while (index>piles.length/3-1){
        coins +=piles[index];
        index -=2;
    }
    return coins;
};