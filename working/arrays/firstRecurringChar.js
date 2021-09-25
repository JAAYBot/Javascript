

function firstRecurringChar1(arr) {
    let mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i]))
            return arr[i];

        mySet.add(arr[i]);
    }
    return undefined
}

function firstRecurringChar2(arr) {
    let myMap = new Map();
    let matches = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])){
            matches.set(arr[i],  myMap.get(arr[i]))
        }else{
            myMap.set(arr[i], i);
        }   
    }

    let lowest = Number.POSITIVE_INFINITY;
    let ans = undefined;
    matches.forEach((values,keys)=>{
        if(values < lowest){
            ans = keys;
            lowest = values;
        }
    })

    return ans
}

console.log(firstRecurringChar1([2, 5, 5, 2, 3, 8, 1, 1, 4]));
console.log(firstRecurringChar2([2, 5, 5, 2, 3, 8, 1, 1, 4]));

//console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));

//console.log(firstRecurringChar(2, 3, 4, 5));