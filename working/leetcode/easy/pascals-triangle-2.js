/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let ansArray = [];
    let oldArray = [1];      
    let i = 1;
    
    while(i<= rowIndex+1){
        let newArray = [];
        
        for(let j = 0; j < i; j++){
            let k = oldArray[j] ? oldArray[j] : 0 ;
            let l = oldArray[j-1] ? oldArray[j-1] : 0 ;
            newArray.push(k+l);
        }

        ansArray.push(newArray);
        oldArray = newArray;  
        i++;
    }
    
    return ansArray[ansArray.length-1];
    
};

console.log(getRow(3));