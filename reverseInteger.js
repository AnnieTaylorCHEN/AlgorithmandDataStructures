// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (num) => {
    const numToStrArr = num.toString().split('').reverse()
    
    if (num < 0) {
        numToStrArr.pop()
        numToStrArr.unshift('-')
        return parseInt(numToStrArr.join(''))
    } else {
        return parseInt(numToStrArr.join(''))
    }
}

console.log(reverseInt(15))
console.log(reverseInt(189))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))

console.log('Below is approach 2')
//Approach 2
const reverseInt2 = (n) => {
    const reversed = n.toString().split('').reverse().join('')
    
    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt2(15))
console.log(reverseInt2(189))
console.log(reverseInt2(500))
console.log(reverseInt2(-15))
console.log(reverseInt2(-90))