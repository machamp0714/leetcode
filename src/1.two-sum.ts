/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      const other_num = nums[j];
      if (num + other_num === target) {
        result.push(i);
        result.push(j);
      }
      if (result.length) {
        return result;
      }
    }
  }
  return result;
};
// @lc code=end

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);
