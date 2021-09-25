/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(s.length <= numRows || numRows < 2) return s;
      
    let arr = new Array(numRows).fill('');    
    let direction = 1;
    let j = 0;
    
    for(let i = 0; i < s.length; i++){      
        if(j === 0) 
            direction = 1;
        
        if(j === numRows-1)
            direction = -1;
        
    
        arr[j] += s[i];
        j += direction;
        
    }
    
    return arr.join('');
    
};