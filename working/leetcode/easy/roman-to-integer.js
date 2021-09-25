
var romanToInt = function(s) {
    let myMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    
    let ans = 0, cur = 0, prev = 0;
    
    for(let j = s.length-1; j >= 0; j--){
        cur = myMap[s[j]];
        console.log("1: ", cur);
        cur < prev ? ans -= cur : ans += cur;
        console.log("2: ", ans)
        prev = cur;
    }
    
    return ans;
};

s = "IV"

console.log(romanToInt(s));