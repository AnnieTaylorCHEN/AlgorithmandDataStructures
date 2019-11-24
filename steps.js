 // --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
    for  (let row =0; row < n; row ++) {
        let stair = ''
        for (let column =0; column < n; column ++){
            if ( column <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}

console.log(steps(2))
console.log(steps(5))

console.log('Below is Approach 2')

//Approach 2

const steps2 = (n, row = 0, stair = '') => {
    if (n === row) {
        return 
    }

    if (n === stair.length) {
        console.log(stair)
        return steps2(n, row + 1)
    }

    // if (stair.length <= row) {
    //     stair += '#'
    // } else {
    //     stair += ' '
    // }
    stair = stair + ( stair.length <= row ? '#' :' ')
    steps2(n, row, stair)
}


console.log(steps2(3))
console.log(steps2(4))

console.log('Below is Approach 3')

const steps3 = (n, row = 0, stair = '') => {
    if (n === row) {
        return 
    }

    if (n === stair.length) {
        console.log(stair)
        row++
        stair = ''
    } else if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps3(n, row, stair)
}

console.log(steps3(1))
console.log(steps3(3))