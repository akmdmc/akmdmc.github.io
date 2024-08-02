/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
      k = k % nums.length;
      nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

//最大公约数
//4,2
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}