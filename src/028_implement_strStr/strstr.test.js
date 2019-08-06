const strstr = require('./strstr')

describe('8. String to Integer', () => {

    it('should return 0 with input of \'\'', () => {
        const needle = ""
        const haystack = "foobar"
        const expectation = 0
        const result = strstr(needle, haystack)
        expect(result).toEqual(expectation)
    })

    it('should return 2 with input of \'oob\' and \'foobar\'', () => {
        const needle = "oob"
        const haystack = "foobar"
        const expectation = 1
        const result = strstr(needle, haystack)
        expect(result).toEqual(expectation)
    })

    it('should return -1 with either input is not a string', () => {
        const needle = 999
        const haystack = "foobar"
        const expectation = -1
        const result = strstr(needle, haystack)
        expect(result).toEqual(expectation)
    })

    it('should return with 4 for input of \'ar\' and \'foobar\'', () => {
        const needle = "ar"
        const haystack = "foobar"
        const expectation = 4
        const result = strstr(needle, haystack)
        expect(result).toEqual(expectation)
    })

    it('should return with 0 input of \'foobar\' and \'foobar\'', () => {
        const needle = "foobar"
        const haystack = "foobar"
        const expectation = 0
        const result = strstr(needle, haystack)
        expect(result).toEqual(expectation)
    })

})