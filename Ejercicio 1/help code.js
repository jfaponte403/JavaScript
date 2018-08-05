const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let a = [];
console.log("One")
console.log("Two");
rl.on('line', (input) => {
    a.push(input);
    if(a.length === 2){
        rl.close();
    }
});
console.log("One = " + a[0]);
console.log("Two = " + a[1]);