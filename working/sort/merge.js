
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 1];

//const numbers = [99, 44, 6, 2];

function mergeSort(array){
    //console.log(array.join(','));
    if(array.length === 1){
        return array;
    }

    let left = array.slice(0, array.length/2);
    let right = array.slice(array.length/2);

    //console.log("left: ", left.join(','));
    //console.log("right: ", right.join(','));

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}

function merge(left, right){
    console.log("left: ", left, ", right: ", right);
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length &&
            rightIndex < right.length){

        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

let newNumbers = mergeSort(numbers);
console.log(newNumbers.join(','));



function myMergeSort(arr) {
    console.log("mergeSort");

    if(arr.length === 1)
        return arr;
        
 
    let left = arr.slice(0, arr.length/2);
    let right = arr.slice(arr.length/2, arr.length);
    return myMergeHelper(myMergeSort(left), myMergeSort(right))

}

function myMergeHelper(left, right) {
    console.log("mergeHelper");
    let temp = []

    while(left[0] && right[0]){
        console.log(left, " : ", right)
        if(left[0] <= right[0]){
            temp.push(left.shift());         
        }else{
            temp.push(right.shift());     
        }
    }

    if(left[0])
        temp = temp.concat(left);
    else
        temp = temp.concat(right);
    
    return temp;

}