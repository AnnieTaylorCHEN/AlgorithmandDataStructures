// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
    let count = 0 
    const checker =['a', 'e', 'i', 'o', 'u' ]

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count ++
        }
    }
     return count
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))

console.log('Below is Approach 2')
//Approach 2

const vowels2 = (str) => {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

console.log(vowels2('Hi There!'))
console.log(vowels2('Why do you ask?'))
console.log(vowels2('Why?'))