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
 var minDepth = function(root) {
    if(!root || root.length < 1) return 0;
    return height(root);
    
    function height(node){
        if(!node) return 0;
        
        let left = height(node.left);
        let right = height(node.right);
        
        if(left === 0 || right === 0)
           return 1 + Math.max(left, right);
        
        return 1 + Math.min(left, right);
    }

};

