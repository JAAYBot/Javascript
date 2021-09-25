const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// mine from scratch
function bubbleSort(array) {
    console.log(array.join(','));
    let i = 0, j = 1;

    let c = 0;

    while (c < array.length) {
        i = 0, j = 1;
        for (; j <= array.length - 1; i++, j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        c++;

        console.log(array.join(','));
        
    }

    return array;
}

//bubbleSort(numbers);

console.log(numbers.join(','));


function bubbleSort2(array){
    for(let i = 0; i<array.length;i++){
        for(let j = 0; j<array.length-1;j++){
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        console.log(array.join(','));
        }
        console.log("--------------------------------------------");
        //console.log(array.join(','));


    }
    return 
}

bubbleSort2(numbers);
console.log(numbers.join(','));