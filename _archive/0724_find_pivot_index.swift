class Solution {
    func pivotIndex(_ nums: [Int]) -> Int {
      let total_sum: Int = nums.reduce(0, +)
      
      var left_sum: Int = 0
      for (index, num) in nums.enumerated() {
        if left_sum == (total_sum - left_sum - num) {
          return index
        }
        left_sum += num
      }
 
      return -1
    }
}
