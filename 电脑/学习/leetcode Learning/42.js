/**
 * @param {number[]} height
 * @return {number}
 */

const Direction = {
  LEFT: false,
  RIGHT: true
};

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        result += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        result += rightMax - height[right];
      }
      right--;
    }
  }

  return result;
};

let height = [4,2,0,3,2,5];
console.log(trap(height));