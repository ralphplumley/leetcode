const myAtoi = require('./myAtoi')

describe('8. String to Integer', () => {
    it('should return 4 with input of \'4\'', () => {
        const str = "4"
        const expectation = 4
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 42 with input of \'42\'', () => {
        const str = "42"
        const expectation = 42 
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 42 with input of \'__-42-1\'', () => {
        const str = "-42-1"
        const expectation = -42
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return -42 with input of \'__-42\'', () => {
        const str = "-42"
        const expectation = -42
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })
    
    it('should return -42 with input of \'   -42\'', () => {
        const str = "   -42"
        const expectation = -42
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 4193 with input of \'4193 with words\'', () => {
        const str = "4193 with words"
        const expectation = 4193
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return -2 ^ 31 with input of \'-91283472332\'', () => {
        const str = "-91283472332"
        const expectation = -2147483648
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 2147483647 with input of \'2147483647\'', () => {
        const str = "2147483647"
        const expectation = 2147483647
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })


    it('should return 3 with input of \'3.14159\'', () => {
        const str = "3.14159"
        const expectation = 3
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'words and 987\'', () => {
        const str = "words and 987"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'\'', () => {
        const str = ""
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'+\'', () => {
        const str = "+"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'-\'', () => {
        const str = "-"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'  \'', () => {
        const str = "  "
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'+-2\'', () => {
        const str = "+-2"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'   +0 123\'', () => {
        const str = "   +0 123"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'-abc\'', () => {
        const str = "-abc"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 0 with input of \'--abc\'', () => {
        const str = "--abc"
        const expectation = 0
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 1 with input of \'+1\'', () => {
        const str = "+1"
        const expectation = 1
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return 1 with input of \'+1- 1\'', () => {
        const str = "+1- 1"
        const expectation = 1
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })

    it('should return -2147483648 with input of \' -11919730356x\'', () => {
        const str = " -11919730356x"
        const expectation = -2147483648
        const result = myAtoi(str)
        expect(result).toEqual(expectation)
    })
})
