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

const mul = (a,b) =>{
    return Number(a) * Number(b);
}

const div = (a,b) =>{
    return Number(a) / Number(b);
}

console.log("Calculator. \n");
console.log("Do you want to sum or subtraction?. \n");
console.log("For sum enter q or for substraction enter w or for multiply enter e or for division r. \n");

let Values = [];

rl.on('line', (input) =>{
    Values.push(input);
    if(Values.length >= 1 && Values.length <= 3){
        if(Values.length === 1 && (Values[0] !== "q" && Values[0] !== "w" && Values[0] !== "e" && Values[0] !== "r")){
            Values.splice(Values.length - 1, Values.length);
            console.log("Try again \n");
        }

        if (Values.length === 2 && !Number(Values[Values.length - 1])) {
            Values.splice(Values.length - 1, Values.length);
            console.log("Try again \n");
        }

        if (Values.length === 3 && !Number(Values[Values.length - 1])) {
            Values.splice(Values.length - 1, Values.length);
            console.log("Try again \n");
        }

        if(Values.length === 3 && Number(Values[Values.length - 1])){
            if(Values[0] === 'q'){
                rl.write(`${sum(Values[1], Values[2])}\n`);
                rl.close();
            }
        }

        if(Values.length === 3 && Number(Values[2])){
            if(Values[0] === 'w'){
                rl.write(`${sub(Values[1], Values[2])} \n`);
                rl.close();
            }
        }

        if(Values.length === 3 && Number(Values[2])){
            if(Values[0] === 'e'){
                if(Values[1] === 0 && Values [2] === 0){
                    Values.splice(Values[1], Values[2]);
                    console.log("Try again \n");
                    console.log(Values);
                }
                rl.write(`${mul(Values[1], Values[2])} \n`);
                typeof(Values[3]);
                console.log(Values);
                rl.close();
            }
        }

        if(Values.length === 3 && Number(Values[2])){
            if(Values[0] === 'r'){
                rl.write(`${div(Values[1], Values[2])} \n`);
                console.log(Values);
                rl.close();
            }
        }

    }
});