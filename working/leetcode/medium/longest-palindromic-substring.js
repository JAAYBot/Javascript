
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let temp = "", max = "";

    for(let i = 0; i<s.length; i++){        
        
        temp = expandAndCount(s, i, i+1);
        if(temp.length > max.length)
            max = temp;
        
        temp = expandAndCount(s, i, i);
        if(temp.length > max.length)
            max = temp;
        
    }
    

    return max;
    
    function expandAndCount(str, start, end) {
        for (;start >= 0 && end < str.length && str[start] === str[end];start--, end++){}

        return str.slice(start+1, end)

    }
};




console.log("----->", expandAndCount("ikabbagh", 3, 4));

console.log("----->", expandAndCount("ikabagh", 3, 3));