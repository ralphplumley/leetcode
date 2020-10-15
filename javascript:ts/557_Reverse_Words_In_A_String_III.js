/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let answer = ""
  
  let wordArr = []
  let word = ""

  // Split the string into Array 
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char !== " ") {
      word += char
    } else if (char === " ") {
      if (word.length > 0) {
        wordArr.push(word)
      }
      word = ""
    }
  }
 
  // Don't forget to include the last word
  if (word.length > 0 ) {
    wordArr.push(word)
  }
  
  // Take each word, reverse
  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i]
    let reversed = ""
    
    for (let j = word.length - 1; j >= 0; j--) {
      let char = word[j]
      reversed += char
    }
    answer += reversed
    if ( i !== wordArr.length - 1) {
      answer += " "
    }
  }
  
  return answer
};
