

function rotateArray(nums, k){
    for(var i = 0 ; i < k ; i++)
        nums.unshift(nums.pop());

    return nums
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));