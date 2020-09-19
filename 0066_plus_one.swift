class Solution {
    func plusOne(_ digits: [Int]) -> [Int] {
        var tempArr:Array = digits
        var index:Int = digits.count - 1
        var done:Bool = false
 
        while (!done) {
          if (tempArr[index] < 9) {
            tempArr[index] += 1
            done = true
          } else {
            if (index == 0) {
              tempArr[index] = 1
              tempArr.append(0)
              done = true
            } else {
              tempArr[index] = 0
              index -= 1
            }
          }
        }

        return tempArr 
    }
}
