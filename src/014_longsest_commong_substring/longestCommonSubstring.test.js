const longestCommonPrefix = require('./longestCommonSubstring')

describe('14. Longest Common Substring', () => {
    
    it('should return "fl" with input of ["flower","flow","flight"]', () => {
        const strs = ["flower","flow","flight"]
        const expectation = "fl"
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })

    it('should return "" with input of ["dog","racecar","car"]', () => {
        const strs = ["dog","racecar","car"]
        const expectation = ""
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })
    
    it('should return "" with input of []', () => {
        const strs = []
        const expectation = ""
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })

    it('should return "a" with input of ["apple","able"]', () => {
        const strs = ["apple","able"]
        const expectation = "a"
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })

    it('should return "apple" with input of ["apple","apple"]', () => {
        const strs = ["apple","apple"]
        const expectation = "apple"
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })

    it('should return "a" with input of ["a"]', () => {
        const strs = ["a"]
        const expectation = "a"
        const result = longestCommonPrefix(strs)
        expect(result).toEqual(expectation)
    })

})