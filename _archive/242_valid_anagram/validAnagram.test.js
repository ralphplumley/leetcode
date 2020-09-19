/*
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

const isAnagram = require('./validAnagram')

describe('242. Valid Anagram', () => {

    it('should return false with two different length inputs', () => {
        const s = "ab"
        const t = "a"
        const expectation = false
        const result = isAnagram(s,t)
        expect(result).toEqual(expectation)
    })

    it('should return false for a proper anagram', () => {
        const s = "a"
        const t = "ab"
        const expectation = false
        const result = isAnagram(s,t)
        expect(result).toEqual(expectation)
    })

    it('should return false for an improper anagram', () => {
        const s = "rat"
        const t = "car"
        const expectation = false
        const result = isAnagram(s,t)
        expect(result).toEqual(expectation)
    })

    it('should return false with missing input parameters', () => {
        const s = "rat"
        const expectation = false
        const result = isAnagram(s)
        expect(result).toEqual(expectation)
    })

    it('should return false with number inputs', () => {
        const s = "rat"
        const t = 123
        const expectation = false
        const result = isAnagram(s,t)
        expect(result).toEqual(expectation)
    })

    it('should return true two empty strings', () => {
        const s = ""
        const t = ""
        const expectation = true
        const result = isAnagram(s,t)
        expect(result).toEqual(expectation)
    })
})