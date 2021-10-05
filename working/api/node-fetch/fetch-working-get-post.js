const fetch = require("node-fetch");

const URL1 = 'http://api.open-notify.org/astros.json';
const URL2 = 'https://postman-echo.com/post'

async function getURL(url) {
    let resp = await fetch(url);

    if (resp.ok)
        return await resp.json();
    else         
        return resp.error;
}

async function postURL(url, options) {
    let resp = await fetch(url, options);

    if (resp.ok)
        return await resp.json();
    else
        return resp.error;
}


async function main(){
    
    let get_data = await getURL(URL1);

    let people = get_data['people'];
    let body = [];

    for(let person in people)
        body.push(people[person].name);

    const options = {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    }

    let post_data = await postURL(URL2, options);
    console.log(post_data);
    let data = post_data['json'];
    let headers = post_data['headers'];
    //console.log("--------------------------------------------------------------");
    //console.log(data);
    //console.log(headers);
    //console.log("--------------------------------------------------------------");
    //for(let i in data)
    //    console.log(i, "is in space right now!!!");

    //for(let i in headers)
    //    console.log(i, ":", headers[i]);
}

main();
