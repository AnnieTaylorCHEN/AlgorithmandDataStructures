const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const insertionSort = (array) => {
    for ( let i = 0; i < array.length; i ++) {
        if (array[i] < array[0]){
            //first extract the smaller number, move it to be the first of the array
            array.unshift(array.splice(i,1)[0])
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i-1]) {
                //find where the number should go
                for (let j =1; j < i; j ++) {
                    if (array[i] >= array[j-1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0])
                    }
                }
            }
        }
    }
    return array
}

insertionSort(numbers)
console.log(numbers)

const fruits = ['apple', 'orange', 'banana', 'mango']
const array = fruits.splice(2, 1)
console.log(array) //return the REMOVED items in an array, here will be 'banana'

const fruits1 = ["Banana", "Orange", "Apple", "Mango"]
const array1 = fruits1.splice(2, 2)
console.log(array1)