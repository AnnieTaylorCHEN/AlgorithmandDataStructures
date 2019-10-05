/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

*You may assume that each input would have exactly one solution, and you may not use the same element twice.

*Example:

*Given nums = [2, 7, 11, 15], target = 9,

*Because nums[0] + nums[1] = 2 + 7 = 9,
*return [0, 1].
*/

/*
 * nums - an array of numbers
 * target - a number
 * return - an array of index
 */

//APPROACH 1

const twoSum = (nums, target) => {
    let resultArray = []
    for ( let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++){
            let num1 = nums[i]
            let num2 = nums[j] = target - num1
            resultArray[0] = nums.indexOf(num1)
            resultArray[1] = nums.indexOf(num2)
            
        }
    }
    return resultArray
}

let nums = [2, 7, 11, 15]
let target = 9
console.log(twoSum(nums, target))

//Comment: This is my first try, it's a O(n^2) so the time complexity is not ideal. 

//APPROACH 2 - ES6 solution

const twoSum2 = (nums, target) => {
    const map = new Map()
    for ( let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])){
            return [map.get(target - nums[i]), i] // get index of the first and second number
        } else {
            map.set(nums[i], i) // if you don't find second number in the map, you set the first one there, with its index as value
        }
    }
    return []
}

let nums2 = [2, 7, 11, 15]
let target2 = 18
console.log(twoSum2(nums2, target2))

//APPROACH 3 - refactor the APPROACH 2

const twoSum3 = (nums, target) => {
    const map ={}
    for ( let i = 0; i < nums.length; i++) {
        const number = nums[i]
        if (map[target - number] !== undefined) {
            return [map[target - number], i]  //when iterating in second round, the number will become the second, so [target-number] is actually the first number
        } else {
            map[number] = i
        }
    }
    return []
}

let nums3 = [2, 7, 11, 15]
let target3 = 26
console.log(twoSum2(nums3, target3))

//Comment: Approach 2 and 3 are very similar, both use hash table, and both are O(n). 