const reverseLinkedListIter = require('./iter')

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
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
  
const linkedListAsArray = node => {
let output = []

while (node.next !== node) {
    output.push(node.val)
    node = node.next
}

return output
}

describe('206. Reverse Linked List', () => {
    
    xit('', () => {
        // todo
    })

})