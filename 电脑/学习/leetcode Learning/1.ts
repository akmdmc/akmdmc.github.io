function removeDuplicates(nums: number[]): number {
    nums = [...new Set(nums)];
    console.log(nums);
    
  return nums.length;
};
