/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let a = head;
  let b = head;
  let start = true;

  if (!a || !a.next) return false;

  while (a) {
    if (b.next === null || b.next.next === null) return false;
    if (b === a && !start) return true;

    a = a.next;
    b = b.next.next;

    start = false;
  }
};
