/*
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"
 
Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
 
*/

func addBinary(_ a: String, _ b: String) -> String {
  var ans:String = ""
  var i:Int = a.count - 1
  var j:Int = b.count - 1
  var carry:Int = 0
  
  while( i >= 0 || j >= 0) {
    var sum:Int = carry
    
    if ( i >= 0 ) {
      sum += Int(a[i])!
      i -= 1
    }
    
    if ( j >= 0 ) {
      sum += Int(b[j])!
      j -= 1
    }
    
    ans = String(sum % 2) + ans
    carry = sum / 2
  }
  
  if(carry > 0) {
    ans = "1" + ans
  }
  
  return ans
}

print(addBinary("11", "1"))

extension String {
  subscript(i: Int) -> String {
    return String(self[index(startIndex, offsetBy: i)])
  }
}
