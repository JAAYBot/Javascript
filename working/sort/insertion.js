
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 1];

function insertionSort(array){
    let temp;
    for(let i = 1; i<array.length; i++){
        let j = i
        while(array[j] < array[j-1] && j-1 >= 0){
            temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;
            j--;
            console.log(array.join(','));
        }
        console.log("--------------------------------------------");
        //console.log(array.join(','));
    }
}

insertionSort(numbers);
console.log(numbers.join(','));