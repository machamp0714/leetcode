/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const invertedNumber = Number(x.toString().split('').reverse().join(''));

  return x === invertedNumber;
};
// @lc code=end
isPalindrome(0);
isPalindrome(121);
isPalindrome(-121);
isPalindrome(123);

// function isPalindrome(x: number): boolean {
//   if (x < 0) return false

//   let rev = 0
//   for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
//   return rev === x
// };
