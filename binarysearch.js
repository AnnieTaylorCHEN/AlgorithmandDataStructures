const binarySearch = (list, item ) => {
    let low = 0  //lowest index 
    let high = list.length -1 //highest index

    //looping from lowest to highest index, getting index number as result
    while ( low <= high ) {
        let midIndex = Math.floor((low + high )/ 2) //starting mid
        let midItem = list[midIndex]  //guessed item start from mid index

        if (midItem === item){
            return midIndex
        } 
        
        if (item < midItem) {
            high =  midIndex - 1
        } else {
            low = midIndex + 1
        } 
    }

    return null
}


const myList = [ 1, 3, 5, 7, 9 ]
        
console.log(binarySearch(myList, 3))
console.log(binarySearch(myList, -1))
console.log(binarySearch(myList, 9))
