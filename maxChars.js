// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    const arr = str.split('')
    const map = {}
    let max = 0 
    let maxChar = ''

    //iterate through an array
    for (let char of arr) {
        if (!map[char]){
            map[char] = 1
        } else {
            map[char] ++
        }
    }
    //iterate through an object
    for (let char in map) {
        if (map[char] > max) {
            max = map[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxChar('abcccccccd'))
console.log(maxChar('apple 1231111'))