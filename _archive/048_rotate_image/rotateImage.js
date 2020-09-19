const rotate = (matrix) => {

    // transpose
    for (let i = 0; i < matrix.length; i++) {
      let len = matrix.length
      for (let j = i; j < len; j++) {
        if (j !== i ) {
          let temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
        }
      }
    }
  
    // reverse
    for (let i = 0; i < matrix.length; i++) {
      for (j = 0; j < Math.floor(matrix.length/2); j++) {
        let temp = matrix[i][matrix[i].length - 1 - j]
        matrix[i][matrix[i].length - 1 - j] = matrix[i][j]
        matrix[i][j] = temp
      }
    }
    return matrix
  };

module.exports = rotate
