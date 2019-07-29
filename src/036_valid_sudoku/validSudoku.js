const isValidSudoku = (board) => {
    // check horizontally (row)
    for (let i = 0; i < board.length; i++) {
        if (!checkNums(board[i])) {
          return false
        }
      }
    
      // check veritcally (col)
      for (let j = 0; j < 9; j++) {
        let arr = []
        for (let k = 0; k < board.length; k++) {
          arr.push(board[k][j])
        }
    
        if (!checkNums(arr)) {
          return false
        } else {
          arr = []
        }
      }
    
      // check sections
      for (let l = 0; l < 7; l += 3) {
        for (let m = 0; m < 7; m += 3) {
          let arr = []
          arr.push(board[l][m])
          arr.push(board[l + 1][m])
          arr.push(board[l + 2][m])
          arr.push(board[l][m + 1])
          arr.push(board[l + 1][m + 1])
          arr.push(board[l + 2][m + 1])
          arr.push(board[l][m + 2])
          arr.push(board[l + 1][m + 2])
          arr.push(board[l + 2][m + 2])
    
          if (!checkNums(arr)) {
            return false
          }
        }
      }
    
      return true
    }
    
    checkNums = arr => {
        let store = {}
      
        for (let i = 0; i < arr.length; i++) {
          let char = arr[i]
      
          if (char !== '.' && store[char] === true) {
            return false
          } else {
            store[char] = true
          }
        }
      
        return true
      }
      
    module.exports = isValidSudoku