
//sliding window, remember, outer loop slides right first

function longestUnique(str){
    if(str == null || str.length == 0) 
        return 0;

    let max = 0, i = 0, n = 0;
    let myset= new Set();

    // outer loop is for right pointer
    for(; n < str.length; n++){
        let c = str[n];
        // inner loop for left pointer
        while(myset.has(c)){
            myset.delete(str[i]);
            i++;
        }
        myset.add(c);
        max = Math.max(n-i+1, max);
    }

    return max;
}

console.log(longestUnique("abceabcbb"));