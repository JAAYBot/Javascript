
let i = 0

async function main() {
    while (true) {
        console.log("i: ", i++);
        await new Promise(resolve => setTimeout(resolve, 1000));

    }
}

main();