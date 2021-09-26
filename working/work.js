



let num = 3;

console.log(-num);

let min = -num;

console.log(min);



let nums  = [1, 2, 3, 4, 5]

nums.reduce(function(sum, val){
    console.log("sum: ", sum);
    console.log("val: ", val)

    return sum + val;
})

console.log("nums: ", nums);