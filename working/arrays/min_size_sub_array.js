

function minSizeSub(target, nums){
    if(nums == null || nums.length == 0) return 0;
    let ans = Number.POSITIVE_INFINITY, sum = 0;
    let right = 0, left = 0;
    for(; right < nums.length; right++){
        sum += nums[right];
        while(sum>=target){
            ans = Math.min(ans, right-left+1);
            sum -= nums[left];
            left++;
        }
    }
    return ans != Number.POSITIVE_INFINITY ? ans : 0;
}

console.log(minSizeSub(7, [2,3,1,2,4,3]));
console.log(minSizeSub(4, [1,4,4]));
console.log(minSizeSub(11, [1,1,1,1,1,1,1,1]));
console.log(minSizeSub(5, [2,0,1,2,1,1,10]));

console.log(minSizeSub(7, [2,3,1,2,4,3]));
console.log(minSizeSub(4, [1,4,4]));
console.log(minSizeSub(11, [1,1,1,1,1,1,1,1]));
console.log(minSizeSub(5, [2,0,1,2,1,1,10]));
console.log(minSizeSub(10, [4]));
console.log(minSizeSub(10, []));
console.log(minSizeSub(10, ));