const http = require('http');

const message = "HELLO JOHN!!!";
const options = {
    method: 'GET',
    host: '127.0.0.1',
    port: 9090,
    path: '/',
    headers: {
        'content-type': 'text/plain',
        'content-length': message.length
    }
};

const req = http.request(options, res => {
    content = '';

    res.on('data', data => {
        content+= data;
    });

    res.on('end', () => {
        console.log(content);
    });

});

function main(){
    req.write(message);
    req.end();
}


main();