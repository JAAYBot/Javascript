let dnsClient = require('dns');

let domain = "dublininthesummmer2020.tk";
let block = false;

function test(){
    dnsClient.resolveTxt(`_acme-challenge.${domain}`, 'TXT', (err, dnsRecords) => {
        if (err) {
            console.log("resolveTxt err: ", err);
            block = false; 
        } else {
            console.log("resolveTxt result: ", dnsRecords);
            block = false; 
        }
    });
}

function exe(){
    while (true) {
        if(!block){
            block = true; 
            test(); 
        }
    }
    return;
};

dnsClient.resolveTxt(`_acme-challenge.${domain}`, 'TXT', (err, dnsRecords) => {
    console.log("2");
    if (err) {
        console.log("3");
        console.log("resolveTxt err: ", err);
        block = false; 
    } else {
        console.log("4");
        console.log("resolveTxt result: ", dnsRecords);
        block = false; 
    }
});