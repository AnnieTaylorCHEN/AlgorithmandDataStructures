// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

//Built on LinkedListV2

const fromLast = (list, n) => {
    let slow = list.getFirst()
    let fast = list.getFirst()

    //first move the fast node to the n number, so fast node can start from here (ahead of slow node)
    while(n > 0) {
        fast = fast.next
        n --
    }
    //as long as fast.next is null, we hit the end of the chain, then slow must be one element behind the number
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}