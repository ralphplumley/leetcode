const countAndSay = (n) => {
    let store = {}
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            store[1] = JSON.stringify(1)
            continue
        }

        let priorStringNum = store[i-1]
        let count = 1
        let str = ""

        for (let j = 0; j < store[i-1].length; j++) {
            let currChar = priorStringNum[j]

            if (priorStringNum[j + 1] !== currChar) {
                str += JSON.stringify(count)
                str += currChar
                count = 1
            } else {
                count++
            }

            if (j === store[i-1].length - 1) {
                store[i] = str
            }
        }
    }

    return store[n]
}

console.log(countAndSay(6))

module.exports = countAndSay

/*
    1.  1
    2.  11
    3.  21
    4.  1211
    5.  111221
    6.  312211
    7.  13112221
    8.  1113213211
    9.  31131211131221
    10. 13211311123113112211
*/
