

var isPalindrome = function(x) {
    str = x.toString();
    console.log("str: ", str);
    if(str.length == 1) return true;
    if(str[0] === '-') return false;
    
    for(let i = 0, j = str.length-1; i<=j; i++, j--){
        console.log(str[i],  " : ", str[j]);
        if(str[i] !== str[j])
            return false;
    }

    return true;
    
};

let x;

x = 121
console.log(isPalindrome(x));
x = -121
console.log(isPalindrome(x));
x = 10
console.log(isPalindrome(x));
x = -101
console.log(isPalindrome(x));