

var sortedArrayToBST = function(nums) {

    return helper(nums);
    
    function helper(nums_array){
        if(!nums_array.length) return null;
        
        let mid = (nums_array.length/2) | 0;
        
        let current = new TreeNode(nums_array[mid]);
        
        current.left = helper(nums_array.slice(0, mid));
        current.right = helper(nums_array.slice(mid + 1));
        
        return current;

    } 
    
    
};