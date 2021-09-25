
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 1];

function selectionSort(array){
    let min = Number.MAX_VALUE, index, temp;
    for(let i = 0; i<array.length; i++){
        for(let j = i; j<array.length; j++){
            if(array[j] <= min){
                min = array[j];
                index = j;
            }
        console.log(array.join(','));    
        }
        temp = array[i];
        array[i] = min;
        array[index] = temp;
        min = Number.MAX_VALUE;
        //console.log(array.join(','));
        console.log("--------------------------------------------");
    }
}

selectionSort(numbers);
console.log(numbers.join(','));