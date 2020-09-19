const rotate = require('./rotateImage')

describe('048. Rotate Image', () => {
    it('4x4 test', () => {
        const matrix = [
            [ 1,2,3,4],
            [ 5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
          ]

        const expectation = [
            [13,9,5,1],
            [14,10,6,2],
            [15,11,7,3],
            [16,12,8,4]
          ]
        const result = rotate(matrix)
        
        expect(result).toEqual(expectation)
    })
})