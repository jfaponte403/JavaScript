const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdout.write("Enter the data to which you wish to count your characters \n");

rl.on('line', (a) => {
    const letras = a.split('');
    console.log(a.length);
    rl.close();
}); 