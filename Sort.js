 
// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//Bubble sort: iterate through 2 nested loops, and each time find the largest number and put it on the far right(the end). 

const bubbleSort = (arr) => {
    for (let i = 0; i< arr.length; i++){
        for (let j =0; j < arr.length -i -1; j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j]= lesser
            }
        }
    }
    return arr
}

console.log(bubbleSort([8, 7, 5, 1, 9, 0 , -7, -4]))

//Selection sort: kinda of "prove me wrong" method, as we are going to assume an min variable, and prove if that is the smallest value. If some smaller one is found, then it's swapped with the min. 

const selectionSort = (arr) => {
    for (let i = 0; i< arr.length; i++) {
        let indexOfMin = i 
        //we start to compare with the second item with a loop
        for (let j =0 ; j < arr.length; j++){
            //if any j is found to be less than min, then we swap them by updating their index value
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j 
            }
        }
        //if any j becomes the new min, then we swap them
        if (indexOfMin !== i){
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

//Merge: merge two sorted arrays into one sorted array. We iterate two arrays, and compared the same index and decide to put the smallest one to the new array. 

const merge = (left, right) => {
    const results = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    //we might still have left over in either one of the arrays, so we need to do something to push them into the new array too
    return [...results, ...left, ...right]
}

const mergeSorted = (arr) => {
    if (arr.length === 1){
        return arr
    }

    //find the mid point to divide the array into two arrays, divide until they're finally 1 item in the array, then join them together by the above merge function
    const center = Math.floor(arr.length /2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(mergeSorted(left), mergeSorted(right))
}

console.log(mergeSorted([0,8,-6, 3, 9, 2, 4, 1]))