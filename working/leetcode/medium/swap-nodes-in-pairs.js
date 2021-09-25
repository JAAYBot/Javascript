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
 var swapPairs = function(h) {
    return swap(h);
    
    function swap(head){
        if(!head || !head.next) return head; 
        
        let node1 = head;
        let node2 = node1.next;
             
        node1.next = node2.next;
        node2.next = node1;
        head = node2;
        
        node1.next = swapPairs(node1.next);
        
        return head;
    }
    
};