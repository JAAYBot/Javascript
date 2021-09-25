

var searchInsert = function (nums, target) {
    
    var right = nums.length - 1;
    var left = 0;
    while (left < right) {
        var mid = ((left + right) / 2)|0;

        console.log('left: ', left, ', mid: ', mid, ', right: ', right);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }

    console.log("left: ", left, ", left+1: ", left+1);

    return target > nums[left] ? left + 1 : left;

};







//let nums = [1, 3, 5, 6, 8, 9, 12, 14, 19, 20, 21, 27], target = 23;

let nums = [1,3,5,6], target = 2;

console.log(searchInsert(nums, target));