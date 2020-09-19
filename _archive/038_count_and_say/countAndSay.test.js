const countAndSay = require('./countAndSay')

describe('38. Count and Say', () => {
    it('should return "1" with input of 2', () => {
        const n = 1
        const expectation = "1"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "11" with input of 2', () => {
        const n = 2
        const expectation = "11"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "21" with input of 3', () => {
        const n = 3
        const expectation = "21"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "1211" with input of 4', () => {
        const n = 4
        const expectation = "1211"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "111221" with input of 5', () => {
        const n = 5
        const expectation = "111221"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "312211" with input of 6', () => {
        const n = 6
        const expectation = "312211"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "13112221" with input of 7', () => {
        const n = 7
        const expectation = "13112221"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "1113213211" with input of 8', () => {
        const n = 8
        const expectation = "1113213211"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "31131211131221" with input of 9', () => {
        const n = 9
        const expectation = "31131211131221"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })

    it('should return "13211311123113112211" with input of 10', () => {
        const n = 10
        const expectation = "13211311123113112211"
        const result = countAndSay(n)
        expect(result).toEqual(expectation)
    })
})