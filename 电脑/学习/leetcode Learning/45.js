/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  function jumpNext(now,nextMaxSteps){
    if(now >= nums.length-1) return 0;
    let min = Infinity;
    for(let i = 1; i <= nums[now]; i++){
      if(i > nextMaxSteps) break;
      min = Math.min(min,1+jumpNext(now+i,nums[now]));
    }
    return min;
  }
  return jumpNext(0,nums[0]);
};

let nums = [2,3,1,1,4];
console.log(jump(nums));