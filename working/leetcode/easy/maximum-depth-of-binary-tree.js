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
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root) return 0;
    
    return helper(root);
    
    function helper(node){
        if(node === null) return 0;
        
        return Math.max(helper(node.left)+1, helper(node.right)+1);
        
    }
    
};