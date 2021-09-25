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
 var getIntersectionNode = function(headA, headB) {
    let nodeA = headA, nodeB = headB;
    let mySet = new Set();
    while(nodeA || nodeB){
        if(mySet.has(nodeA))
            return nodeA;
         
        if(nodeA)
            mySet.add(nodeA);
        
        if(mySet.has(nodeB))
            return nodeB
        
        if(nodeB)
         mySet.add(nodeB);
        
        nodeA = nodeA ? nodeA.next : null;
        nodeB = nodeB ? nodeB.next : null;
    }

    
    return null
};