/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  nums.forEach((num, index) => {
    if (nums.indexOf(num) !== index) {
      nums.splice(index, 1);
    }
  });
  const testNums = Array.from(new Set(nums));
  if (testNums.length !== nums.length) {
    removeDuplicates(nums);
  }
  return nums.length;
};