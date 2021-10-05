const fetch = require("node-fetch");

async function getFetch(url) {
    let response = await fetch(url);
    let json;
    if (response.ok)
        json = await response.json();
    else
        return response.status;

    return json;
}

function getName(arr){
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

async function main() {
    console.log("....1");
    const URL = 'http://api.open-notify.org/astros.json';
    console.log("....2");
    let data =  await getFetch(URL);
    console.log("....3");
    console.log(data);
    console.log("....4");
    let names = getName(data['people']);
    console.log("....5");
    console.log(names)
    console.log("....6");
    countTo(10000);
    console.log("....7");
}

main();