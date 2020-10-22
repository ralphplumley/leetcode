/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let dummy = new ListNode()
  dummy.next = head
  let node = head 
  
  while (node) {
    if (node.next === null) break
    let tmp = new ListNode()
    if (node.next.next) {
      tmp.next = node.next.next
      node.next.next = dummy.next
      dummy.next = node.next
      node.next = tmp.next
    } else {
      node.next.next = dummy.next
      dummy.next = node.next
      node.next = null
    }
  }
  
  return dummy.next
};
