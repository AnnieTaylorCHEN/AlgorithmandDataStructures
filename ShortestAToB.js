/*
you are given "from" as an array of 0-50 digits
you are given "to" as an array of 0-50 digits
the from[i] and to[i] are possible connecting dots. 
you must find the shortest path, then count the steps to reach that, return steps. Otherwise, return -1. 
execution time must be 10s or less. 
Example: from: [0, 0, 1], to: [1, 2, 3], location A =2, location B = 3, to reach from location A to B, we need to pass 2 -> 0 -> 1 -> 3, so we return 3. 
Example from [0, 1],  to:[2, 3], location A =0, location B = 1, impossible route, so return -1.
*/ 

let fastest = 9999 // set up a huge number(extreme, slow) and we will work from there to get to the fastest, as we go, we store the value of the fastest here

// visitedSpot = [locationA] //this is spot we visited already in the whole process, as we don't want to go backwards
// steps //the whole steps that take via different routes
//locationA is not fixed, it will keep changing in the loop

const fastestRoute = (fromArr, toArr, locationA, locationB) => {
    
    recursiveRoute(fromArr, toArr, locationA, locationB, visitedSpot = [locationA], steps = 0 ) //initial state
    if (fastest < 9999) {
        return fastest
    }
    return -1
}

const recursiveRoute = (fromArr, toArr, locationA, locationB, visitedSpot, steps) => {
    if (steps >= fastest) {
        return 
    }
    if (locationA === locationB) {
        fastest = steps
        return
    }
    //we start from locationA, and we will change to any spot as we proceed the loop
    const options = routeOptions(fromArr, toArr, locationA)
    // console.log(options)
    for (let spot of options) {
        if (!visitedSpot.includes(spot) ) {
            visitedSpot2 = [...visitedSpot] 
            visitedSpot2.push(spot)
            // console.log(visitedSpot2)
            recursiveRoute(fromArr, toArr, spot, locationB, visitedSpot2, steps + 1)
        }
    }
}

//this takes any location that is in the loop, to see from this location, where we can go to in both from and to array. Add the options to the possible spots the location can reach. 
const routeOptions = (fromArr, toArr, location) => {
    let possibleSpotsReached = []
    let i = 0 
    while (i < fromArr.length) {
        if (fromArr[i] === location) {
            possibleSpotsReached.push(toArr[i])
        } else if (toArr[i] === location) {
            possibleSpotsReached.push(fromArr[i])
        }
        i++
    }
    return possibleSpotsReached
}

a = [0,0,1]
b = [1,2,3]

c = [0,1]
d = [2,3]

e = [0,0,1,1,4,4,5,2,3,2, 8,5, 7, 9, 9,10]
f = [1,2,2,4,5,8,8,3,8,9,10,7,20,11,10,20]

console.log(fastestRoute(a, b, 2, 3)) //output is 3

fastest = 9999
console.log(fastestRoute(c, d, 0, 1)) //ouput is -1

fastest = 9999
console.log(fastestRoute(e, f, 0, 20)) //output is 4