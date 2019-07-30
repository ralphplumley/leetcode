const isAnagram = (s,t) => {
    
    if (s == undefined || t == undefined) {
        return false
    }

    if (s.length !== t.length) {
        return false
    }

    if (typeof s !== 'string' || typeof t !== 'string') {
        return false
    }
    
    const s_store = {}
    const t_store = {}

    s.split('').forEach((char) => {
        s_store[char] ? s_store[char]++ : s_store[char] = 1
    })

    t.split('').forEach((char) => {
        t_store[char] ? t_store[char]++ : t_store[char] = 1
    })

    for ( char in t_store ) {
        if (s_store[char] !== t_store[char]) {
            return false
        }
    }

    return true
}

module.exports = isAnagram