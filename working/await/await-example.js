
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {setTimeout(() => {resolve(x);}, 4000);});
}

function sleep(s) {
    return new Promise((resolve) => setTimeout(resolve, s*1000));
  }

async function resolveAfterSeconds(x){
    return await new Promise(resolve => setTimeout(resolve, 4000));
    
}



async function main() {
    var x = await resolveAfter2Seconds("Hello");
    console.log("x: ", x); // 10

    await resolveAfterSeconds(5);

    console.log("y not");

    await sleep(10);
    console.log("fin");
}

main();



