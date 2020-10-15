/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pleft = 0
  let pright = 1
  
  while (pright < nums.length) {
    if (nums[pleft] === 0) {
       if (nums[pright] !== 0) {
         let temp = nums[pleft]
         nums[pleft] = nums[pright]
         nums[pright] = temp
         
         pleft++
         pright++ 
       } else {
         pright++
       }
    } else {
      pleft++
      pright++
    }
  }
};
