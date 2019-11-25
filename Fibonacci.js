// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//Approach 1
function fibonacciIterative(n){
    let arr = [0, 1]
    for (let i = 2; i < n +1; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}

console.log('fib iterative', fibonacciIterative(8))

//Approach 2
  
function fibonacciRecursive(n) {
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n -1) + fibonacciRecursive(n -2)
}
  
console.log('fib recursive', fibonacciRecursive(8))

//Note: the iterative function has O(n) but recursive one has O(2^n). It will take a lot of time as the number grows so it's not ideal in this case even it looks simpler. 

//Approach 3 

const fibonacciMaster = () => {
    let cache = {}
    return function fib(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2 ){
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}

const fasterFib = fibonacciMaster()

console.log('faster fib master', fasterFib(8))

//Note: in fibonacciMaster we use dynamic programming to cache the value, so we don't end up recalculating over and over. This will be much faster then the recursive above. It will be O(n). 

//Approach 4
const fibonacciMaster2 = (n) => {
    let answer = [0, 1]
    for (let i =2; i <=n; i ++) {
        answer.push(answer[i-1] + answer[i-2])
    }
    return answer.pop() //take the last item of the array
}

console.log('fib master-2:', fibonacciMaster2(8))