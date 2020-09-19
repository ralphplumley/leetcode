const removeNthFromEnd = (head, n) => {
  // we want a temp head in case n is the same length as head
  let tempHead = new ListNode(0)
  tempHead.next = head

  let slow = tempHead
  let fast = tempHead

  // set fast pointer to n+1 spots ahead
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  // update pointer to remove nth spot
  slow.next = slow.next.next

  return tempHead.next
}

module.exports = removeNthFromEnd
