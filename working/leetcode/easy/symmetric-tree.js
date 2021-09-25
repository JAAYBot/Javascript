

var isSymmetric = function(root) {
    if(!root) return true;
    
    return helper(root.left, root.right);
    
    function helper(left, right){
        if(!left || !right)
            return left === right;
        
        if(left.val !== right.val)
            return false;
        
        return helper(left.left, right.right) && helper(left.right, right.left);
        
    }    
};
