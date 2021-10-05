var http = require('http');

function requestAsync(HOST, PATH) {
    return new Promise((resolve, reject) => {
        
        var post_options = {
            host: HOST,
            path: PATH,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let post_req = http.request(post_options, (res) => {
            
            res.setEncoding('utf8');
            
            res.on('data', (chunk) => {
                resolve(chunk);
            });
            res.on("error", (err) => {
                reject(err);
            });
        });


        post_req.write("");
        post_req.end();
    });
}

async function main(){

    let host = "api.open-notify.org";
    let path = "/astros.json";

    let response = await requestAsync(host, path);
    console.log(response)
}


main();