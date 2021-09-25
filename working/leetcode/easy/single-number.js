var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let myMap = new Map();
    
    for(let i=0; i < nums.length; i++){   
        myMap.set(nums[i], myMap.get(nums[i])+1||1);     
    }
    
    console.log(myMap);
    
    for(let [key, value] of myMap)
        if(value === 1)
            return key
    
    
    return 0;
};