const URL1 = 'http://api.open-notify.org/astros.json';
const URL2 = 'https://postman-echo.com/post';

const fetch = require('node-fetch');

async function GET(url) {
    res = await fetch(url);

    if (res.ok) {
        return res.json();
    } else {
        return res.error;
    }
};

async function POST(url, opts) {
    res = await fetch(url, opts);

    if (res.ok) {
        return res.json();
    } else {
        return res.erro;
    }
}

async function main() {
    console.log("Main");

    let result = await GET(URL1);
    console.log(result);

    let data = result['people'];

    options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    let answer = await POST(URL2, options);

    for(let [key, value] of Object.entries(answer['data'])){
        console.log("key: ", key, ", name: ", value['name']);
    }
    console.log(answer);

};

main();