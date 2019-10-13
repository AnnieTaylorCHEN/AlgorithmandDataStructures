class Node {
    constructor(value){
      this.left = null
      this.right = null
      this.value = value
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null
    }

    insert(value){
      const newNode = new Node(value)
      if (this.root === null) {
        this.root = newNode
      } else {
        let currentNode = this.root
        while(true) {
          if (value < currentNode.value) {
              if (!currentNode.left) {
                currentNode.left = newNode
                return this
              } 
              currentNode = currentNode.left
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode
              return this
            }
            currentNode = currentNode.right
          }
        }
      }
    }
    //even we have while loop, we don't loop through every item, it's divide and conquer, and each time you will have less items to loop through, it either goes left or right
    lookup(value){
      if (!this.root) {
        return false
      }
      let currentNode = this.root
      while(currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if ( value > currentNode.value) {
          currentNode = currentNode.right
        } else if (currentNode.value === value ) {
          return currentNode
        }
      }
      return false 
    }
    remove(value) {
      if (!this.root) {
        return false 
      }

      let currentNode = this.root
      let parentNode = null 

      while(currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          parentNode = currentNode
          currentNode = currentNode.right
        } else if (currentNode.value === value) {
          //we found a match here.
          //option 1: no right child
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left
                //if parent < current value, make left child a right child of a parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left
              }
            }
            //option 2: right child which doesn't have a left child
          } else if (currentNode.right.left === null) { 
            if (parentNode === null) {
              this.root = currentNode.left
            }else {
              currentNode.right.left = currentNode.left
              //if parent > current, make right child the left child of the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right
                //if parent < current, make the right child the right child of the parent
              } else if (currentNode.value > parentNode.value){
                parentNode.right = currentNode.right
              }
            }
            //Option 3: right child that has a left child
          } else {
            //find the right child's left most child
            let leftmost = currentNode.right.left
            let leftmostParent = currentNode.right
            while (leftmost.left !== null ) {
              leftmostParent = leftmost
              leftmost = leftmost.left
            }
            //parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right
            leftmost.left = currentNode.left
            leftmost.right = currentNode.right

            if (parentNode === null) {
              this.root === leftmost
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost
              }
            }
          }
          return true
        }
      }
    }
  }
  
  const tree = new BinarySearchTree()
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
  }