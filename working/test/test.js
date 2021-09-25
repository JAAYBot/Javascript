

const fruits = [10, 10, 10];
function myFunction(item){
    return item+10;
}
console.log(fruits.forEach(myFunction));

const a = [1, 2, 3];
a.forEach((entry) => {
    return entry*2;
});