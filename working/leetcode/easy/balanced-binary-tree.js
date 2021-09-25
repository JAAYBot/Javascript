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
 * @return {boolean}
 */

//O(n2)
 var isBalanced = function(root) {
    if(!root) return true; 
    if( Math.abs(height(root.left) - height(root.right)) > 1) return false;  
    return isBalanced(root.left) && isBalanced(root.right);

    function height(node){
    if(node === null) return 0;
    return Math.max(height(node.left), height(node.right)) +1;
    }     
};


/// O(n) Better --> 
var isBalanced = function(root) {
    if(!root) return true; 
    return height(root) != -1;


    function height(node){
        if(!node) return 0;
        let left = height(node.left);
        let right = height(node.right);
        let bf = Math.abs(left-right);
        
        if(bf > 1 || left === -1 || right === -1 ) return -1;
        return 1 + Math.max(left, right);
    }
          
};