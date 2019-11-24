// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
    const words =[]
    const array = str.split(' ')
    for (let word of array) {
        //make first character of the string to capital letter, then add the rest of the words by slicing it from index 1 - second letter of the word
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

console.log(capitalize('a short sentence'))
console.log(capitalize('a lazy fox'))
console.log(capitalize('look, it is working!'))

console.log('Below is Approach 2')

//Approach 2
const capitalize2 = (str) => {
    let result = str[0].toUpperCase()
    for (let i =1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }

    return result
}

console.log(capitalize2('a short sentence'))
console.log(capitalize2('a lazy fox'))
console.log(capitalize2('look, it is working!'))