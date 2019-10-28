const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const quickSort = (array, left, right) => {
    let pivot
    let partitionIndex

    if (left < right ) {
        pivot = right // pivot (Element to be placed at right position)
        partitionIndex = partition(array, pivot, left, right)
        console.log('partition value: ' + array[partitionIndex] + ' pivot value: ' + array[pivot])

        //sort left and right
        quickSort(array, left, partitionIndex -1)//before partition index
        quickSort(array, partitionIndex +1, right)//after partition index
    }
    return array 
    
}

const partition = (array, pivot, left, right) => {
    let partitionIndex = left
     
    for (let i = left; i < right; i ++) {
        if (array[i] < array[pivot]){
            swap(array, i, partitionIndex)
            partitionIndex++ 
        }
    }
    swap(array, right, partitionIndex)
    return partitionIndex
}

const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)