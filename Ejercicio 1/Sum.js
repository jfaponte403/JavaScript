const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sum = (a,b) =>{
    return Number(a) + Number(b);
}

console.log("welcome to the calculator jhonattan. \n");
console.log("Enter the numbers you want to sum. \n");

let ValuesOfSuma = [];
let Pos = 0;
let n = 2;

rl.on('line', (input) =>{
    ValuesOfSuma.push(input);
    if(ValuesOfSuma.length === 2){
    if(Number(ValuesOfSuma[0] && ValuesOfSuma[1])){
        console.log(sum(ValuesOfSuma[0],ValuesOfSuma[1]));
    } else {
        console.log("Invalid data.");
        }
    }

    if(ValuesOfSuma.length === 2){
        ValuesOfSuma.splice(Pos, n);
    }
});







