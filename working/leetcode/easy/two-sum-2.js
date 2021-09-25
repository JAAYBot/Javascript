/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
     
    let myMap = new Map();
    
    for(let i = 0; i < numbers.length; i++){
        if(myMap.has(numbers[i])){
            return [ myMap.get(numbers[i])+1, i+1];
        }
        
        myMap.set(target-numbers[i], i);
          
    }
    
    return -1;
    
};