func reverseString(_ s: inout [Character]) {
  var count = 0
  var left_pointer = 0
  var right_pointer = s.count - 1
  
  while count < s.count / 2 {
    let temp = s[left_pointer]
    s[left_pointer] = s[right_pointer]
    s[right_pointer] = temp
    count += 1
    left_pointer += 1
    right_pointer -= 1
  }
  
}
