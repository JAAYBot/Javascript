/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let dictionary = new Map([
    ['A', 1], ['B', 2], ['C', 3], ['D', 4], ['E', 5],
    ['F', 6], ['G', 7], ['H', 8], ['I', 9], ['J', 10],
    ['K', 11], ['L', 12], ['M', 13], ['N', 14], ['O', 15],
    ['P', 16], ['Q', 17], ['R', 18], ['S', 19], ['T', 20],
    ['U', 21], ['V', 22], ['W', 23], ['X', 24], ['Y', 25],
    ['Z', 26]]
    );
        
    let size = columnTitle.length-1;
    let num = 0, i = 0;

    while(i < size){       
        num += dictionary.get(columnTitle[i]) * (Math.pow(26, size - i))
        i++;
    }
    
    return num+dictionary.get(columnTitle[i]);

};

/// try better way now

