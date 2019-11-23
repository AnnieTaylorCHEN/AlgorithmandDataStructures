// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzbuzz = (n) => {
    for (i=1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    } 
}

console.log(fizzbuzz(15))

console.log('Below is Approach2')

//Approach 2

const fizzbuzz2 = (n) => {
    for (i = 1; i <= n; i ++) {
        let toPrint=''
        if (i % 3 === 0) {
            toPrint += 'fizz'
        }
        if (i % 5 === 0) {
            toPrint += 'buzz'
        }
        //if the toPrint is empty string print i
        console.log( toPrint || i)
    }
}

console.log(fizzbuzz2(15))