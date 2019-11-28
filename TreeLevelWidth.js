// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const levelWidth = (root) {
    //creat a string named "s" as a stopper/marker to work on the queue
    const arr = [root, 's']
    const counters = [0]
    //basically when the last one in the array is "s", then we don't do anything
    while(arr.length > 1) {
        const node = arr.shift()
        //when we see our marker "s", it means it's the beginning of a new level, so we need to push a new counter for this level, then we push the "s" to the end of the array
        if (node === 's'){
            counters.push(0)
            arr.push('s')
        } else {
            //if we are working with an actual node, and if it has children, we want to push all its children to end of the array, then we increment the LAST value of the counter (representing the current level of the tree)
            arr.push(...node.children)
            //regardless it has children or not, the counter will increment by 1
            counters[counters.length -1]++
        }
    }
    return counters
}