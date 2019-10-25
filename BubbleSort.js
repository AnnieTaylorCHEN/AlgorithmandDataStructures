const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const bubbleSort = (array) => {
    for (i = 0; i < array.length; i++) {
        for (let j =0; j < array.length; j++) {
            if (array[j] > array [j +1]) {
                let temp = array[j]
                array[j] = array[j +1]
                array[j+1] = temp
            }
        }
    }

}

bubbleSort(numbers)
console.log(numbers)

//for loop i - number of loop is based on the number of elements in the array. Each loop of i would reset loop of j to index zero.
//for loop j - number of loop is based on number of loop i minus - 1 for every loop of j. Why? we are already sure that the last element of each loop is sorted and doesn't needed to be compared in the next loop (hence -1).