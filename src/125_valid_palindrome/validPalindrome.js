const isPalindrome = s => {
  if (s === '') {
    return true
  }

  let cleaned = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()

  for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    let charA = cleaned[i]
    let charB = cleaned[cleaned.length - 1 - i]

    if (charA !== charB) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome
