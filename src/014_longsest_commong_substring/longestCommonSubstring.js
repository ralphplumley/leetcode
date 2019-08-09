const longestCommonPrefix = (strs) => {

    if (strs.length === 1) {
        return strs[0]
    }

    if (strs.length === 0) {
        return ""
    }


    let lenMin = null
    
    strs.forEach(word => {
        if (lenMin === null || word.length < lenMin) {
            lenMin = word.length
        }
    });

    let store = ''

    for (let i = 0; i < lenMin; i++ ) {
        let curr = null
        for (let j = 0; j < strs.length; j++) {
            if (j === 0) {
                curr = strs[j][i]
                continue
            } 

            if (strs[j][i] !== curr) {
                return store
            }

            if (j === strs.length - 1) {
                store += curr
            }

        }
    }

    return store
}

longestCommonPrefix(["flow", "flower", "flight"])

module.exports = longestCommonPrefix
