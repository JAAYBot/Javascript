/*
count number of fives
*/

/**
 * @param {number} n
 * @return {number}
 */
 function trailingZeroes(n) {
    let count = 0;
     
     while(n > 0){
         n = n/5 | 0;   
         count+=n;
     }
   
     return count;
 };