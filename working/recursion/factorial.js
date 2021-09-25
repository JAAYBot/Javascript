

function factorial(target){
    if(target === 1){
        return target;
    }

    return target * factorial(target-1);
}

function factorial2(target){
    let ans = 1;
    while(target>= 1){
        ans = ans * target;
        target--;
    }

    return ans;
}


console.log(factorial(5));
console.log(factorial2(5));

console.log(factorial(1));
console.log(factorial2(1));

console.log(factorial(2));
console.log(factorial2(2));