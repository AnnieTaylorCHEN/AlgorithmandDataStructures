// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head
      this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode ={
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this 
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null ) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
    }

    insert(index, value) {
        while (this.length < index ) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null 
        }
        const leader = this.traverseToIndex(index-1) //the leader is the node before the on you intend to insert
        const holdingPointer = leader.next //get the pointer from the leader, which was originally pointed to the next one (now becoming the next after your insert)
        leader.next = newNode //make the leader node point to the one you intend to insert
        newNode.next = holdingPointer // make your inserted node point to the original one which was next to the leader (now becoming the one after yours)
        this.length++ //add one more node
        return this.printList()
    }
    
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next 
            counter++
        }
        return currentNode //this loops from the beginning to the node that's before the one you intend to insert, and return that one
    }

    remove (index) {
        const leader = this.traverseToIndex(index -1)
        // const follower = this.traverseToIndex(index + 1)
        // leader.next = follower
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length --
        return this.printList()
    }

    reverse () {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = this.head.next
        while (second) {
            const temp = second.next
            second.next = first 
            first = second 
            second = temp 
        } //during this loop, we are checking by pair, 1+2, 2+3, 3+4, etc. Every time we do, we make sure the second.next points to the first. We are not moving them around like we do in array, we're simply changing/reversing the pointers.
        this.head.next = null
        this.head = first
        return this 
    }
}
  
let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.prepend(3)
//   console.log(myLinkedList)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.remove(4) 
myLinkedList.reverse()
myLinkedList.printList()


console.log('below is doubly linked list.')
//Making a doublyLinkedList
class doublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head
      this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null, 
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode ={
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this 
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null ) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
    }

    insert(index, value) {
        while (this.length < index ) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null, 
            prev: null
        }
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode 
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
        this.length++ 
        return this.printList()
    }
    
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next 
            counter++
        }
        return currentNode //this loops from the beginning to the node that's before the one you intend to insert, and return that one
    }

    remove (index) {
        const leader = this.traverseToIndex(index -1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length --
        return this.printList()
    }
}

let myDoublyLinkedList = new doublyLinkedList(10)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.prepend(1)
myDoublyLinkedList.printList()
myDoublyLinkedList.insert(2, 99)
myDoublyLinkedList.remove(4)
