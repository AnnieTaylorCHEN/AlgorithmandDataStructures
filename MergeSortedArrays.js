//given two arrays [0, 3, 4, 31], [4, 6, 30]
//output [0, 3, 4, 5, 6, 30, 31]

//Approach 1

const mergeTwoArraysSorted = (array1, array2) => {
    if (array1.length === 0) {
        return array2
    } else if (array2.length === 0) {
        return array1
    }

    let newArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1
    
    //we loop through both arrays, and compare them to see which is smaller, whichever smaller gets pushed to new array. 
    while (i <= array1.length || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            newArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            newArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    return newArray
}


array1 = [0, 3, 4, 31]
array2 = [4, 6, 30]
console.log(mergeTwoArraysSorted(array1, array2))

let array3 = [0,3,4,31]
let array4 = [-2,-1,0,3,4,6,30]
console.log(mergeTwoArraysSorted(array3, array4))

//Comment: this doesn't work when both numbers turn to be 0. 


//Approach 2
const mergeTwoArraysSorted2 = (array1, array2) => {
    let newArray = array1.slice()
    for (let i = 0 ; i < array2.length; i ++) {
        newArray.push(array2[i])
    }
    return newArray.sort((a, b) => a - b )
}

array1 = [0, 3, 4, 31]
array2 = [4, 6, 30]
console.log(mergeTwoArraysSorted2(array1, array2))

array3 = [0,3,4,31]
array4 = [-2,-1,0,3,4,6,30]
console.log(mergeTwoArraysSorted2(array3, array4))

//Approach 3
const mergeTwoArraysSorted3 = (array1, array2) => {
    const newArray = array1.concat(array2)
    return newArray.sort((a, b) => a - b)
}

array1 = [0, 3, 4, 31]
array2 = [4, 6, 30]
console.log(mergeTwoArraysSorted3(array1, array2))

array3 = [0,3,4,31]
array4 = [-2,-1,0,3,4,6,30]
console.log(mergeTwoArraysSorted3(array3, array4))

//Comment: although approach 2 and 3 seems shorter and easier, the time complexity is not as good as approach 4. Because sort() is O(n^2) or O(n log n).

//Approach 4
const mergeTwoArraysSorted4 = (array1, array2) => {
    if (array1.length === 0) {
        return array2
    } else if (array2.length === 0) {
        return array1
    }

    let newArray = []
    let expectedLength = array1.length + array2.length
    let i = 0
    let j = 0
    
    //we loop through both arrays, and compare them to see which is smaller, whichever smaller gets pushed to new array. 
    while(newArray.length !== expectedLength) {
        if(array1[i] < array2[j] || array2[j] === undefined ) {
            newArray.push(array1[i])
            i++
        } else {
            newArray.push(array2[j])
            j++
        }
    }
    return newArray
}

array1 = [0, 3, 4, 31]
array2 = [4, 6, 30]
console.log(mergeTwoArraysSorted4(array1, array2))

array3 = [0,3,4,31]
array4 = [-2,-1,0,3,4,6,30]
console.log(mergeTwoArraysSorted4(array3, array4))

// Comment: Approach 4 is a refactoring of the approach 1. 