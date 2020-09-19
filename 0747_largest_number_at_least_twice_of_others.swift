class Solution {
    func dominantIndex(_ nums: [Int]) -> Int {
  // First pass - find largest - O(n)
  var largest: (Int, Int) = (0, 0)
  
  for (index, n) in nums.enumerated() {
    if n > largest.0 {
      largest.0 = n
      largest.1 = index
    }
  }
  
  // Another pass - check largest against 2* each element - O(n)
  for n in nums {
    if (n != largest.0) && (n*2) > largest.0 {
      return -1
    }
  }
  
  return largest.1
    }
}
