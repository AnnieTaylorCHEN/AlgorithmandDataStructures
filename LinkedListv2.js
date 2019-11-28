class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedListV2 {
    constructor(){
        this.head = null 
    }

    //insert a node and put it as the first(head)
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    //find out how many nodes are in linked list
    size(){
        let counter = 0 
        let node = this.head
        while (node) {
            counter ++
            node = node.next
        }
        return counter
    }

    //get the first node in the linked list
    getFirst() {
        return this.head
    }

    //get the last node in the linked list
    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head
        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }

    //clear all the nodes - remove the linking
    clearList() {
        this.head = null
    }

    //remove the first node - relink it to the second 
    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }
    

    //remove the last node
    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return 
        }
        let previous = this.head
        let node = this.head.next
        while (node.next) {
            previous = node
            node = node.next
        }
        previous.next = null 
    }

    //insert last node 
    insertLast() {
        const last = this.getLast()
        if (last) {
            //there are some existing nodes in the linked list
            last.next = new Node(data)
        } else {
            //the chain is empty
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let counter = 0
        let node = this.head
        while(node){
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next
            return 
        }

        const previous = this.getAt(index - 1)
        if (!previous || !previous.next) {
            return
        }
        previous.next = previous.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return 
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return 
        }

        const previous = this.getAt(index -1 ) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node 
    }

    *[Symbol.iterator] () {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }

}

const list = new LinkedListV2()
list.head = new Node(10)