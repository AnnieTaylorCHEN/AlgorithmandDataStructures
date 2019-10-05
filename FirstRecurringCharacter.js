//Given array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
//output = 2

//Given array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
//output = 1

//Given array = [2, 3, 4, 5]
//output = undefined

/*
* nums = [numbers]
* output = a number or undefined
*/

const firstRecurringCharacter = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i]
        } else {
            map.set(nums[i])
        }
    }
}

let array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
let array3 = [2, 3, 4, 5]
console.log(firstRecurringCharacter(array1))
console.log(firstRecurringCharacter(array2))
console.log(firstRecurringCharacter(array3))