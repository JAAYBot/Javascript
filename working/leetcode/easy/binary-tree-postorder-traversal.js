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
 var postorderTraversal = function(root) {
    if(!root) return [];
    
    let ans = [];
    
    return helper(root, ans);
    
    function helper(node, ans){
        
        if(!node) return ans;
        
        if(node.left)
            helper(node.left, ans);
        
        if(node.right)
            helper(node.right, ans);
        
        ans.push(node.val)
        
        return ans
    }
    
};