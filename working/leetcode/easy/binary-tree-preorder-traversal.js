/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if(!root) return [];
    let ans = [];
    
    helper(root, ans)
    
    return ans
    
    function helper(node, ans){
        if(!node) return;
        
        ans.push(node.val)
        
        if(node.left)
            helper(node.left, ans)
        
        if(node.right)
            helper(node.right, ans);
        
        return
        
    }
    
    
};