/*
Use Firefox to test
*/
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
const { nextTick } = require('process');
var app = express();

var httpServer = http.createServer(app);

var httpsServer = https.createServer(credentials, app);


app.all('*', function (req, res, next) {
    console.log("getting..........");
    if(!req.secure){
        console.log("redirecting........");
        console.log('https://localhost:8080' + req.url);
        res.redirect('https://localhost:8080' + req.url);
        res.end();
    }
    next()
});

app.get('/', function(req, res){
    return res.end('<h1>Hello World!</h1>');
});

app.get('/test', function(req, res){
    return res.end('<h1>Hello Test!</h1>');;
});


// For http
httpServer.listen(8888, '127.0.0.1', function () {
    console.log(`httpServer listening at 127.0.0.1 on port 8888`);
});

// For https
httpsServer.listen(8080, '0.0.0.0', function () {
    console.log(`httpServer listening at 0.0.0.0 on port 8080`);
});





