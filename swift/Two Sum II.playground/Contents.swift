/*
 Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 
 Note:
 Your returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution and you may not use the same element twice.
 
 Input: numbers = [2,7,11,15], target = 9
 Output: [1,2]
 Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 
*/

func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
  var ans = [Int]()
  for (index1, num1) in numbers.enumerated() {
    for (index2, num2) in numbers.enumerated() {
      if (index1 != index2) && (num1 + num2 == target) {
        if (index1 < index2) {
          ans = [index1+1, index2+1]
        } else {
          ans = [index2+1, index1+1]
        }
      }
    }
  }
  return ans
}

let test = [-1,0]
let target = -1
twoSum(test, target)

