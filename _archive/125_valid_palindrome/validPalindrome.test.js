/*

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

*/

const isPalindrome = require('./validPalindrome')

describe('125. Valid Palindrome', () => {
  it('should return true for an empty string', () => {
    const s = ''

    const expectation = true
    const result = isPalindrome(s)

    expect(result).toEqual(expectation)
  })

  it('should return true for example 1', () => {
    const s = 'A man, a plan, a canal: Panama'

    const expectation = true
    const result = isPalindrome(s)

    expect(result).toEqual(expectation)
  })

  it('should return false for example 2', () => {
    const s = 'race a car'

    const expectation = false
    const result = isPalindrome(s)

    expect(result).toEqual(expectation)
  })

  it('should return false for "0P"', () => {
    const s = '0P'

    const expectation = false
    const result = isPalindrome(s)

    expect(result).toEqual(expectation)
  })

  it('should return true for " "', () => {
    const s = ' '

    const expectation = true
    const result = isPalindrome(s)

    expect(result).toEqual(expectation)
  })
})
