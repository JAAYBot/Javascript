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
 var addTwoNumbers = function(l1, l2) {
    
    let list1 = helper(l1, []);
    let list2 = helper(l2, []);
      
    let ans = (BigInt(list1.join("")) + BigInt(list2.join(""))).toString();
    
    let head;
    let temp;
    
    console.log("ANS: ", ans);
        
    for(let i = ans.length-1; i >= 0 ; i--){    
        if(!head){
            head = new ListNode(ans[i], null);
            temp = head;
        }else{
            temp.next = new ListNode(parseInt(ans[i]), null);
            temp = temp.next; 
        }
    }
            
    return head;
        
    function helper(node, arr){
        if(!node) return arr;
        
        helper(node.next, arr);   
        arr.push(node.val);
                    
        return arr;
     
    }
    
};