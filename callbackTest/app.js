
const request = require('request');


myRequest = function(){
    var var1 = "Var 1";
    request('https://swapi.dev/api/people/9/', function (error, response, body) {
        if(error){
          // Handle error.
          console.log("Error:", error);
        }
        else {
          // Successful, do something with the result.
          console.log("Body:", body);
          console.log("Var1:",  var1);
          request('https://swapi.dev/api/people/1/', function (error, response, body) {
            if(error){
              // Handle error.
              console.log("Error:", error);
            }
            else {
              // Successful, do something with the result.
              console.log("Request 2 Body:", body);
              console.log("var2: ", var1);
              request('https://swapi.dev/api/people/2/', function (error, response, body) {
                if(error){
                  // Handle error.
                  console.log("Error:", error);
                }
                else {
                  // Successful, do something with the result.
                  console.log("Request 3 Body:", body);
                  console.log("var3: ", var1);
                }
              });
            }
          });
        }
      });
}

myRequest();