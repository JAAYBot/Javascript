/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(n) {  
    let dictionary = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let str = '';
    
    while(n>26){
        str = dictionary[n%26 || 26]+str;
        n = Math.ceil(n/26) - 1
    }

    return dictionary[n]+str;
    
};