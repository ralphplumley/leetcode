/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  let aFlag = false;
  let bFlag = false;

  while (a && b) {
    if (a === b) return a;

    // increment A
    if (a.next) {
      a = a.next;
    } else {
      if (aFlag) {
        return null;
      } else {
        aFlag = true;
        a = headB;
      }
    }

    // increment B
    if (b.next) {
      b = b.next;
    } else {
      if (bFlag) {
        return null;
      } else {
        bFlag = true;
        b = headA;
      }
    }
  }
};
