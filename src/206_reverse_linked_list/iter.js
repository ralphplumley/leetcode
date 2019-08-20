class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const reverseLinkedListIter = (head) => {
    let prev = null
    let curr = head
    let next = null

    while (curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

const reverseLinkedListRecursive = (head) => {
    if (head === null || head.next === null) {
        return head
    }

    let reversed = reverseLinkedListRecursive(head.next)
    head.next.next = head
    head.next = null
    return reversed
}

const createLinkedList = arr => {
    let head = new ListNode(arr[0])
    let currentNode = head
  
    for (let i = 1; i < arr.length; i++) {
      if (i === 1) {
        head.next = new ListNode(arr[i])
        currentNode = head.next
      } else {
        currentNode.next = new ListNode(arr[i])
        currentNode = currentNode.next
      }
    }
  
    return head
  }

let ll = createLinkedList([1,2,3,4,5])
console.log(reverseLinkedListRecursive(ll))

module.exports = reverseLinkedListIter
