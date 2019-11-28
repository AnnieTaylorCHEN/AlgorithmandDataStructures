// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const BSTvalidate = (node, min = null, max = null) => {
    //any time we move to the left, we will see max updated, any time we move to the right, we will see the min updated, as we traverse through the tree

    //if we found any left child, then max will be reset to the parent's value(not null any more), we then check if the node is less than the max (parent)
    if (max !== null && node.data > max ) {
        return false
    }
    //if we found any right child, then the min will be reset to the parent's value(not null any more). we then check if the node is more than min (parent)
    if (min !== null && node.data < min) {
        return false
    }

    //if any left hand child exists, then we go through recursion 
    if (node.left && !BSTvalidate(node.left, min, node.data)){
        return false
    }

    //if any right hand child exists, then we go through recursion
    if (node.right && !BSTvalidate(node.right, node.data, max)) {
        return false
    }

    return true
}