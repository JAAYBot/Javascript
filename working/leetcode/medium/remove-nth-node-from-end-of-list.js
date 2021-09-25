/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {        
    let size = helper(head, n+1);

    if(n === size)
        return head.next;
    else
        return head;
    
    function helper(node, target){
        let ans = 1;
        if(node)
            ans += helper(node.next, target)   
        else
            return 0;
        
        if(ans === target)
            node.next = node.next.next;
            
        return ans;        
    }
};