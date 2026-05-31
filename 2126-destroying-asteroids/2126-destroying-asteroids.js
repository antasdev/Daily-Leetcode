/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b)
    let currentMass=BigInt(mass)
    for(let ast of asteroids){
        if(currentMass<BigInt(ast)){
            return false
        }
        currentMass+=BigInt(ast)
    }
    return true
};