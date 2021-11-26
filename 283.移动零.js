/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function (nums) {
  const size = nums.length;
  let left = 0, right = 0;
  while (right < size) {
    if (nums[right]) {
      left !== right && ([nums[left], nums[right]] = [nums[right], nums[left]]);
      left++;
    }
    right++;
  }
};
// @lc code=end

