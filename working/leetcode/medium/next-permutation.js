/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    
    //find peak
    let peak;
    
    for(let i = nums.length-1; i >= 0; i--){
        if(i === 0) peak = 0;
        
        if(nums[i] > nums[i - 1]){
            peak = i;
            break;
        }
        
    }
    
    
    console.log("peak: ",peak);
    
    for(let j = nums.length - 1; j >= 0; j--){
        if(nums[j] > nums[peak - 1]){
            let temp = nums[j];
            nums[j] = nums[peak - 1];
            nums[peak - 1] = temp;
            break;
        }
    }
    

    console.log("Nums: ", nums.join(','));
    
    let start = peak;
    let end = nums.length - 1;
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    
    console.log("Nums: ",nums.join(','));
    
    return nums;
};