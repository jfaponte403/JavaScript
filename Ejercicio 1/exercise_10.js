const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lotData = [];

rl.on('line',(input) =>{
    lotData.push(input);
    if(lotData.length === 2){
        lotData.pop();
    }
    console.log(lotData);
});
