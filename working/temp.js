
let i = 0

async function main() {
    while (true) {
        console.log("temp i: ", i++);
        await new Promise(resolve => setTimeout(resolve, 1000));

        if(i === 5)
            break;
    }
}

main();