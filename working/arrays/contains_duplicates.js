

function containsDuplicates(nums){
    let mySet = new Set();
    let i = 0;

    for(;i<nums.length;i++){
        if(mySet.has(nums[i]))
            return true;

        mySet.add(nums[i]);
    }

    return false

}

console.log(containsDuplicates([1,2,3,1]));

console.log(containsDuplicates([1,2,3,4]));

console.log(containsDuplicates([1,1,1,3,3,4,3,2,4,2]));