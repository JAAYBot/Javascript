/* Find all anagrams in string and return array of starting positions
*   eg 
*   "cbaebabacd"
*   "abc"
*    return [0, 6]
*/

function findAnagrams(s, p){
    if( s.length == null || p.length == null || s.length == 0 || p.length == 0 || s.length < p.length ) return [];
    let ans = [];
    let chars = new Map();
    let diff = p.length;
    let i = 0, j = 0, k= 0;

    for(; k < p.length; k++) chars.set(p[k], chars.get(p[k])+1 || 1);

    for(;i<s.length; i++){
        while((i-j+1)>p.length){       
            chars.set(s[j], chars.get(s[j])+1);
            if(chars.get(s[j]) > 0) diff++;
            j++;
        }

        chars.set(s[i], chars.get(s[i])-1);
        if(chars.get(s[i]) >= 0) diff--;
        if(diff == 0) ans.push(j);

    }
    return ans;
}


//chars.set(s[i], (chars.get(s[i]) || 0)-1);
//chars.set(s[j], (chars.get(s[j]) || 0)+1);

//console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abcabc", "abc"));
//onsole.log(findAnagrams("0123456789", "abc"));
//console.log(findAnagrams("abcdefghijklmnop", "abc"));

console.log(findAnagrams("abcxxxabc", "abc"));


console.log(findAnagrams("cbaebabacd", "abc"));

//console.log( 1 || 2);
//console.log(-10 || 10);
//console.log(null || 1);
//console.log(1 || null);
//console.log( 0 || 12);
//console.log( 0 || 12);
//console.log(undefined + 10);
//console.log(undefined);
//console.log(null + 10);



/*
if(undefined >=0 ){
    console.log(true);
}else{
    console.log(false);
}*/