/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// function twoSum(nums: number[], target: number): number[] {
//   let result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       const other_num = nums[j];
//       if (num + other_num === target) {
//         result.push(i);
//         result.push(j);
//       }
//       if (result.length) {
//         return result;
//       }
//     }
//   }
//   return result;
// };
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i])!, i];
    }
    map.set(target - nums[i], i);
  }
  return [];
}
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
