
function rob(nums) {
    if (!nums.length) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);


    let cache = [];
    cache.push(nums[0]);
    cache.push(nums[1]);

    for (let i = 2; i < nums.length; i++) {
        cache.push(Math.max(nums[i] + cache[i - 2], nums[i] + (cache[i - 3] || 0)));
    }

    console.log(cache);
    return Math.max(cache[nums.length - 1], cache[nums.length - 2]);

};

function robTwo(nums) {
    let cache = {};

    return helper(nums, nums.length - 1);

    function helper(nums, i) {

        if (i in cache) {
            return cache[i];
        }
        else {
            if (i < 0) {
                return 0;
            }
            else {
                cache[i] = Math.max(helper(nums, i - 2) + nums[i], helper(nums, i - 1));
                return cache[i];
            }
        }

    }
}

//Best solution//
//
//
//
//
//
//
//
//
/////////////////

function robThree(nums) {
    let cache = {};

    return helper(nums.length - 1);

    function helper(i) {

        if (i in cache) {
            return cache[i];
        }
        else {
            if (i < 0) {
                return 0;
            }
            else {
                cache[i] = Math.max(helper(i - 2) + nums[i], helper(i - 1));
                return cache[i];
            }
        }

    }
}


//console.log(rob([1,2,3,1]));
//console.log(rob([2,7,9,3,1]));

console.log(rob([]));
console.log(rob([2]));
console.log(rob([2, 3]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

console.log("-----------");
console.log(robTwo([]));
console.log(robTwo([2]));
console.log(robTwo([2, 3]));
console.log(robTwo([1, 2, 3, 1]));
console.log(robTwo([2, 7, 9, 3, 1]));


console.log("-----------");
console.log(robThree([]));
console.log(robThree([2]));
console.log(robThree([2, 3]));
console.log(robThree([1, 2, 3, 1]));
console.log(robThree([2, 7, 9, 3, 1]));