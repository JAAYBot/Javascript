let calculations1=0, calculations2=0;

function fibonacci(n){
    calculations1++;
    if(n < 2)
        return n;
    else{
        //console.log("Long Time ......");
        return  fibonacci(n-1) + fibonacci(n-2);
    }
       
}

function fibonacciCache(){
    let cache = {}
    
    return function fibHelper(n){
        calculations2++;
        if(n in cache)
            return cache[n];
        else{
            if(n < 2 ){
                //console.log("instant");
                return  n;
            }else{
                //console.log("Long Time ......");
                cache[n] = fibHelper(n-1) + fibHelper(n-2)
                return  cache[n];
            }
        }
        
    }
}

const fibCache = fibonacciCache();

var t0 = performance.now();
console.log("fib: ", fibonacci(21));
var t1 = performance.now();
console.log("Call to fibonacci() took " + (t1 - t0) + " milliseconds.");
console.log("Number of calculations: " + calculations1);
console.log("------------------------------------");
var t2 = performance.now();
console.log("fibCache: ", fibCache(21));
var t3 = performance.now();
console.log("Call to fibonacciCache() took " + (t3 - t2) + " milliseconds.");
console.log("Number of calculations: " + calculations2);