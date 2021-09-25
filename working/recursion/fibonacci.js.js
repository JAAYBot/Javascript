// 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12,
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .....

// Exponetial Time

// current = n-1 + n-2

function fibonacci(target){
    console.log("T: ", target);
    if(target <= 1){
        return target;
    }
   
    return fibonacci(target-1) + fibonacci(target-2);
}

function fibonacciArr(target){
    let arr = [0, 1];

    for(i = 2; i <= target; ++i){
        arr.push(arr[i-2]+arr[i-1]);
    }

    return arr[target];

}


function fibonacci2(target){
    let current = 1;
    let previous = 0;
    let ans = 0;
    //console.log(ans);
    for(let i = 1; i<target; i++){
        ans = current + previous;
        previous = current;
        current = ans;
        //console.log(ans); 

    }
    return ans;
}



console.log(fibonacci(8));
console.log(fibonacci2(8));
console.log(fibonacciArr(8));