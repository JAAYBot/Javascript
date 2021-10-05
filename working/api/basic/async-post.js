var http = require('http');

function requestAsync(HOST, PATH, BODY) {
    return new Promise((resolve, reject) => {
        
        var options = {
            host: HOST,
            path: PATH,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let post_req = http.request(options, (res) => {
            
            res.setEncoding('utf8');
            
            res.on('data', (chunk) => {
                resolve(chunk);
            });
            res.on("error", (err) => {
                reject(err);
            });
        });


        post_req.write(JSON.stringify(BODY));
        post_req.end();
    });
}

async function main(){

    let host = "postman-echo.com";
    let path = "/post";
    const body = {
        title: "foo",
        body: "bar",
        userId: 1
    }

    
    let response = await requestAsync(host, path, body);

    let data = JSON.parse(response);
    console.log(typeof data);

    console.log(data['data']);

}


main();