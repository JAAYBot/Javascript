

var reverse = function(x) {
    const MIN = -214748364.8; //minimum signed int / 10
    const MAX = 214748364.7; //maximum signed int / 10

    var digit, result = 0

    while( x ){
        console.log("x:", x);
        digit = x % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        console.log("digit:", digit);
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        console.log("result:", result);

        
        if (result > MAX || result < MIN) return 0;
        
        x = x/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    }  
  
    return result  
};


//console.log(reverse(123));
//console.log(reverse(-123));
//console.log(reverse(120));
//console.log(reverse(0));


console.log(1/10|0);
console.log(12|0);
console.log(1.5|0);
console.log(-10.4|0);


1534236469
9646324351