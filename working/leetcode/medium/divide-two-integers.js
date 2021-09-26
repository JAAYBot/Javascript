/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    const max = Math.trunc(Math.pow(2, 31) - 1);
    const min = -Math.trunc(Math.pow(2, 31));
    
    console.log("min: ", min, ", max: ", max);
        
    if (divisor === -1 && dividend === min)
        return max;
    
    const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
    
    console.log("sign: ", sign);
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    console.log("dividend: ", dividend, ", divisor: ", divisor);
    
    let result = 0;
    
    while(dividend - divisor >= 0) {
        result++;
        dividend = dividend - divisor;
    }
    
    return sign ? Math.min(result, max) : Math.max(-result, min);
};