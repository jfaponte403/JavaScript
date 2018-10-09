const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sum = (a,b) =>{
    return Number(a) + Number(b);
}

const sub = (a,b) =>{
    return Number(a) - Number(b);
}

console.log("welcome to the calculator jhonattan. \n");
console.log("Do you want to sum or subtraction? \n");
console.log("For sum enter q or for substraction enter w \n");

let Values1 = [];

rl.on('line', (input) =>{
    Values1.push(input);
    if(Values1.length >= 1 && Values1.length <= 3){
    
        if(Values1.length === 1 && (Values1[0] !== "q" && Values1[0] !== "w")){
            Values1.splice(Values1.length - 1, Values1.length);
            console.log("Try again \n");
        }

         if (Values1.length === 2 && !Number(Values1[Values1.length - 1])) {
            Values1.splice(Values1.length - 1, Values1.length);
            console.log("Try again \n");
        }

        if(Values1.length === 3 && Number(Values1[Values1.length - 1])){
            if(Values1[0] === 'q'){
                rl.write(`${sum(Values1[1], Values1[2])}\n`);
            } else {
                rl.write(`${sub(Values1[1], Values1[2])}\n`)
            }
            rl.close();
        }
    }
});


