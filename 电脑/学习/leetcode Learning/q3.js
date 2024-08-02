/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let len = ratings.length;
  let left = new Array(len).fill(1);
  let right = new Array(len).fill(1);
  let sum = 0;
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }
  for (let i = 0; i < len; i++) {
    sum += Math.max(left[i], right[i]);
  }
  return sum;
};