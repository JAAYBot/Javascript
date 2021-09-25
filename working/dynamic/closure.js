//Example of closure pattern


function memoizedAddTo80(){
    let cache = {};

    return function(n){
        if(n in cache){
            console.log("Accessing cache");
            return cache[n];
        }else{
            console.log("Long calculation");
            cache[n] =  80+n;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();


console.log("5-1: ", memoized(5));
console.log("5-2: ", memoized(5));
console.log("6-1: ", memoized(6));
console.log("6-2: ", memoized(6));
