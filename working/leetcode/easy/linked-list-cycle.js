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
 var hasCycle = function(head) {
    const mySet = new Set();
    let temp = head;
    while(temp !== null){
        if(mySet.has(temp))
            return true;
        
        mySet.add(temp);
        temp = temp.next;
    }
    
    return false;
};