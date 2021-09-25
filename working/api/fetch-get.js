const fetch = require("node-fetch");

const URL = 'http://api.open-notify.org/astros.json';

async function getURL(url) {
    let resp = await fetch(url);

    if (resp.ok)
        return await resp.json();
    else         
        return resp.error;
}

async function main(){
    let data = await getURL(URL);
    console.log(data['people']);
}

main();








