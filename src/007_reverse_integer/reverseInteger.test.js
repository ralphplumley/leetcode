const reverse = require('./reverseInteger')

describe('7. Reverse Integer', () => {
    it('should reverse a positive integer', () => {
        const num = 123
        const result = reverse(num)
        const expectation = 321
        expect(result).toEqual(expectation)
    })

    it('should reverse a negative integer', () => {
        const num = -123
        const result = reverse(num)
        const expectation = -321
        expect(result).toEqual(expectation)
    })

    it('should reverse an integer with a 0 at the end', () => {
        const num = -1230
        const result = reverse(num)
        const expectation = -321
        expect(result).toEqual(expectation)
    })

    it('should return 0 if output is greater than 2147483647', () => {
        const num = 1534236469
        const result = reverse(num)
        const expectation = 0
        expect(result).toEqual(expectation)
    })

    it('should return 0 if output is less than -2147483648', () => {
        const num = -1534236469
        const result = reverse(num)
        const expectation = 0
        expect(result).toEqual(expectation)
    })

})