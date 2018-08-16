const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (x) => {
    for(i=0; i<x; i++){
        console.log(`Received: ${x}`);
        rl.close();
    }
});