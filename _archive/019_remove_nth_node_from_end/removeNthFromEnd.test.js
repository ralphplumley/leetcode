const removeNthFromEnd = require('./removeNthFromEnd')

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

describe('19. Remove Nth node from end', () => {
  it('should return [1, 2, 3, 5] with input of ([1, 2, 3, 4, 5], 2)', () => {
    const head = createLinkedList([1, 2, 3, 4, 5])
    const n = 2
    const expectation = createLinkedList([1, 2, 3, 5])
    const result = removeNthFromEnd(head, n)
    expect(result).toEqual(expectation)
  })

  it('should return [] with input of ([1],1)', () => {
    const head = createLinkedList([1])
    const n = 1
    const expectation = null
    const result = removeNthFromEnd(head, n)
    expect(result).toEqual(expectation)
  })

  it('should return [2] with input of ([1,2],2)', () => {
    const head = createLinkedList([1, 2])
    const n = 2
    const expectation = createLinkedList([2])
    const result = removeNthFromEnd(head, n)
    expect(result).toEqual(expectation)
  })
})
