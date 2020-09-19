const myAtoi = (str) => {

    let regexNumbersSigns = /^[\d+-]+$/
    let regexNumbers = /^[\d]+$/

    let onARun = false
    let alreadySigned = false
    let currentRun = ''

    let i = 0
    debugger
    while (i < str.length) {
        // if we're not on a run
        let char = str[i]
        if (!onARun) {
            // and the character is not a space
            if (char !== ' ') {
                // is it a number or a sign?
                if (regexNumbersSigns.test(char)) {
                    // start a run
                    onARun = true
                    currentRun += char

                    if (char === '+' || char === '-') {
                        alreadySigned = true
                    }
                }

                // otherwise
                else {
                    // return 0
                    return 0
                }
            }
        }

        // otherwise we are on a run
        else {
            // is the character a number or a sign?
            if (regexNumbersSigns.test(char)) {
                // is char a sign?
                if (char === '+' || char === '-') {
                    // do we alread have a sign?
                    if (alreadySigned) {
                        // is length < 2?
                        if (currentRun.length < 2) {
                            // return 0
                            return 0
                        }
                        // else
                        else {
                            // return parseInt(currentRun)
                            return parseInt(currentRun)
                        }
                    }
                    // otherwise
                    else {
                        // append to the current run
                        currentRun += char
                        // flip alreadySigned bool
                        alreadySigned = true
                    }
                }

                // is char a number?
                if (regexNumbers.test(char)) {
                    // append to the current run
                    currentRun += char
                }
            }
            // otherwise
            else {
                return output(currentRun)
            }
        }

        i++
    }

    return output(currentRun)

};

const output = (str) => {
    if (str === '+' || str === '-') {
        return 0
    }
    
    if (str.length > 0) {
        const output = parseInt(str)
        if (output < -2147483648) {
            return -2147483648
        } else if (output > 2147483647) {
            return 2147483647
        } else {
            return output
        }
    } else {
        return 0
    }
}

myAtoi(" -11919730356x")

module.exports = myAtoi
