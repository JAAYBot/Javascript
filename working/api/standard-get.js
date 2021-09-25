const http = require('http')
const options = {
    hostname: 'api.open-notify.org',
    port: 80,
    path: '/astros.json',
    method: 'GET'
}

const req = http.request(options, res => {
    console.log("Get...");
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.log("Error...");
    console.error(error);
})

req.end(
    console.log("End...")
)