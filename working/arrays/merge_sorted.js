function mergeSortedArray(arr1, arr2) {

    if(arr1.length == 0)
        return arr2;
    
    if(arr2.length == 0)
        return arr1;
    //check input is array ? two paramters

    let tempArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            tempArray.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            tempArray.push(arr2[j]);
            j++;
        }
    }

    if (i === arr1.length) {
        tempArray = tempArray.concat(arr2.slice(j));
    } else if (j === arr2.length) {
        tempArray = tempArray.concat(arr1.slice(i));
    }

    return tempArray;
}

function mergeSortedArray2(arr1, arr2) {
    let tempArray = [];
    while (arr1[0] && arr2[0]) {
        if(arr1[0]<=arr2[0]){
            tempArray.push(arr1[0]);
            arr1.shift();
        }else {
            tempArray.push(arr2[0]);
            arr2.shift();
        }

    }

    if(arr1[0]){
        tempArray = tempArray.concat(arr1);
    }else{
        tempArray = tempArray.concat(arr2);
    }

    return tempArray;
}


console.log(mergeSortedArray([1, 2, 3, 5, 21], [4, 6, 9, 12, 20, 22,26,30]));

console.log(mergeSortedArray2([1, 2, 3, 5, 21], [4, 6, 9, 12, 20, 22,26,30]));

