/*
 14. Longest Common Prefix
 
 Write a function to find the longest common prefix string amongst an array of strings.
 
 If there is no common prefix, return an empty string "".
 
 ex1:
 Input: ["flower","flow","flight"]
 Output: "fl"

 ex2:
 Input: ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.

 Note:
 All given inputs are in lowercase letters a-z

 Questions:
  - What to return when empty input?
  
 */

func longestCommonPrefix(_ strs: [String]) -> String {
  
  if strs.isEmpty {
    return ""
  }
  
  let shortestWord = strs.min{ $0.count < $1.count }!
  var longestPrefix = shortestWord

  for word in strs {
    while !word.hasPrefix(longestPrefix), longestPrefix.count > 0 {
      longestPrefix.removeLast()
    }
    
    if longestPrefix.count == 0 { return longestPrefix }
  }
  return longestPrefix
}

let test:Array<String> = ["flower","flow","flight"]
longestCommonPrefix(test)
