const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const selectionSort = (array) => {
    for (let i=0; i < array.length; i++) {
        // set current index (first unsorted element) as minimum
        let min = i
        let temp = array[i]
        for (let j=i+1; j< array.length; j++){
            if (array[j] < array[min]){
                 //update minimum if current is lower that what we had previously
                min = j
            }
        }
        array[i] = array[min] //swap minimum with first unsorted position
        array[min] = temp
    }
    return array
}

console.log(selectionSort(numbers))