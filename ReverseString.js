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

//Approach 3 
console.log('NOTE: below is approach 3')

const reverseString3 = (input) => {
    return input.split('').reduce((rev, char) => char + rev, '')
}

console.log(reverseString3(input))

//Approach 4
console.log('NOTE: below is approach 4')

const reverseString4 = (input) => {
    let arrayStr = input.split('')
    let reversedArray = []
    const addToArray = (array) => {
        if (array.length > 0){
            reversedArray.push(array.pop())
            addToArray(array)
        }
        return
    }
    addToArray(arrayStr)
    return reversedArray.join('')
}

console.log(reverseString4(input))

//Approach 5 
console.log('NOTE: below is approach 5')

const reverseString5 = (input) => {
    if (input === '') {
        return ''
    } else {
        return reverseString5(input.substr(1)) + input.charAt(0)
    }
}

console.log(reverseString5(input))

