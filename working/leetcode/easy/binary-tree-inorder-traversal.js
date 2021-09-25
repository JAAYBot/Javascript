


var inorderTraversal = function(root) {

    const ans = [];

    helper(root);

    return ans;

    function helper(node){
        if(!node)return;
        
        if(node.left)
            helper(node.left);

        ans.push(node.value);

        if(node.right)
            helper(node.right);

    }
    
};