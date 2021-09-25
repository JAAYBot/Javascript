

letters = ['a', 'd', 'z', 'e', 'r', 'b'];

numbers = [2, 65, 34, 2, 1, 7, 8];

console.log(letters.sort());
console.log(numbers.sort());


console.log(
    numbers.sort(function(a, b){
        return a-b;
    })
)