/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    function calc(start1, dur1, start2, dur2) {
        let minEnd = Infinity;
        for (let i = 0; i < start1.length; i++) {
            minEnd = Math.min(minEnd, start1[i] + dur1[i]);
        }
        let ans = Infinity;
        for (let i = 0; i < start2.length; i++) {
            ans = Math.min(
                ans,
                Math.max(minEnd, start2[i]) + dur2[i]
            );
        }

        return ans;
    }
    const landThenWater = calc(
        landStartTime,
        landDuration,
        waterStartTime,
        waterDuration
    );
    const waterThenLand = calc(
        waterStartTime,
        waterDuration,
        landStartTime,
        landDuration
    );
    return Math.min(landThenWater, waterThenLand);
};