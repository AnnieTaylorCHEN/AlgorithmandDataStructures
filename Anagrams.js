// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false
    }

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true
}

//build a helper function 
const buildCharMap = (str) => {
    const charMap = {}
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('Hi there', 'Bye there'))

console.log('Below is Approach 2')
//Approach 2

const anagrams2 = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB)
}

const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('Hi there', 'Bye there'))