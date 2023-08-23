// check if string is palindrome

const checkPalindrome = (value) => {
    if (value.split('').reverse().join('') === value)
        return true;
    return false;
}

const checkPalindromeIterator = (value) => {
    const val = value.split('')
    for (let i = 0; i < value.length; i++) {
        let length = value.length - 1;

        if (value.charAt(i) !== value.charAt(length - i)) {
            return false
        }
    }
    return true;
}

console.log(checkPalindrome('abccba'))
console.log(checkPalindrome('1234321'))
console.log(checkPalindrome('ertt'))

console.log(checkPalindromeIterator('abccba'))
console.log(checkPalindromeIterator('1234321'))
console.log(checkPalindromeIterator('ertt'))

// OUTPUT
// true
// true
// false

// true
// true
// false