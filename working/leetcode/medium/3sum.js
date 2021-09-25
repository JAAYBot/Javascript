/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    let mySet = new Set();
    let finalAnswer = [];
      
    for(let i = 0; i < nums.length; i++){   
        t = 0 - nums[i];
        console.log("t: ", t);
        let tempList = twoSum(nums, t, i, nums[i]);
        console.log("tempList: ", tempList);
        if(tempList){     
            console.log("tempArr2: ",tempList);
            for(let item of tempList)
                mySet.add(item);
        }  
    }
        
    for(let val of mySet)
        finalAnswer.push(val.split(','))
    
    return finalAnswer;
    
    
    
    function twoSum(nums1, target1, skip, val) {
        let myMap1 = new Map();
        let myArr1 = [];
        
        //console.log("nums1: ", nums1, ", target1: ", target1)

        for(let x=0; x < nums1.length; x++){
            if(x !== skip){
                //console.log("x:", x, ", nums1[x]: ", nums1[x]);
                if( myMap1.has(nums1[x]) ){
                    //console.log(myMap1);
                    //console.log("[ ", nums1[x], ", ", target1-nums1[x], "]");
                    //return [nums1[x], target1-nums1[x]];
                    myArr1.push([val, nums1[x], target1-nums1[x]].sort().toString());
                }else{
                    myMap1.set(target1-nums1[x], x);
                }
            }
        }
        return myArr1
    }
       
};