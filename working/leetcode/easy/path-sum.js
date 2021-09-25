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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let leaf = false;

    helper(root, 0);
    return leaf;

    function helper(node, sum) {
        if (leaf === true) return
        if (!node) return;

        if (node.left)
            helper(node.left, sum + node.val);

        if (node.right)
            helper(node.right, sum + node.val);

        if (!node.left && !node.right) {
            console.log("Node.val: ", node.val, ", Sum: ", sum + node.val);
            if (sum + node.val === targetSum)
                leaf = true;
        }

        return;
    }


};

var hasPathSum = function(root, targetSum) {
    return helper(root, 0, targetSum);
    
    function helper(node, sum, target) {
    if (!node) return false;

    sum += node.val;
    
    if (node.left === null && node.right === null)
        return sum === target;
    
    return helper(node.left, sum, target) || helper(node.right, sum, target);
    }
};