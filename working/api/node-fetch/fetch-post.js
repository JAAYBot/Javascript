
const fetch = require("node-fetch");

const URL = 'https://postman-echo.com/post'

async function postURL(url, options) {
    let resp = await fetch(url, options);

    if (resp.ok)
        return await resp.json();
    else
        return resp.error;
}

async function main() {

    const body = {
        title: "foo",
        body: "bar",
        userId: 1
    }
    const options = {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    }

    let data = await postURL(URL, options);
    console.log(data['data']);
}

main();
