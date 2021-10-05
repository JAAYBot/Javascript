const http = require('http');

async function main() {
    console.log("Main...");

    // `res` is an instance of Node's built-in `ServerResponse` class:
    // https://nodejs.org/api/http.html#http_class_http_serverresponse
    const res = await new Promise(resolve => {
        http.get('http://httpbin.org/get?answer=42', resolve);
    });

    // A ServerResponse is a readable stream, so you need to use the
    // stream-to-promise pattern to use it with async/await.
    let data = await new Promise((resolve, reject) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('error', err => reject(err));
        res.on('end', () => resolve(data));
    });

    data = JSON.parse(data);
    data.args; // { answer: 42 }





}

main();