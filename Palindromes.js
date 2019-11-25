// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
    const arrReversed = str.split('').reverse().join('')
    return str === arrReversed
}

console.log(palindrome('abba'))
console.log(palindrome('abcdefg'))

//Approach 2 
//in this one we compare the first and last, second and second last etc. Not necessarily the best but an alternative to solve problem.
const palindrome2 = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

console.log(palindrome2('abba'))
console.log(palindrome2('abcdefg'))