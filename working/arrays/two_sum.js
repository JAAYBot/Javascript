

let nums = [2,11,15,-2];
let target = 9;

//add that is needed to map, then when found return

function twoSum(nums, target){

    let mymap = new Map();

    for(let i = 0; i < nums.length; i++){

        if(mymap.has(nums[i])){
            return [mymap.get(nums[i]), i];
        }

        mymap.set(target - nums[i], i);

    }

    return [];
}

console.log(twoSum(nums, target));