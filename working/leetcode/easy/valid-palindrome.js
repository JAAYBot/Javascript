var isPalindrome = function(s) {
    
    s = s.replace(/[\W_]+/g,"").replace(/\s+/g, '').toLowerCase();
    
    console.log(s);
    
    let i = 0, j = s.length-1;
    
    while(i<j){
        if(s[i] !== s[j])
            return false;  
        i++;
        j--;
    }
    
    return true;    
};