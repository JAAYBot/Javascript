


function moveZeros(nums){
    let size = nums.length;
    let i = 0;
    for(; i < size; ){
        console.log("i: ", i);
        if(nums[i] == 0){
            nums.push(0);
            nums.splice(i, 1);
            size--;
        }else{
            i++;
        }
    }

    return nums
}

console.log(moveZeros([0,0,1,2,3,0,4]));