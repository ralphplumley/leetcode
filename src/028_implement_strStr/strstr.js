const strstr = (needle, haystack) => {

    if (typeof needle !== 'string' || typeof haystack !== 'string') {
        return -1
    }

    if (needle === '') {
        return 0
    }

    let index = null

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            index = i

            let j = 0
            while (haystack[i+j] === needle[j]) {
                if (j === needle.length - 1) {
                    return index
                }
                j++
            }
        }
    }

    return -1
};

module.exports = strstr
