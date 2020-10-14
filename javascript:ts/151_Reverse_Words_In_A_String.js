/**
 * @param {string} s
 * @return {string}
 */
// Time: O(n)
// Space: O(n)
var reverseWords = function(s) {
  let words = [];
  let tempWord = "";
  
  for(let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char !== " ") {
      tempWord = tempWord + char;
      if (i === s.length - 1 && tempWord.length > 0) {
        words.push(tempWord); 
      }
    } else if (char === " ") {
      if (tempWord.length > 0) {
        words.push(tempWord);
      }
      tempWord = "";
    }
  }
  
  let answer = ""
  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    answer += word;
    if (i !== 0) {
      answer += " ";
    }
  }
  
  return answer;
};

// Todo: try with O(1) space
