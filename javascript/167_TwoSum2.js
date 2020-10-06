/*
167. Two Sum II - Input array is sorted
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
*/
var twoSum = function(numbers, target) {
    var left_pointer = 0
    var right_pointer = numbers.length - 1
  
    while (left_pointer < right_pointer) {
      let sum = numbers[left_pointer] + numbers[right_pointer]
      if (sum === target) {
        return [left_pointer + 1, right_pointer + 1] 
      }
      
      if (sum < target) {
        left_pointer++ 
      } else {
        right_pointer-- 
      }
    }
};
