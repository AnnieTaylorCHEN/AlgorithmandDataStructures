//create a function that reverse the string 
//input = 'My name is Tom'
//output = 'moT si eman yM.'


//Approach 1
const reverseString = (input) => input.split('').reverse().join('')

const input = 'My name is Tom'
console.log(input.split()) //turn a string into one item in the array
console.log(input.split('')) // turn string into an array of character
console.log(input.split(' ')) // turn string into an array of words

console.log(reverseString(input))

//Approach 2
console.log('NOTE: below is approach 2')

const reverseString2 = (input) => {
    let reversedString = ''
    for (let character of input ){
        reversedString = character + reversedString
    }
    return reversedString
}

console.log(reverseString2(input))