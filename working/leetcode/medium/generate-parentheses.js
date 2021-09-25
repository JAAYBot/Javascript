/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];
    bfs("", 0, 0);
    return result;
        
    function bfs(str, left, right){       
        if(left === n && right === n){
            result.push(str);
            return;
        }
        
        if(left !== n){
           bfs(str+'(', left+1, right)
         }
           
         
        if(left > right){
           bfs(str+')', left, right+1)
         }
 
    }
};