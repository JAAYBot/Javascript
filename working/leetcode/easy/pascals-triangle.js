
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let ansArray = [[1]];
    let oldTemp =[1];
    let i = 2;
    while(i <= numRows){  
        let newTemp = [];   
        for(let j = 0; j < i; j++){
            let k = oldTemp[j-1] ? oldTemp[j-1] : 0;
            let l = oldTemp[j] ? oldTemp[j] : 0
            newTemp.push(k+l);
        }
        ansArray.push(newTemp);    
        oldTemp = newTemp;
        i++;
    }    

    return ansArray;
};

console.log(generate(5));