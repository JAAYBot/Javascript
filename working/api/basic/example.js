var http = require('http');

function requestAsync() {
    return new Promise((resolve, reject) => {
        
        var post_options = {
            host: 'api.open-notify.org',
            //port: '80',
            path: `/astros.json`,
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


        post_req.write('test');
        post_req.end();
    });
}

async function main(){

    //Calling request function
    //:1- as promise

    requestAsync().then(countryDetails => {
        console.log(countryDetails);
    }).catch((err) => {
        console.log(err);  
    }); 

    let countryDetails = await requestAsync();

    //:2- as await
    console.log(countryDetails)
}


main();