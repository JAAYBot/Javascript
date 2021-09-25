/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let ans = 0;
    let mySet = new Set();
    let p1 = 0; 
    let p2 = 0; 
    while(p1 < s.length && p2 < s.length){
        if(mySet.has(s.charAt(p1))){
            mySet.delete(s.charAt(p2));
            p2++;
        }  
        else{            
            mySet.add(s.charAt(p1));
            p1++;
        }
            
        if(p1 - p2 > ans)
            ans = p1-p2;
    }
    
    return ans;
    
};