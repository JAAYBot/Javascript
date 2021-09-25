/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let l3 = new ListNode();
    let head = l3;


    while (l1 && l2) {
        if (l1.val <= l2.val) {
            l3.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            l3.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        l3 = l3.next;

    }


    if (l1)
        l3.next = l1;
    else
        l3.next = l2;

    return head.next

};