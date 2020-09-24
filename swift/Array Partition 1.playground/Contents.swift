/*

 Inputs:
 Array of ints with even length
 No fractions / floats
 Positive
 Array size will range 1 to 10000
 The ints in the arrays can range from -10000 to 10000
 
 Output:
 An Int representing the maximum value of adding up all the Min Pairs
 
 Edge Cases:
 Blank input
 Empty array
 Duplicates
 Negatives
 
*/

func arrayPairSum(_ nums: [Int]) -> Int {
  var ans = 0
  let sorted = nums.sorted()
  var counter = 0
  
  while counter < sorted.count {
    ans += min(sorted[counter], sorted[counter + 1])
    counter += 2
  }
  
  return ans
}

let test = [1,4,3,-2,5,-6]
arrayPairSum(test)
