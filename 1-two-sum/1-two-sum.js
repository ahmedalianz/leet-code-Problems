/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
      const twoSum = function (nums, target) {
        let hashTable = {};
        for (let i = 0; i < nums.length; i++) {
            if(hashTable[nums[i]] !== undefined) {
                return [hashTable[nums[i]],i];
            }
          hashTable[target - nums[i]] = i;
        }
      };
