

//Kadane’s Algorithm
function maxSubArr(nums){
    let max = Number.NEGATIVE_INFINITY;
    curr = 0;
        
    for(let i=0;i<nums.length;i++){

        curr += nums[i];
        
        if(max < curr)
            max = curr;
        if(curr < 0)
            curr = 0;

    }
    return max;
}

function minSumArray(nums){
    let max  = Number.POSITIVE_INFINITY;
    let cur = 0;

    for(let i = 0; i < nums.length; i++){
        cur += nums[i];
        if(max>cur)
            max = cur
        if(cur>0)
            cur = 0;
    }

    return max
}


console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]));

console.log(maxSubArr([-2,1,-3,4,-1,2,2,-3,4]));


console.log(maxSubArr([-2,-1,-4]));

console.log(maxSubArr([-1]));