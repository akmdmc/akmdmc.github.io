/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
      if (i > k) return false;
      k = Math.max(k, i + nums[i]);
    }
    return true;
};

let nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));