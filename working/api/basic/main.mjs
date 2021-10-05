import fetch from "node-fetch";
const URL = 'http://api.open-notify.org/astros.json';

async function getURL(url) {
    let resp = await fetch(url);

    if (resp.ok)
        return await resp.json();
    else         
        return resp.error;
}

function printArr(arr){
    let ans = [];
    for(let items in arr){
        console.log("here: ", arr[items].name);
        ans.push(arr[items].name)
    }
       

    return ans;
}

function countTo(number){
    for(let i = 0; i<number; i++)
        console.log(".... ", i)
}

console.log("....1");
let data = await getURL(URL);
console.log("....2");
console.log(data['people']);
console.log("....3");
let people  =  printArr(data.people);
console.log("....4");

console.log(people);

console.log("....5");

countTo(10000);
console.log("....6");




