


let nums  = [10, 10, 10, 50, 100];

let starting = 0;

let Total = nums.reduce(function(total, item){
    console.log("iteam: ", item, ", total: ", total);
    return total + item;
}, starting)

console.log("Total: ", Total);