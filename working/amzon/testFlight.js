'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER flightDuration
 *  2. INTEGER_ARRAY movieDuration
 */

function foo(flightDuration, movieDuration) {
    console.log("mD:", movieDuration);
    console.log("FD:", flightDuration);
    console.log("FD2:", flightDuration-30);
    
    // Write your code here
    let myMap = new Map();
    let successfulMatch = new Map();
    let filmTime = flightDuration-30;
    
    for(let i = 0; i < movieDuration.length; i++){ 
        if(myMap.has(movieDuration[i])){
            let tempKey = movieDuration[myMap.get(movieDuration[i])] > movieDuration[i] ? movieDuration[myMap.get(movieDuration[i])] : movieDuration[i];
            if(!successfulMatch.has(tempKey)){
                 successfulMatch.set(tempKey, [myMap.get(movieDuration[i]), i]);
            }
        }
        let temp3 = i;
        if(myMap.has(movieDuration[i])){
            temp3 = myMap.get(movieDuration[i]);
        }
          
        myMap.set(filmTime - movieDuration[i], temp3);
    }
     
    if(successfulMatch.size === 0)
        return [-1, -1];
        
    let tempKey = 0;
    
    for( let [key, value] of successfulMatch){
        if(key > tempKey)
            tempKey = key;
    }

    return successfulMatch.get(tempKey);

}
function main() {}