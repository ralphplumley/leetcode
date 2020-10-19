/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // Phase 1
  let a = head;
  let b = head;
  let start = true;

  if (!a || !a.next) return null;

  while (a) {
    if (b.next === null || b.next.next === null) return null;
    if (b === a && !start) break;

    a = a.next;
    b = b.next.next;

    start = false;
  }

  // Phase 2
  a = head;

  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};
